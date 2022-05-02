import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";
import { BrowserRouter } from "react-router-dom";
// dev-dncrp7bc.us.auth0.com
// 5TgYdgDetszqVF49w6piJXIY64kJTKDI
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Auth0Provider
        domain="dev-dncrp7bc.us.auth0.com"
        clientId="5TgYdgDetszqVF49w6piJXIY64kJTKDI"
        redirectUri={window.location.origin}
        cacheLocation="localstorage"
      >
        <GithubProvider>
          <App />
        </GithubProvider>
      </Auth0Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

serviceWorker.unregister();
