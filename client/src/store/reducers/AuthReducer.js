import {
  SET_AUTHENTICATED,
  SET_CURRENT_USER,
  SET_LOGIN_CREDS,
  SET_NEW_USER,
  SET_REGISTERED
} from '../types'

const initialState = {
  currentUser: {},
  loginCreds: {
    username: '',
    password: ''
  },
  newUser: {
    username: '',
    password: '',
    email: ''
  },
  isRegistered: false,
  isAuthenticated: false
}

const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return { ...state, currentUser: action.payload }
    case SET_LOGIN_CREDS:
      return {
        ...state,
        loginCreds: {
          ...state.loginCreds,
          [action.payload.name]: action.payload.value
        }
      }
    case SET_NEW_USER:
      return {
        ...state,
        newUser: {
          ...state.newUser,
          [action.payload.name]: action.payload.value
        }
      }
    case SET_REGISTERED:
      return { ...state, isRegistered: !state.isRegistered }
    case SET_AUTHENTICATED:
      return { ...state, isAuthenticated: !state.isAuthenticated }
    default:
      return { ...state }
  }
}

export default AuthReducer