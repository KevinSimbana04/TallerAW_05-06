import { useState } from "react"

// Le cambiamos el nombre al componente
const Renderizado = () => {

  // 1. Estado para el condicional (mostrar/ocultar detalles)
  const [mostrarDetalles, setMostrarDetalles] = useState(false)

  // 2. Estado para la lista (Tareas pendientes)
  // Esta vez usamos un array simple de strings
  const [tareas] = useState([
    "Estudiar React ⚛️",
    "Hacer la compra 🛒",
    "Pasear al perro 🐶",
    "Llamar a mamá 📞",
  ])

  return (
    <>
      <h1 className="font-bold text-2xl">Ejemplos de Renderizado</h1>
      <hr className="border-gray-400 mb-8"/>

      {/* ----------------------------------- */}
      {/* 1. RENDERIZADO CONDICIONAL          */}
      {/* ----------------------------------- */}
      <div className="flex justify-center mb-8 mt-8">
        <div className="border rounded-lg p-4 w-120 mx-auto text-left">
          
          <h2 className="text-1xl font-bold underline mb-4">Condicional (Mostrar/Ocultar)</h2>

          <button 
            className="bg-green-600 text-white py-1 px-3 rounded mb-3" 
            onClick={() => setMostrarDetalles(!mostrarDetalles)}
          >
            {/* El texto del botón también cambia condicionalmente */}
            {mostrarDetalles ? "Ocultar" : "Mostrar"} Información
          </button>

          {/* Aquí usamos el operador "AND" (&&).
            Si 'mostrarDetalles' es true, React renderiza lo que sigue.
            Si es false, no renderiza nada.
          */}
          {mostrarDetalles && (
            <div className="bg-gray-100 p-3 rounded">
              <p>Esta es la información secreta que ahora puedes ver. ¡Genial!</p>
            </div>
          )}

        </div>
      </div>

      {/* ----------------------------------- */}
      {/* 2. RENDERIZADO DE LISTAS            */}
      {/* ----------------------------------- */}
      <div className="flex justify-center mb-8">
        <div className=" border rounded-lg p-4 w-120 mx-auto text-left">

          <h2 className="text-1xl font-bold underline mb-4">Listas (Tareas Pendientes)</h2>
          
          <p>Mis tareas para hoy:</p>
          {/* Usamos una lista ordenada <ol> esta vez */}
          <ul className="list-decimal pl-5 mt-2">
            
            {/* Usamos .map() para iterar sobre el array 'tareas'.
              'tarea' es el string (ej: "Estudiar React ⚛️")
              'index' es la posición (0, 1, 2...)
            */}
            {tareas.map((tarea, index) => (
              
              // React necesita una 'key' única para cada elemento de la lista.
              // Para listas estáticas (que no cambian), usar el index está bien.
              <li key={index}>
                {tarea}
              </li>

            ))}
          </ul>
          
        </div>
      </div>
    </>
  )
}

export default Renderizado