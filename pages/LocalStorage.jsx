import { useEffect, useState } from "react"

// Cambiamos el nombre al componente
const PreferenciasUsuario = () => {
  // 1. INICIALIZAR EL ESTADO DESDE LOCALSTORAGE
  // Usamos una función en useState para que esto se ejecute solo una vez al inicio.
  // Intenta leer el valor 'preferencia-modo' de localStorage.
  // Si no existe (es null), usa 'light' como valor inicial.
  const [modo, setModo] = useState(() => {
    const modoGuardado = localStorage.getItem("preferencia-modo")
    return modoGuardado || "light" // || "light" significa "o si no, 'light'"
  });

  // 2. GUARDAR EN LOCALSTORAGE CADA VEZ QUE EL ESTADO CAMBIE
  // Este useEffect se ejecutará cada vez que el valor de 'modo' cambie.
  useEffect(() => {
    // Guardamos el valor actual de 'modo' en localStorage.
    // Como 'modo' es un string ("light" o "dark"), NO necesitamos JSON.stringify.
    localStorage.setItem("preferencia-modo", modo)
  }, [modo]) // El array de dependencias [modo] es clave

  // Función para cambiar el modo
  const cambiarModo = () => {
    // Usamos el callback de setModo para obtener el valor anterior (prevModo)
    setModo((prevModo) => (prevModo === "light" ? "dark" : "light"))
  }

  // ---- Estilos dinámicos para que el ejemplo sea visual ----
  const esModoOscuro = modo === 'dark';
  // Objeto de estilos que cambiará
  const estilosContenedor = {
    backgroundColor: esModoOscuro ? '#2D3748' : '#FFFFFF', // Tailwind gray-800 o blanco
    color: esModoOscuro ? '#FFFFFF' : '#000000',
    border: '1px solid gray',
    borderRadius: '8px',
    padding: '16px',
    width: '320px',
    textAlign: 'center',
    transition: 'all 0.3s ease'
  };
  // -----------------------------------------------------------

  return (
    <>
      <h1 className="font-bold text-2xl">LocalStorage</h1>
      <hr className="border-gray-400 mb-8"/>

      <ul className="list-disc pl-5">
        <li>
          Este ejemplo guarda una preferencia (Modo Claro/Oscuro) en localStorage.
        </li>
        <li>
          <b>Al recargar la página (F5)</b> se mantiene el cambio.
        </li>
        <li>
          Usa useState para leer el valor inicial y useEffect para guardar los cambios automáticamente.
        </li>
      </ul>

      <div className="flex justify-center mb-8 mt-8">
        
        {/* Usamos el objeto de estilos dinámicos */}
        <div style={estilosContenedor}>

          <h2 className="text-lg font-semibold mb-4">
            {/* Mostramos un ícono diferente según el modo */}
            Modo Actual: {esModoOscuro ? 'Oscuro 🌙' : 'Claro ☀️'}
          </h2>

          <button 
            className="bg-blue-600 text-white py-1 px-3 mx-1 rounded" 
            onClick={cambiarModo}
          >
            Cambiar Modo
          </button>
          
        </div>
      </div>
    </>
  )
}

export default PreferenciasUsuario