import React, { useState } from "react";

const TaskItems = ({ item, eliminar, id, completado, enterEditMode }) => {
  console.log("item", completado);
  const [check, setCheck] = useState(item.completada);

  const handleCheck = () => {
    completado(id);
    setCheck(!check);
  };
  return (
    <div className="flex items-center justify-between p-4 rounded shadow-md">
      <div className="max-w-xs">
        <p
          className={`pl-3 ${
            check ? "line-through text-green-500 line-through-thick" : ""
          }`}
        >
          {item.nombreTarea}
        </p>
      </div>
      <div className="flex gap-2">
        <img
          className="h-6 w-6 cursor-pointer transition-all duration-200 ease-in hover:scale-125"
          src="/icon-check.svg"
          alt="icon check"
          onClick={() => handleCheck()}
        />
        <img
          className="h-6 w-6 cursor-pointer transition-all duration-200 ease-in hover:scale-125"
          src="/icon-editar.svg"
          alt="icon editar"
          onClick={() => enterEditMode(item)}
        />
        <img
          className="h-6 w-6 cursor-pointer transition-all duration-200 ease-in hover:scale-125"
          src="/icon-eliminar.svg"
          alt="icon eliminar"
          onClick={() => eliminar(id)}
        />
      </div>
    </div>
  );
};

export default TaskItems;
