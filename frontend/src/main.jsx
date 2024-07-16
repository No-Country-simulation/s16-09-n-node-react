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




const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key")
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   
   <ClerkProvider   afterSignOutUrl="/"
                    signInFallbackRedirectUrl="/dashboard"
                    localization={esES}
                    publishableKey={PUBLISHABLE_KEY}
                    appearance={{
                                variables: {
                                            fontFamily: "Sans-Serif",   
                                          color: "#007DFA" },
                                  layout: {
                                            termsPageUrl: '/auth/terms',  
                                            socialButtonsPlacement: 'bottom',
                                            socialButtonsVariant: 'blockButton', 
                                   },
                                  helpPageUrl: 'https://docs.clerk.dev/',

                                  variables: {
                                              colorPrimary: "#007DFA" }
      } } 
      >
    <Provider store={store} >
    <GoogleOneTap />
    <App />
    </Provider>
    </ClerkProvider>
  </React.StrictMode>,
)
