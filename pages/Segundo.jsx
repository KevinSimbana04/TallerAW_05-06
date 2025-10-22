// Mercy Perugachi

// 2- useEffect

import React, { useState, useEffect } from "react";

function Segundo() {
  const [segundos, setSegundos] = useState(0);

  useEffect(() => {
    const intervaloID = setInterval(() => {
      setSegundos((prevSeg) => prevSeg + 1);
    }, 1000);

    return () => {
      console.log("Limpiando el temporizador");
      clearInterval(intervaloID);
    };
  }, []);

  return (
    <>
      <h1 className="font-bold text-2xl">useEffect</h1>
      <hr className="border-gray-400 mb-8"/>
      <div className="flex flex-col items-center justify-center h-screen bg-gray-100 font-sans">
        <div className="bg-white p-6 rounded-2xl shadow-md text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-2">
            Cronómetro con useEffect
          </h2>
          <h3 className="text-lg text-blue-600">
            Tiempo transcurrido:{" "}
            <span className="font-bold">{segundos}</span> segundos
          </h3>
        </div>
      </div>
    </>
  );
}

export default Segundo;

