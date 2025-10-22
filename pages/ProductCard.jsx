import React from "react";
//Componente Hijo
function ProductCard({ id, nombre, precio }) {
    return (
        <>
            <div className="border border-gray-300 rounded-xl p-4 text-center w-56 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
                <h3 className="text-lg font-semibold text-gray-800">{nombre}</h3>
                <p className="text-gray-600 mt-2">💲{precio}</p>
                <button className="mt-3 bg-blue-500 hover:bg-blue-600 text-white px-4 py-1.5 rounded-lg transition-colors duration-300">
                Ver detalles
                </button>
            </div>
        </>

    );
}
export default ProductCard;

