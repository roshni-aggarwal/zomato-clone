import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

// redux
import { Provider } from "react-redux";
import store from "./redux/store";

if (localStorage.zomatoUser) {
  const { token } = JSON.parse(localStorage.zomatoUser);
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
