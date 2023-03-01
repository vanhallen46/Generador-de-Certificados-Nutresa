import React from "react";
import { Link } from "react-router-dom";
import "../styles/menu.css";
/* import {
  SelectField,
  FileUploader,
  ThemeProvider,
} from "@aws-amplify/ui-react"; */

/* const theme = {
  name: "my-theme",
  tokens: {
    colors: {},
    borderWidths: {
      small: { value: "2px" },
      medium: { value: "4px" },
      large: { value: "8px" },
    },
    radii: {
      xs: { value: "1rem" },
      small: { value: "2rem" },
      medium: { value: "2rem" },
      large: { value: "2rem" },
      xl: { value: "3rem" },
    },
  },
}; */

function Menu() {
  return (
    <div className="menu-container">
      <h1>Certificados</h1>
      <Link to="/pages/crearproyecto" className="buttons">
        Crear proyecto de certificados
      </Link>
      <Link to="/pages/entregarcertificados" className="buttons">
        Entregar certificados
      </Link>
    </div>
  );
}

export default Menu;
