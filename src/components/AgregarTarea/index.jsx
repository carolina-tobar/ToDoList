import React, { useState } from "react";
import { IoMdAddCircle, IoMdTrash } from "react-icons/io";
import { MdPlaylistAddCheck } from "react-icons/md";

const AgregarTarea = () => {
  const [list, setList] = useState([
    { tarea: "comprar lamparita", estado: "completa" },
    { tarea: "comprar cable", estado: "completa" },
  ]);
  const [text, setText] = useState("");
  const [filter, setFilter] = useState(null);

  const agregar = () => {
    setList([...list, { tarea: text, estado: "incompleta" }]);
  };

  const borrar = (item) => {
    const indexItem = list.indexOf(item);
    const clone = [...list];
    clone.splice(indexItem, 1);
    setList(clone);
  };

  const tachar = (item) => {
    if (item.estado == "incompleta") {
      const indexItem = list.indexOf(item);
      const clone = [...list];
      clone.splice(indexItem, 1, { tarea: item.tarea, estado: "completa" });
      setList(clone);
    } else {
      const indexItem = list.indexOf(item);
      const clone = [...list];
      clone.splice(indexItem, 1, { tarea: item.tarea, estado: "incompleta" });
      setList(clone);
    }
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
        <button onClick={agregar} className="btn">
          <IoMdAddCircle className="icono" />
        </button>
      </div>
      <ul>
        {list
          .filter((item) => {
            if (filter === null) return true;

            return item.estado === filter;
          })
          .map((item, indice) => (
            <li className="tareas" key={indice}>
              <input
                type="radio"
                className="checkbox"
                defaultChecked={item.estado == "completa"}
                onClick={() => {
                  tachar(item);
                }}
              ></input>
              <p
                style={
                  item.estado === "completa"
                    ? { textDecoration: "line-through" }
                    : null
                }
              >
                {item.tarea}
              </p>
              <button onClick={() => borrar(item)} className="btn-trashcan">
                <IoMdTrash className="trashcan" />
              </button>
            </li>
          ))}
      </ul>
      <div className="filtros">
        <span>{list.length}</span>
        <MdPlaylistAddCheck />
        <button
          className="btn-filtros btn-filtros--todas "
          onClick={() => {
            setFilter(null);
          }}
        >
          Todas
        </button>
        <button
          className="btn-filtros btn-filtros--incompletas"
          onClick={() => setFilter("incompleta")}
        >
          Incompletas
        </button>
        <button
          className="btn-filtros btn-filtros--completas "
          onClick={() => {
            setFilter("completa");
          }}
        >
          Completas
        </button>
      </div>
    </div>
  );
};

export default AgregarTarea;
