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
    e.target.reset();
  };

  return (
    <>
      <div className="mt-6 relative">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            className="focus:shadow-lg focus: shadow-blue-300 pl-12 w-full py-4 bg-slate-700 rounded-xl outline-none"
            placeholder="Ingrese una nueva tarea"
            onChange={(e) => setNombreTarea(e.target.value)}
          />
          <button type="submit" className="">
            Agregar
          </button>
        </form>
      </div>
    </>
  );
};

export default TaskForm;
