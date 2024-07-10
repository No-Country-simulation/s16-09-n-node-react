import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'


import { store } from "./Redux/store";
import { Provider } from "react-redux";
import { ClerkProvider } from "@clerk/clerk-react";

import axios from 'axios'
axios.defaults.baseURL = 'localhost:3000/'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
    <Provider store={store} >
      <App />
    </Provider>
    </ClerkProvider>
  </React.StrictMode>,
)
