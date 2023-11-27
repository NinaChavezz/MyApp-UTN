import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const TaskForm = ({ tasks, setTasks }) => {
  const [nombreTarea, setNombreTarea] = useState([]);

  const generarId = () => {
    const random = Math.random().toString(36).substring(2);
    const fecha = Date.now().toString(36);

    return random + fecha;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (nombreTarea == "") {
      console.log("Esta vacio");
      toast.error("No podes agregar una tarea vacía");
      return;
    } else {
      const objetoTarea = {
        nombreTarea,
        id: generarId(),
        completada: false,
      };
      console.log(tasks);
      setTasks([...tasks, objetoTarea]);
      e.target.reset();
      toast.success("Tarea agregada correctamente");
    }
  };

  return (
    <>
      <div className="mt-6 relative">
        <form className="flex gap-2" onSubmit={handleSubmit}>
          <input
            type="text"
            className="focus:shadow-lg focus: shadow-blue-300 pl-12 w-full py-4 bg-slate-700 rounded-xl outline-none"
            placeholder="Ingrese una nueva tarea"
            onChange={(e) => setNombreTarea(e.target.value)}
          />
          <button type="submit">
            <PlusCircleIcon className="h-8 w-8 text-white" />
          </button>
        </form>
        <Toaster />
      </div>
    </>
  );
};

export default TaskForm;
