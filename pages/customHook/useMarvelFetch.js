import { useState, useEffect } from "react";
import md5 from "md5";

const MARVEL_PUBLIC_KEY = "7cbb9289ac660589a1944ea20c553994";
const MARVEL_PRIVATE_KEY = "6ec7da4eeb72be7c7b1c4e1ef788ea9f1cd0475f  ";
const BASE_URL = "https://gateway.marvel.com/v1/public";

function useMarvelFetch(endpoint, params = "") {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Si no se han configurado las claves, lanzamos un error claro
    if (MARVEL_PUBLIC_KEY === "7cbb9289ac660589a1944ea20c553994") {
      setError(
        "Error de configuración: Debes reemplazar '7cbb9289ac660589a1944ea20c553994' y '6ec7da4eeb72be7c7b1c4e1ef788ea9f1cd0475f' en useMarvelFetch.js con tus claves de Marvel.",
      );
      setLoading(false);
      return;
    }

    // 1. Generación de los parámetros de autenticación
    const ts = new Date().getTime();
    // Fórmula de Hash: md5(ts + Private Key + Public Key)
    const hash = md5(ts + MARVEL_PRIVATE_KEY + MARVEL_PUBLIC_KEY);

    // Los parámetros de consulta se añaden antes de la autenticación
    const querySeparator = params ? "?" + params + "&" : "?";
    const authParams = `ts=${ts}&apikey=${MARVEL_PUBLIC_KEY}&hash=${hash}`;

    // 2. URL completa
    const url = `${BASE_URL}${endpoint}${querySeparator}${authParams}`;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);

        if (!response.ok) {
          // Captura errores 401 (Auth) o 404/500
          const apiError = await response.json();
          throw new Error(
            `Error ${response.status}: ${apiError.status || response.statusText}`,
          );
        }

        const json = await response.json();
        // ⬅️ La data relevante para la lista de recursos está en .data.results
        setData(json.data.results);
      } catch (err) {
        console.error("Fallo al consultar la API de Marvel:", err);
        setError(err.message || "Ocurrió un error de red desconocido.");
      } finally {
        setLoading(false);
      }
    };

    if (endpoint) {
      fetchData();
    } else {
      setLoading(false);
      setError("No se proporcionó un endpoint para la consulta de Marvel.");
    }
  }, [endpoint, params]);

  return { data, loading, error };
}

export default useMarvelFetch;
