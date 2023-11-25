import TaskForm from "./TaskForm";
import React from "react";
import TaskItems from "./TaskItems";

const TaskList = ({ nombre, eliminar, completado, enterEditMode }) => {
  console.log(nombre);
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-xl">
      {nombre.map((item) => (
        <TaskItems
          item={item}
          eliminar={eliminar}
          completado={completado}
          id={item.id}
          key={item.id}
          enterEditMode={enterEditMode}
        />
      ))}
    </div>
  );
};

export default TaskList;
