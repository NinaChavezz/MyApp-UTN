import { useState, useEffect } from "react";
import "./App.css";
import TaskForm from "./Componentes/TaskForm";
import TaskList from "./Componentes/TaskList";
import EditForm from "./Componentes/EditForm";

function App() {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);
  const [searchWord, setSearchWord] = useState("");
  useEffect(() => {
    const nombreLocalStorage = JSON.parse(localStorage.getItem("nombre"));
    nombreLocalStorage?.length > 0 && setTasks(nombreLocalStorage);
  }, []);

  useEffect(() => {
    localStorage.setItem("nombre", JSON.stringify(tasks));
  }, [tasks]);

  const eliminar = (id) => {
    const tarea = tasks.filter((item) => item.id !== id);
    setTasks(tarea);
  };

  const completado = (id) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completada: !task.completada } : task
      )
    );
  };

  const updateTask = (updatedTask) => {
    setTasks((tasks) =>
      tasks.map((task) =>
        task.id === updatedTask.id
          ? { ...task, nombreTarea: updatedTask.nombreTarea }
          : task
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
          <h1 className="bg-slate-900 h-full text-cyan-600 flex items-center justify-center rounded-xl py-5 px-5">
            Lista de Tareas
          </h1>
          <input
            className="bg-slate-200 border-2 p-3 m-2 w-[98%] rounded-xl placeholder-gray-600 text-gray-800"
            type="text"
            placeholder="Buscar tarea..."
            onChange={(e) => {
              setSearchWord(e.target.value);
            }}
          />
          <TaskForm tasks={tasks} setTasks={setTasks} />
          <TaskList
            tasks={tasks}
            eliminar={eliminar}
            completado={completado}
            enterEditMode={enterEditMode}
            searchWord={searchWord}
          />
        </>
      </div>
      {isEditing && (
        <>
          <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            <div className="relative w-auto max-w-3xl mx-auto my-6">
              <div className="relative flex flex-col w-full bg-slate-600 border-0 rounded-lg shadow-lg outline-none focus:outline-none m-8">
                <div className="flex items-baseline justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h4 className="text-xl font-semibold">Modificando nombre</h4>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={closeEditMode}
                  >
                    <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>

                <div className="relative p-6 flex-auto">
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
