import React from "react";

function Descripcion() {
    return (
    <div className="max-w-md mx-auto mt-6 p-6 border border-gray-300 rounded-xl bg-gray-50 font-sans shadow-sm">
        <h1 className="text-center text-2xl font-semibold text-gray-800">
            Objetivo 
        </h1>

        <p className="text-justify text-gray-700 mt-4">
            Aplicar fundamentos de React mediante ejemplos.
        </p>

        <h2 className="mt-6 text-lg font-medium text-gray-800">Integrantes</h2>
        <ul className="list-disc pl-6 mt-2 text-gray-700">
            <li>Kevin Simbaña</li>
            <li>Mercy Peugachi</li>
            <li>Joel Torres</li>
        </ul>
    </div>
    );
}

export default Descripcion;
