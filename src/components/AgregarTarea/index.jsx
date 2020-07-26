import React, { useState } from "react";
import { IoMdAddCircle } from "react-icons/io";

const AgregarTarea = () => {
  const [list, setList] = useState([]);
  const [text, setText] = useState("");

  const agregarItem = () => {
    setList([...list]);
  };
  return (
    <div>
      <div className="input-container">
        <input
          onChange={(event) => setText(event.target.value)}
          value={text}
          className="input"
          placeholder="Ingrese una tarea"
        ></input>
        <button className="btn">
          <IoMdAddCircle className="icono" />
        </button>
      </div>
      <ul>
        {list.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default AgregarTarea;
