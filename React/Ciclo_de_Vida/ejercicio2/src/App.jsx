import Formulario from "./components/formulario"
import Listado from "./components/listado"
import { useState } from "react"

function App() {
  const [pacientes, setPacientes] = useState([])
  //Este useState gestiona donde esta el usuario que hay que editar
  const [index, setIndex] = useState(null)
  const [pacienteEditar, setPacienteEditar]=useState(null)
  console.log(pacienteEditar)
  //Esta funcion es la encargada de añadir a un paciente
  const handleAdd = (paciente)=>{
    setPacientes(prevPacientes =>[...prevPacientes,paciente])
  }

  //Esta funcion va a encargarse de agregar el usuario que hay que editar a pacienteEditar
  const handlePacienteEditar =(paciente)=>{
    
    setPacienteEditar(paciente)
  }

  //Esta funcion se va encargar de modificar al paciente
  const handleUpdate=(paciente)=>{
    setPacientes(prevPacientes => {
      prevPacientes[index] = paciente
      return [...prevPacientes]
    })
    setIndex(null)
  }

  //Esta funcion sirve para eliminar
  const handleDelete=(id)=>{
    setPacientes(prevPacientes => prevPacientes.filter((pacientes, i)=>i != id))
  }

  return(
    <div className="flex">
      <div className="w-[50%]">
        <Formulario añadir={handleAdd} paciente={pacienteEditar} editar={handleUpdate}/>
      </div>
      <div className="w-[50%]">
        <Listado pacientes={pacientes} editar={handlePacienteEditar} setIndex={setIndex} eliminar={handleDelete}/>
      </div>
      
    </div>
  )
}

export default App
