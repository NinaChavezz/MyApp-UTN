import { useState, useEffect } from "react";

const EditForm = ({ editTask, updateTask, closeEditMode }) => {
  const [updateTaskName, setUpdateTaskName] = useState(editTask.nombreTarea);

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key === "Escape" && closeEditMode();
    };

    window.addEventListener("keydown", closeModalIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeEditMode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...editTask, nombreTarea: updateTaskName });
  };

  return (
    <div
      role="dialog"
      aria-labelledby="editTask"
      onClick={(e) => {
        e.target === e.currentTarget && closeEditMode();
      }}
    >
      <div className="mt-6 relative">
        <form onSubmit={handleSubmit}>
          <input
            id="editTask"
            type="text"
            size={50}
            value={updateTaskName}
            className="focus:shadow-lg focus: shadow-blue-300 pl-12 w-full py-4 bg-slate-700 rounded-xl outline-none"
            placeholder="Ingrese una nueva tarea"
            onInput={(e) => setUpdateTaskName(e.target.value)}
          />
          <button
            onClick={handleSubmit}
            type="text"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center mt-4"
          >
            Confirmar
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditForm;
