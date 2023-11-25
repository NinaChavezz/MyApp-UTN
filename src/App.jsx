import { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./Componentes/TaskForm";
import TaskList from "./Componentes/TaskList";
import EditForm from "./Componentes/EditForm";

function App() {
  const [nombre, setNombre] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
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
    setNombre((prevState) =>
      prevState.map((t) =>
        t.id === id ? { ...t, completada: !t.completada } : t
      )
    );
  };

  const updateTask = (task) => {
    console.log("Updating task:", task);
    setNombre((prevState) =>
      prevState.map((t) =>
        t.id === task.id ? { ...t, nombreTarea: task.nombreTarea } : t
      )
    );
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditing(false);
    previousFocusEl && previousFocusEl.focus();
  };

  const enterEditMode = (task) => {
    setEditTask(task);
    setIsEditing(true);
    setPreviousFocusEl(document.activeElement);
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
            enterEditMode={enterEditMode}
          />
        </>
      </div>
      {isEditing && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              {/* Contenido del modal */}
              <div className="relative flex flex-col w-full bg-white border-0 rounded-lg shadow-lg outline-none focus:outline-none">
                {/* Encabezado del modal */}
                <div className="flex items-baseline justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h4 className="text-xl font-semibold">Modificando nombre</h4>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={closeEditMode}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/* Cuerpo del modal */}
                <div className="relative p-6 flex-auto">
                  {/* Contenido del formulario */}
                  <EditForm
                    editTask={editTask}
                    updateTask={updateTask}
                    closeEditMode={closeEditMode}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="fixed inset-0 z-40 bg-black bg-opacity-60"></div>
        </>
      )}
    </div>
  );
}

export default App;
