import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App apiUrl={"https://fakestoreapi.com/products?limit=100"} />
  </React.StrictMode>
);
