import axios from 'axios'
import {setFiles, addFile} from "../reducers/fileReducer";

export function getFiles(dirId) {
  return async dispatch => {
      try {
          const response = await axios.get(`http://localhost:5000/api/files${dirId ? '?parent='+dirId : ''}`, {
              headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
          })
          dispatch(setFiles(response.data))
      } catch (e) {
        console.error(e)
      }
  }
}

export function createDir(dirId, name) {
  return async dispatch => {
      try {
          const response = await axios.post(`http://localhost:5000/api/files`, {
            name,
            parent: dirId,
            type: 'dir'
          },
          {
              headers: {Authorization: `Bearer ${localStorage.getItem('token')}`}
          })
          dispatch(addFile(response.data))
      } catch (e) {
          console.error(e)
      }
  }
}
