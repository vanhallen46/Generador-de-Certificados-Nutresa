import React from "react";
import {
  FileUploader,
  Flex,
  SelectField,
  TextField,
} from "@aws-amplify/ui-react";
import "../styles/crearProyecto.css";
import "@aws-amplify/ui-react/styles.css";
import DragAndDrop from "../components/dragAndDrop";
/* import { Stage, Layer, Text } from "react-konva"; */

function crearProyecto() {
  return (
    <div className="project-container">
      <div className="uploader-container">
        <h1>Crear Proyecto</h1>
        <TextField label="Nombre del Proyecto" />
        {/* <SelectField label="Selecciona el color de la fuente">
          <option value="Blanco">Blanco</option>
          <option value="Negro">Negro</option>
        </SelectField> */}

        <DragAndDrop />

        <Flex direction="column"></Flex>
      </div>
    </div>
  );
}

export default crearProyecto;
