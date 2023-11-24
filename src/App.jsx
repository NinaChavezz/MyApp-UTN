import { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./Componentes/TaskForm";
import TaskItems from "./Componentes/TaskItems";
import TaskList from "./Componentes/TaskList";

function App() {
  const [nombre, setNombre] = useState([]);

  useEffect(() => {
    const nombreLocalStorage = JSON.parse(localStorage.getItem("nombre"));
    nombreLocalStorage?.length > 0 && setNombre(nombreLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("nombre", JSON.stringify(nombre));
  }, [nombre]);

  const eliminar = (id) => {
    const tarea = nombre.filter((item) => item.id !== id);
    setNombre(tarea);
  };

  const completado = (id) => {
    const index = nombre.findIndex((item) => item.id === id);
    nombre[index].completada = true;
    setNombre(nombre);
    console.log(nombre);
  };

  return (
    <div className=" bg-slate-800 min-h-screen h-full text-blue-300 flex items-center justify-center py-20 px-5">
      <div className="container flex flex-col max-w-xl">
        <>
          <TaskForm nombre={nombre} setNombre={setNombre} />
          <TaskList
            nombre={nombre}
            eliminar={eliminar}
            completado={completado}
          />
        </>
      </div>
    </div>
  );
}

export default App;
