// Mercy Perugachi

// 1- useState

import React, { useState } from "react";

function Primero() {
  const [encendido, setEncendido] = useState(false);

  const cambiarEstado = () => setEncendido(!encendido);

  return (
    <>
      <h1 className="font-bold text-2xl">useState</h1>
      <hr className="border-gray-400 mb-8"/>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 font-sans">
        <div className="p-6 bg-white rounded-2xl shadow-md text-center">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">
            El interruptor está:{" "}
            <span className={encendido ? "text-green-600" : "text-red-600"}>
              {encendido ? "ENCENDIDO" : "APAGADO"}
            </span>
          </h2>
          <button
            onClick={cambiarEstado}
            className={`px-6 py-2 rounded-lg font-medium text-white transition-colors duration-300 ${
              encendido ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
            }`}
          >
            {encendido ? "Apagar" : "Encender"}
          </button>
        </div>
      </div>
    </>

  );
}

export default Primero;

