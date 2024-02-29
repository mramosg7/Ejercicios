import React,{  useState } from "react";

//Este array representa los numeros que vamos a poner en los checkbox
//(Esto lo hago para que sea mas simple el codigo, si sientes que te lias, puedes crear los checkbox a mano)
const numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13]


//En esta funcion vamos a recibir una funcion de crear apuestas
// Como su nombre indica esta funcion crea las apuestas.
export default function BarraNumeros ({crearApuestas}){

    //Este useState es el encargado de llevar la cuenta de que checkbos estas checked
    const [countSelected, setCountSelected] = useState([]);

    return(
        <div className=" flex flex-col gap-2 justify-center items-center">
            <div className="bg-red-300 w-full flex justify-center gap-2 text-xl p-2">
            {numeros.map(numero=>(
                <React.Fragment key={numero}>
                    <label htmlFor={numero}>{numero}:</label>
                    <input type="checkbox" 
                        className="w-[50px]"
                        name={numero}
                        id={numero}
                        value={numero}  
                    />
                </React.Fragment>
            ))}
           </div>
           <div className={`${countSelected.length >= 4 ? 'flex' : 'hidden'} gap-10`}>
                <button className="bg-blue-300 p-2 rounded-full ">Añadir apuesta</button>
                <button className="bg-blue-300 p-2 rounded-full">Cambiar apuesta</button>
           </div>

        </div>
    )
}