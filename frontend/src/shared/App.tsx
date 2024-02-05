import { hot } from "react-hot-loader";
import React, { useEffect, useState } from "react";
import * as styles from "../main.global.css"
import { MemoryRouter as BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import { Header } from "./Header";
import { Content } from "./Content";
import { Registration } from "./Registration";
import { Login } from "./Login";
import { Statistics } from "./Statistics";
import {store} from "../reducers/index"
import { registration, auth } from "../actions/user";
import { Placeholder } from "./Placeholder";
import { DataProvider } from "../context/dataContext";
import { Provider, useDispatch, useSelector } from "react-redux";

function AppComponent() {
  const isAuth = useSelector((state: any) => state.user.isAuth);
  const signedUp = useSelector((state: any) => state.user.signedUp);

  const dispatch: (action: any) => Promise<any> = useDispatch()
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    dispatch(auth());
    dispatch(registration())
    setMounted(true);
  },[])

  return (
    <Provider store={store} >
      {mounted && (
        <BrowserRouter>
          <div className={styles.App}>
            <Header  ContainerStyle={styles.MainContainer}/>

            {!isAuth &&
              <Routes>
                <Route path="/main" element={<Placeholder />}/>
                <Route path="/registration" element={<Registration />} />
                <Route path="/login" element={<Login />} />
                <Route path="/*" element={<Placeholder />}/>
              </Routes>
            }
            {isAuth &&
              <Routes>
                <Route path="/main" element={<Content />}/>
                <Route path="/statistics" element={
                  <DataProvider>
                    <Statistics />
                  </DataProvider>
                  }
                />
                <Route path="/*" element={<Content />}/>
              </Routes>
            }

            {signedUp &&
              <Routes>
                <Route path="/registration" element={<Navigate to={"/login"} />} />
              </Routes>
            }
          </div>
        </BrowserRouter>
      )}
    </Provider>
  )
}

export const App = hot(module)(
  () => <Provider store={store}>
    <AppComponent />
  </Provider>
);
