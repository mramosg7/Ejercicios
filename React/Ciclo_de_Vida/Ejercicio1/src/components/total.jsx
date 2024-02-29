//Este es el componente que tiene la parte del total, solamente recibe el total de las apuestas confirmadas.
export default function Total({total}){
    return(
        <div className="w-[50%] flex flex-col gap-5 justify-center items-center text-white bg-black font-bold p-5">
            <h1>TOTAL DE APUESTAS {total}</h1> 
            <h1>PRECIO POR APUESTA 1.5€</h1>
            <h1>TOTAL: {total *1.5}€</h1>
        </div>
    )
}