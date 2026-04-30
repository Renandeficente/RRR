import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Card from "./components/Card";
import ConteudoPrincipal from "./components/ConteudoPrincipal";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Header />
    <ConteudoPrincipal />
    <Footer />
  </React.StrictMode>,
);
