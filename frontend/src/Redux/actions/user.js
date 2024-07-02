import { updateUser } from "../slices/userSlices";
import axios from 'axios'

export const signin = (user) => async (dispatch) => {
  try {
    const response = await axios.post('/ruta-de-login', user)
    const { message, data, tkn } = response
    if (message && !message.includes('error')) {
      console.log(message);  // un toast de react-tostify u otro sistema de notificación 
      localStorage.setItem('tkn', tkn)
      dispatch(updateUser(data))
    }
    else console.error(message)
  } catch (error) {
    console.error(error)
  }
}

export const signup = (user) => async (dispatch) => {
  try {
    const response = await axios.post('/ruta-de-signup', user)
    const { message, data, tkn } = response
    if (message && !message.includes('error')) {
      console.log(message);  // un toast de react-tostify u otro sistema de notificación 
      localStorage.setItem('tkn', tkn)
      dispatch(updateUser(data))
    }
    else console.error(message)
  } catch (error) {
    console.error(error)
  }
}
