import { useState } from "react";

const TaskForm = ({ nombre, setNombre }) => {
  const [nombreTarea, setNombreTarea] = useState([]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const objetoTarea = {
      nombreTarea,
      id: generarId(),
      completada: false,
    };
    console.log(nombre);
    setNombre([...nombre, objetoTarea]);
  };

  return (
    <>
      <h1 className="bg-slate-900 h-full text-cyan-200 flex items-center justify-center rounded-xl py-5 px-5">
        Lista de Tareas
      </h1>
      <div className="mt-6 relative">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="focus:shadow-lg focus: shadow-blue-300 pl-12 w-full py-4 bg-slate-700 rounded-xl outline-none"
            placeholder="Ingrese una nueva tarea"
            onChange={(e) => setNombreTarea(e.target.value)}
          />
          <button onClick={handleSubmit} type="text" className="">
            Agregar
          </button>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
