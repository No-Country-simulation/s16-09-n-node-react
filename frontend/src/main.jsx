import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

import { store } from "./Redux/store";
import { Provider } from "react-redux";

import axios from 'axios'
axios.defaults.baseURL = 'localhost:3000/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </React.StrictMode>,
)
