import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Creatstore } from "./store/themeReducer.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Creatstore>
    <App />
  </Creatstore>
);
