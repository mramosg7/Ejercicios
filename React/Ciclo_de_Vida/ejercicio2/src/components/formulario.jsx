import { useEffect, useState } from "react"
//Esta funcion va a recibir otra funcion para añadir pacientes, otra para editarlos, y un objeto con el paciente a editar si qes que lo hay .
export default function Formulario({añadir, paciente, editar}){

    const[mascota, setMascota] = useState('')
    const[propietario, setPropietario]=useState( '')
    const[email, setEmail]=useState('')
    const[alta, setAlta]=useState('')
    const[sintomas, setSintomas]=useState('')


    //Creamos un useEffect que se ejecute cada vez que nos pasan un nuevo paciente a editar,
    //y lo que hara sera cambiar todos los valores de los imputs por los del nuevo paciente
    useEffect(()=>{
        if(paciente){
            setAlta(paciente.alta)
            setEmail(paciente.email)
            setMascota(paciente.mascota)
            setPropietario(paciente.propietario)
            setSintomas(paciente.sintomas)
            
        }
        
    },[paciente])

    //Creamos una funcion para manejar el submit de nuestro formulario.
    const handleSubmit=(e)=>{
        e.preventDefault()
        //Creamos un objeto paciente que posteriormente se lo pasaremos a la funcion añadir
        const p = {
            mascota: mascota,
            propietario: propietario,
            email: email,
            alta: alta,
            sintomas:sintomas
        }
        if(!paciente){
          
            añadir(p)
        }else{
         
            editar(p)

        }

        setAlta('')
        setEmail('')
        setMascota('')
        setPropietario('')
        setSintomas('')
       
    }

    return(
        <div className="flex flex-col gap-[70px] p-5">
            <div className="w-full flex flex-col items-center">
                <h1 className="font-bold text-[30px]">Seguimiento Pacientes</h1>
                <p>Añade Pacientes y Administralos</p>
            </div>
            <form className="flex flex-col gap-5" onSubmit={(e)=>handleSubmit(e)}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="mascota">Nombre Mascota:</label>
                    <input className='border-[2px] border-blue-100'type="text" value={mascota} onChange={(e)=>{setMascota(e.target.value)}} id="mascota" name="mascota" />
                </div>
                <div  className="flex flex-col gap-2">
                    <label htmlFor="propietario">Nombre Propietario:</label>
                    <input   className='border-[2px] border-blue-100' type="text" value={propietario} onChange={(e)=>{setPropietario(e.target.value)}} id="propietario" name="propietario" />
                </div>
                <div  className="flex flex-col gap-2">
                    <label htmlFor="email">Email:</label>
                    <input className='border-[2px] border-blue-100' type="email" value={email} onChange={(e)=>{setEmail(e.target.value)}} id="email" name="email" />
                </div>
                <div  className="flex flex-col gap-2">
                    <label htmlFor="alta">Alta:</label>
                    <input className='border-[2px] border-blue-100' type="date" value={alta} onChange={(e)=>{setAlta(e.target.value)}} id="alta" name="alta" />
                </div>
                <div  className="flex flex-col gap-2">
                    <label htmlFor="sintomas">Sintomas:</label>
                    <textarea className='border-[2px] border-blue-100' value={sintomas} onChange={(e)=>{setSintomas(e.target.value)}} id="sintomas" name="sintomas"/>
        
                </div>

                {/* queremos tener un botton u otro dependiendo de la hacion que queramos realizar */}
                {paciente ? <button className="bg-orange-500 p-2 rounded">Editar paciente</button>: <button className="bg-blue-500 p-2 rounded">Añadir</button>}
                
            </form>
        </div>
    )
}