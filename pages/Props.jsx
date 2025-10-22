import React from "react";
import ProductCard from "./ProductCard";

//Este componente actúa como componente padre que crea y maneja un conjunto de datos (productos)
// y los envía a un componente hijo (ProductCard) mediante props.

//Componente Padre

function Props(){
    //Generamos los datos que el padre enviará a los hijos
    const productos=[
        { id: 1, nombre: "Laptop", precio: 1200 },
        { id: 2, nombre: "Mouse", precio: 25 },
        { id: 3, nombre: "Teclado", precio: 45 },
    ];

    return(
        <>
            <h1 className="font-bold text-2xl">Props</h1>
            <hr className="border-gray-400 mb-8"/>

            <div style={{display: "flex", gap: "20px", padding:"20px"}}>
                {productos.map((p)=>(
                //Pasamos props  al hijo usando {...p}
                <ProductCard key={p.id} {...p}/>
                ))}
            </div>
        </>

    );
}
export default Props;