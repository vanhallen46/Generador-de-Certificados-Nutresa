import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Menu from "./pages/menu";
import CrearProyecto from "./pages/crearProyecto";
import EntregarCertificados from "./pages/entregarCertificados";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/pages/menu",
    element: <Menu />,
  },
  {
    path: "/pages/crearproyecto",
    element: <CrearProyecto />,
  },
  {
    path: "/pages/entregarcertificados",
    element: <EntregarCertificados />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
