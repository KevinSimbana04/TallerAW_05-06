// Ejemplo: MostrarPersonajes.jsx

import React from "react";
import useMarvelFetch from "./customHook/useMarvelFetch"


function MostrarPersonajes() {
  // 1. Llamada al Custom Hook
  // Obtener los primeros 20 cómics
  const {
    data: comics,
    loading,
    error,
  } = useMarvelFetch(
    "/comics",
    "limit=20&orderBy=-modified", // Obtener los más recientemente modificados
  );

  if (loading) {
    return <h2>Cargando cómics de Marvel...</h2>;
  }

  if (error) {
    return <h2 style={{ color: "red" }}>Error: {error}</h2>;
  }

  return (
    <>
      <h1 className="font-bold text-2xl">Custom Hook</h1>
      <hr className="border-gray-400 mb-8"/>
      <div>
        <h3>Últimos Cómics de Marvel:</h3>
        <ul>
          {comics.map((comic) => (
            <li key={comic.id}>
              <strong>{comic.title}</strong> ({comic.issueNumber})
            </li>
          ))}
        </ul>
      </div>    
    </>
  );
}

export default MostrarPersonajes;
