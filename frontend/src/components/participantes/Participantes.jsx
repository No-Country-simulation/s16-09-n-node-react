import React from "react";
import "./participantes.css";
import data from "../../data/personas.json";
import { useState, useEffect } from "react";

const Participantes = () => {
  const [personas, setPersonas] = useState([]);

  const listaPersonas = () => {
    return new Promise((resolve, reject) => {
      resolve(data);
    });
  };

  useEffect(() => {
    listaPersonas().then((res) => {
      setPersonas(res);
    });
  });

  return (
    <div>
      {personas.length > 0 &&
        personas.map((personas) => {
          return (
            <div claa>
              <h1>{personas.id}</h1>
              <h2>{personas.first_name}</h2>
              <h2>{personas.last_name}</h2>
              <h2>{personas.email}</h2>
              <h3>{personas.ip_address}</h3>
              <img src={personas.img} alt="" />
            </div>
          );
        })}
    </div>
  );
};
<div />;

export default Participantes;
