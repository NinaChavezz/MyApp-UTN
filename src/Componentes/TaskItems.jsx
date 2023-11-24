import React, { useState } from "react";

const TaskItems = ({ item, eliminar, id, completado }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [check, setCheck] = useState(false);

  const handleCheck = () => {
    completado(id);
    setCheck(true);
  };
  return (
    <div className="flex items-center justify-between p-4">
      <h2 className="pl-3">{item}</h2>
      <p>{!check ? "No completada" : "Completada"}</p>

      <img
        className="h-6 w-6 cursor-pointer transition-all duration-200 ease-in"
        src="/icon-check.svg"
        alt="icon check"
        onClick={() => handleCheck()}
      />
      <img
        className="h-6 w-6 cursor-pointer transition-all duration-200 ease-in"
        src="/icon-eliminar.svg"
        alt="icon eliminar"
        onClick={() => eliminar(id)}
      />
    </div>
  );
};

export default TaskItems;
