import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Header from "./components/Header";
import Card from "./components/Card";
import ConteudoPrincipal from "./components/ConteudoPrincipal";
import { BrowserRouter} from "react-router-dom";
import AppRoutes from "./route";
import Carrinho from "./Pages/Carrinho";
import { CarrinhoProvider } from "./Context/CarrinhoContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <CarrinhoProvider>
          <Header />
          <AppRoutes/>
    </CarrinhoProvider>
    </BrowserRouter>
  </React.StrictMode>
);
