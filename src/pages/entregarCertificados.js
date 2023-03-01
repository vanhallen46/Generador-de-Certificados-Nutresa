import React, { useEffect, useState } from "react";
import {
  FileUploader,
  TextField,
  TextAreaField,
  Text,
  Flex,
  SelectField,
  Button,
} from "@aws-amplify/ui-react";
import "../styles/entregarCertificados.css";
import axios from "axios";

const http = axios.create({
  baseURL: "https://kqp9f19nq6.execute-api.us-east-1.amazonaws.com/",
});

function EntregarCertificados() {
  const [listProjects, setListProjects] = useState([]);
  useEffect(() => {
    http
      .get("v1/project", {
        headers: {
          "Content-Type": "application/json",
          Authorization: sessionStorage.getItem("idToken"),
        },
      })
      .then((response) => {
        console.log(response);
        setListProjects(response.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const onChange = async (e) => {
    /* // FileUploader returns a File object
    const file = e.target.files[0];
    // Convert the file to base64
    const fileBase64 = await fileToBase64(file); */
    console.log(e.target.value);
    console.log(e.target.files[0]);
  };

  const fileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const data = {
      _id: e.target.project.value,
      name: e.target.name.value,
      description: e.target.description.value,
      metadata: {
        StartDate: e.target.startDate.value,
        EndDate: e.target.endDate.value,
        TokenStandard: "ERC721",
        Event: e.target.event.value,
        Author: e.target.author.value,
        Creator: "Blockchain eX Innovation Center",
      },
      /* file: e.target.upload.value, */
    };
    console.log(data);
  };
  return (
    <div className="project-container">
      <form id="form" onSubmit={onSubmit} className="uploader-container">
        <h1>Crear Proyecto NFT</h1>
        <TextField required name="name" label="Nombre del NFT" />
        <TextAreaField name="description" label="Descripción" />
        <SelectField name="project" label="Selecciona tu proyecto">
          {listProjects.map((project, index) => (
            <option value={project._id}>{project.name}</option>
          ))}
        </SelectField>
        <Text
          variation="primary"
          as="p"
          color="black"
          lineHeight="1.5em"
          fontWeight={400}
          fontSize="1em"
          fontStyle="normal"
          textDecoration="none"
          width="30vw"
          marginBottom="5px"
        >
          Fecha de inicio
        </Text>
        <input type="date" name="startDate" />
        <Text
          variation="primary"
          as="p"
          color="black"
          lineHeight="1.5em"
          fontWeight={400}
          fontSize="1em"
          fontStyle="normal"
          textDecoration="none"
          width="30vw"
          marginBottom="5px"
          marginTop="10px"
        >
          Fecha de inicio
        </Text>
        <input type="date" name="endDate" />
        <TextField label="Nombre del evento" name="event" marginTop="10px" />
        <TextField label="Autor" name="author" />
        {/* <input type="file" name="fileUploader" onChange={onChange} /> */}
        <FileUploader
          isPreviewerVisible={true}
          acceptedFileTypes={[".xlsx", "xls"]}
          accessLevel="public"
        />
        <Button type="submit">Crear</Button>
        <Flex direction="column" alignItems={"center"}></Flex>
      </form>
    </div>
  );
}

export default EntregarCertificados;
