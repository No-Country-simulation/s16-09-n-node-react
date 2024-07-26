import React from "react";

import "./index.css";

import { ClerkProvider, GoogleOneTap } from "@clerk/clerk-react";
import { esES } from "@clerk/localizations";
import ReactDOM from "react-dom/client";
// import { dark } from "@clerk/themes";
// import axios from "axios";
import { Provider } from "react-redux";

import App from "./App";
import { ThemeProvider } from "./context/themecontext";
import { store } from "./Redux/store";

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;
if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClerkProvider
      afterSignOutUrl='/'
      signInFallbackRedirectUrl='/dashboard/home'
      localization={esES}
      publishableKey={PUBLISHABLE_KEY}
      appearance={{
        variables: {
          fontFamily: "Sans-Serif",
          color: "#007DFA",
          colorPrimary: "#007DFA",
        },
        layout: {
          termsPageUrl: "/auth/terms",
          socialButtonsPlacement: "bottom",
          socialButtonsVariant: "blockButton",
        },
        helpPageUrl: "https://docs.clerk.dev/",
      }}
    >
      <ThemeProvider>
        <Provider store={store}>
          <GoogleOneTap />
          <App />
        </Provider>
      </ThemeProvider>
    </ClerkProvider>
  </React.StrictMode>
);
