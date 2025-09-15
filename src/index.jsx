import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import "@coreui/coreui/dist/css/coreui.min.css";
import "./index.css";
import App from "./App.jsx";
import store from "./store"; // import your Redux store

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
