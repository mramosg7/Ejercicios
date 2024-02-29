//Esta funcion recibira tres props. Estas props las tendras que ir creando tu a medida que vayas avanzando
//Una pista que te dejo son sus funcionalidades basicas: 
// Apuestas: un array de objetos con las apuestas.
// Confirmar: una funcion para confirmar la apuesta.
// Quitar: una funcion para quitar la apuesta. (Esta no se va a borrar de este componente solo quitarse del total)

export default function Apuestas({apuestas, confirmar, quitar}){
    
    return(
        <table className='w-[50%]'>
            <thead className="flex justify-center">Apuestas</thead>
            <tbody>
                {apuestas.map((apuesta, index)=>(
                    <tr className="flex justify-between p-5 font-semibold" key={index}>
                        {apuesta.map(numero=>(
                            <td className="flex justify-center items-center" key={numero}>{numero}</td>
                        ))}
                        <td><button className="bg-green-400 p-2 rounded-md">Aceptar</button></td>
                        <td><button className="bg-red-300 p-2 rounded-md">Quitar</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}