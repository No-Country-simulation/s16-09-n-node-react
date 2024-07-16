import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { esES } from "@clerk/localizations";


import { store } from "./Redux/store";
import { Provider } from "react-redux";
import { ClerkProvider, GoogleOneTap } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import axios from 'axios';



axios.defaults.baseURL = 'localhost:3000/'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <ClerkProvider 
                   localization={esES}
                  publishableKey={PUBLISHABLE_KEY}
                  appearance={{
                animations:true,

                               layout: {
                                socialButtonsPlacement: 'bottom',
                              socialButtonsVariant: 'blockButton', 
                              signUpFields: [
                                'email',
                                'password',
                                'fullName'
                              ],},
                              helpPageUrl: 'https://docs.clerk.dev/',

        variables: {
          colorPrimary: "#007DFA"
        }
     
      } } 
   
   >
    <Provider store={store} >
    <GoogleOneTap />
      <App />
    </Provider>
    </ClerkProvider>
  </React.StrictMode>,
)
