
import { useEffect, useState } from "react"

//Esta funcion va a recibir los pacientes que tiene que renderizar , una funcion 
//para modificar los pacientes y por ultimo una funcion para decir el que index estaba el usuario a editar.
//Tambien usa una funcion para eliminar
export default function Listado({pacientes, editar, setIndex,eliminar}){

    //creamos un Estado para saber que usuario estamos editando, y asi poder cambiarle el fondo
    const[editando,setEditando]=useState(null)

    //Quiero que cada vez que los pacientes se cambian no haya ninguno editandose
    useEffect(()=>{
        setEditando(null)
    },[pacientes])

    return(
        <div className="flex flex-col gap-[70px] p-3">
            <div className=" w-full flex flex-col items-center">
                <h1 className="font-bold text-[30px]">Listado Pacientes</h1>
                <p>Administra tus Pacientes y Citas</p>
            </div>
            <div className="flex flex-col gap-3">
                {/* Comprobamos que hay pacientes, y si los hay los renderizamos */}
                {pacientes && pacientes.map((paciente, index) =>(
                    <div  key={paciente.alta} className={`${editando === index ? 'bg-blue-500' : 'bg-blue-200'} p-3 rounded`}>
                        <p><span className="font-bold">NOMBRE:</span> {paciente.mascota}</p>
                        <p><span className="font-bold">PROPIETARIO:</span> {paciente.propietario}</p>
                        <p><span className="font-bold">EMAIL:</span> {paciente.email}</p>
                        <p><span className="font-bold">FECHA ALTA:</span> {paciente.alta}</p>
                        <p><span className="font-bold">SÍNTOMAS:</span> {paciente.sintomas}</p>
                        <div className="flex gap-5">
                            <button onClick={()=>{editar(paciente);setIndex(index);setEditando(index)}} className="bg-orange-500 p-2 rounded">Editar</button>
                            <button onClick={()=>{eliminar(index)}}className="bg-red-500 p-2 rounded">Eliminar</button>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}