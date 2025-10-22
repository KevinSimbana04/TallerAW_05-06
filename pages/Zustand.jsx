import React from "react";
import { useToggleText } from "./Text.js";

//Este componente muestra un ejemplo práctico del uso de Zustand en React 
//para manejar el estado de manera sencilla. Permite alternar entre mostrar y ocultar un
//texto utilizando un estado global definido en un hook personalizado (useToggleText).
function
Zustand() {
        const { mostrar, toggle } = useToggleText();

    return (
    <>
        <h1 className="font-bold text-2xl">Zustand</h1>
        <hr className="border-gray-400 mb-8"/>        
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 font-sans">
            <div className="bg-white p-6 rounded-2xl shadow-md text-center">
            <h1 className="text-2xl font-semibold text-gray-800 mb-4">
                Ejemplo con Zustand
            </h1>

            <button
                onClick={toggle}
                className={`px-5 py-2 rounded-lg text-white font-medium transition-colors duration-300 ${
                mostrar ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"
                }`}
            >
                {mostrar ? "Ocultar texto" : "Mostrar texto"}
            </button>

            {mostrar && (
                <p className="mt-4 text-gray-700 text-lg">
                ¡Hola! Este es un texto visible.
                </p>
            )}
            </div>
        </div>    
    </>

    );
}

export default Zustand;
