const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"
const SIGNUP = "SIGNUP"

const defaultState = {
  currentUser: {},
  isAuth: false,
  signedUp: false
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case LOGOUT:
          localStorage.removeItem('token')
          return {
            ...state,
            currentUser: {},
            isAuth: false,
          }
        case SIGNUP:
          return {
            ...state,
            signedUp: action.payload,
          }
        default:
          return state
    }
}

export const setUser = user => ({type: SET_USER, payload: user})
export const logout = () => ({type: LOGOUT})
export const signUp = sign => ({type: SIGNUP, payload: sign })
