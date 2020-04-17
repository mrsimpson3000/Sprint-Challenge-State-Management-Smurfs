import React, { useEffect, useState } from "react";
import axios from "axios";
import { v4 as uuid } from "uuid";

import Header from "./Header";
import Cards from "./Cards";
import {
  SmurfContext,
  FormContext,
  InputContext,
  SubmitContext,
} from "../contexts";

export default function App() {
  const [smurfs, setSmurfs] = useState([]);
  const [formValues, setFormValues] = useState({
    name: "",
    age: "",
    height: "",
  });

  console.log(formValues);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((response) => {
        // console.log(response.data);
        setSmurfs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onInputChange = (event) => {
    event.preventDefault();
    setFormValues({
      ...formValues,
      [event.target.name]: event.target.value,
    });
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    const newSmurf = {
      age: formValues.age,
      height: formValues.height,
      id: uuid(),
      name: formValues.name,
    };
    setSmurfs([...smurfs, newSmurf]);
    setFormValues({
      name: "",
      age: "",
      height: "",
    });
  };

  return (
    <SmurfContext.Provider value={smurfs}>
      <Header />
      <FormContext.Provider value={formValues}>
        <InputContext.Provider value={onInputChange}>
          <SubmitContext.Provider value={onFormSubmit}>
            <Cards />
          </SubmitContext.Provider>
        </InputContext.Provider>
      </FormContext.Provider>
    </SmurfContext.Provider>
  );
}
