import React, { useEffect, useState } from "react";
import axios from "axios";

import Header from "./Header";
import Cards from "./Cards";

export default function App() {
  const [smurfs, setSmurfs] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3333/smurfs")
      .then((response) => {
        console.log(response.data);
        setSmurfs(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <Header />
      <Cards />
    </div>
  );
}
