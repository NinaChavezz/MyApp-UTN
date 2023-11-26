import TaskForm from "./TaskForm";
import React from "react";
import TaskItems from "./TaskItems";

const TaskList = ({
  tasks,
  eliminar,
  completado,
  enterEditMode,
  searchWord,
}) => {
  console.log(tasks);
  const filteredTasks = tasks.filter((task) =>
    task.nombreTarea.toLowerCase().includes(searchWord.toLowerCase())
  );
  return (
    <div className="flex flex-col mt-7 rounded-lg overflow-hidden shadow-xl">
      {filteredTasks.map((item) => (
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
