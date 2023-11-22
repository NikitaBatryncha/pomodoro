/* eslint-disable no-console */
// импорт стандартных библиотек Node.js
const { existsSync, readFileSync, writeFileSync } = require('fs');
const { createServer } = require('http');

// файл для базы данных
const DB_FILE = process.env.DB_FILE || './db.json';
// номер порта, на котором будет запущен сервер
const PORT = process.env.PORT || 3003;
// префикс URI для всех методов приложения
const URI_PREFIX = '/api/storage';

/**
 * Класс ошибки, используется для отправки ответа с определённым кодом и описанием ошибки
 */
class ApiError extends Error {
    constructor(statusCode, data) {
        super();
        this.statusCode = statusCode;
        this.data = data;
    }
}

/**
 * Асинхронно считывает тело запроса и разбирает его как JSON
 * @param {Object} req - Объект HTTP запроса
 * @throws {ApiError} Некорректные данные в аргументе
 * @returns {Object} Объект, созданный из тела запроса
 */
function drainJson(req) {
  return new Promise((resolve) => {
      let data = '';
      req.on('data', (chunk) => {
          data += chunk;
      });
      req.on('end', () => {
          resolve(data);  // Разрешить с обычным текстом
      });
  });
}

/**
 * Проверяет входные данные и создаёт из них корректный объект data
 * @param {Object} data - Объект с входными данными
 * @throws {ApiError} Некорректные данные в аргументе (statusCode 422)
 * @returns {{ data: string }} Объект data
 */
function makeDataStorage(data) {
    const errors = [];

    function asString(v) {
        return v && String(v).trim() || '';
    }

    // составляем объект, где есть только необходимые поля
    const dataStorage = {
        data: asString(data.name),
    }

    return dataStorage;
}

/**
 * Возвращает список студентов из базы данных
 * @param {{ search: string }} [params] - Поисковая строка
 * @returns {{ data: string }[]} Массив студентов
 */
function getStorageList(params = {}) {
    const dataStorage = JSON.parse(readFileSync(DB_FILE) || '[]');
    if (params.search) {
        const search = params.search.trim().toLowerCase();
        return dataStorage.filter(store => [
                store.data,
            ]
            .some(str => str.toLowerCase().includes(search))
        );
    }
    return dataStorage;
}

/**
 * Создаёт и сохраняет data в базу данных
 * @throws {ApiError} Некорректные данные в аргументе, студент не создан (statusCode 422)
 * @param {Object} data - Данные из тела запроса
 * @returns {{ data: string }} Объект data
 */
function createStorage(data) {
    const newItem = makeDataStorage(data);
    newItem.id = Date.now().toString();
    newItem.createdAt = newItem.updatedAt = new Date().toISOString();
    writeFileSync(DB_FILE, JSON.stringify([...getStorageList(), newItem]), { encoding: 'utf8' });
    return newItem;
}

/**
 * Возвращает объект data по его ID
 * @param {string} itemId - ID data
 * @throws {ApiError} Студент с таким ID не найден (statusCode 404)
 * @returns {{ data: string }} Объект data
 */
function getData(itemId) {
    const data = getStorageList().find(({ id }) => id === itemId);
    if (!data) throw new ApiError(404, { message: 'data Not Found' });
    return data;
}

/**
 * Изменяет data с указанным ID и сохраняет изменения в базу данных
 * @param {string} itemId - ID изменяемого data
 * @param {{ data: string }} data - Объект с изменяемыми данными
 * @throws {ApiError} Студент с таким ID не найден (statusCode 404)
 * @throws {ApiError} Некорректные данные в аргументе (statusCode 422)
 * @returns {{ data: strong }} Объект data
 */
function updatedata(itemId, data) {
    const store = getStorageList();
    const itemIndex = store.findIndex(({ id }) => id === itemId);
    if (itemIndex === -1) throw new ApiError(404, { message: 'Data Not Found' });
    Object.assign(store[itemIndex], makeDataStorage({...store[itemIndex], ...data }));
    store[itemIndex].updatedAt = new Date().toISOString();
    writeFileSync(DB_FILE, JSON.stringify(store), { encoding: 'utf8' });
    return store[itemIndex];
}

/**
 * Удаляет data из базы данных
 * @param {string} itemId - ID data
 * @returns {{}}
 */
function deletedata(itemId) {
    const storage = getStorageList();
    const itemIndex = storage.findIndex(({ id }) => id === itemId);
    if (itemIndex === -1) throw new ApiError(404, { message: 'Data Not Found' });
    storage.splice(itemIndex, 1);
    writeFileSync(DB_FILE, JSON.stringify(storage), { encoding: 'utf8' });
    return {};
}

// создаём новый файл с базой данных, если он не существует
if (!existsSync(DB_FILE)) writeFileSync(DB_FILE, '[]', { encoding: 'utf8' });

// создаём HTTP сервер, переданная функция будет реагировать на все запросы к нему
module.exports = createServer(async(req, res) => {
        // req - объект с информацией о запросе, res - объект для управления отправляемым ответом

        // этот заголовок ответа указывает, что тело ответа будет в JSON формате
        res.setHeader('Content-Type', 'application/json');

        // CORS заголовки ответа для поддержки кросс-доменных запросов из браузера
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

        // запрос с методом OPTIONS может отправлять браузер автоматически для проверки CORS заголовков
        // в этом случае достаточно ответить с пустым телом и этими заголовками
        if (req.method === 'OPTIONS') {
            // end = закончить формировать ответ и отправить его клиенту
            res.end();
            return;
        }

        // если URI не начинается с нужного префикса - можем сразу отдать 404
        if (!req.url || !req.url.startsWith(URI_PREFIX)) {
            res.statusCode = 404;
            res.end(JSON.stringify({ message: 'Not Found' }));
            return;
        }

        // убираем из запроса префикс URI, разбиваем его на путь и параметры
        const [uri, query] = req.url.substr(URI_PREFIX.length).split('?');
        const queryParams = {};

        // параметры могут отсутствовать вообще или иметь вид a=b&b=c
        // во втором случае наполняем объект queryParams { a: 'b', b: 'c' }
        if (query) {
            for (const piece of query.split('&')) {
                const [key, value] = piece.split('=');
                queryParams[key] = value ? decodeURIComponent(value) : '';
            }
        }

        try {
            // обрабатываем запрос и формируем тело ответа
            const body = await (async() => {
                if (uri === '' || uri === '/') {
                    // /api/storage
                    if (req.method === 'GET') return getStorageList(queryParams);
                    if (req.method === 'POST') {
                        const createdItem = createStorage(await drainJson(req));
                        res.statusCode = 201;
                        res.setHeader('Access-Control-Expose-Headers', 'Location');
                        res.setHeader('Location', `${URI_PREFIX}/${createdItem.id}`);
                        return createdItem;
                    }
                } else {
                    // /api/storage/{id}
                    // параметр {id} из URI запроса
                    const itemId = uri.substr(1);
                    if (req.method === 'GET') return getData(itemId);
                    if (req.method === 'PATCH') return updatedata(itemId, await drainJson(req));
                    if (req.method === 'DELETE') return deletedata(itemId);
                }
                return null;
            })();
            res.end(JSON.stringify(body));
        } catch (err) {
            // обрабатываем сгенерированную нами же ошибку
            if (err instanceof ApiError) {
                res.writeHead(err.statusCode);
                res.end(JSON.stringify(err.data));
            } else {
                // если что-то пошло не так - пишем об этом в консоль и возвращаем 500 ошибку сервера
                res.statusCode = 500;
                res.end(JSON.stringify({ message: 'Server Error' }));
                console.error(err);
            }
        }
    })
    // выводим инструкцию, как только сервер запустился...
    .on('listening', () => {
        if (process.env.NODE_ENV !== 'test') {
            console.log(`Сервер dataStorage запущен. Вы можете использовать его по адресу http://localhost:${PORT}`);
            console.log('Нажмите CTRL+C, чтобы остановить сервер');
            console.log('Доступные методы:');
            console.log(`GET ${URI_PREFIX} - получить список студентов, в query параметр search можно передать поисковый запрос`);
            console.log(`POST ${URI_PREFIX} - создать data, в теле запроса нужно передать объект { name: string, surname: string, lastname: string, birthday: string, studyStart: string, faculty: string}`);
            console.log(`GET ${URI_PREFIX}/{id} - получить data по его ID`);
            console.log(`PATCH ${URI_PREFIX}/{id} - изменить data с ID, в теле запроса нужно передать объект { name?: string, surname?: string, lastname?: string, birthday?: string, studyStart?: string, faculty?: string}`);
            console.log(`DELETE ${URI_PREFIX}/{id} - удалить data по ID`);
        }
    })
    // ...и вызываем запуск сервера на указанном порту
    .listen(PORT);
