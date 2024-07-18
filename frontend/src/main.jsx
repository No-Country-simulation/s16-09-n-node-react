import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { esES } from "@clerk/localizations";
<<<<<<< HEAD
=======
import { ThemeProvider } from './context/themecontext';
>>>>>>> origin/dev

import { store } from "./Redux/store";
import { Provider } from "react-redux";
import { ClerkProvider, GoogleOneTap } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import axios from "axios";

axios.defaults.baseURL = "localhost:3000/";

<<<<<<< HEAD
const PUBLISHABLE_KEY =
  "pk_test_dG9nZXRoZXItbGFkeWJpcmQtMzQuY2xlcmsuYWNjb3VudHMuZGV2JA";
=======


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY
>>>>>>> origin/dev
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
<<<<<<< HEAD
    <ClerkProvider
      localization={esES}
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        baseTheme: [dark],

        layout: {
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "blockButton",
          signUpFields: ["email", "password", "fullName"],
        },

        variables: {
          colorPrimary: "#007DFA",
        },
      }}
    >
      <Provider store={store}>
        <GoogleOneTap />
        <App />
      </Provider>
    </ClerkProvider>
  </React.StrictMode>
);
=======
    <ThemeProvider>
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
    </ThemeProvider>
  </React.StrictMode>,
)
>>>>>>> origin/dev
