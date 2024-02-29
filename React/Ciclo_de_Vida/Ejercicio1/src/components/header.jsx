
// Esta funcion es el header y lo unico que recibe es la configuracion de mostrar.
export default function Header({setMostrar}){
    return(
        <>
            <header className="flex justify-between bg-green-100  p-5">
                <div className="w-[10%] bg-blue-600 text-white flex justify-center items-center font-bold">
                    Azarquiel
                </div>
                <div className="w-[90%]  flex flex-col gap-2 justify-center items-center">
                    <h1>EXAMEN 2º DAW</h1>
                    <nav className="flex justify-around w-full">
                        <button className="bg-green-400 rounded-xl p-2">APUESTAS AUTOMATICAS</button>
                        <button className="bg-green-400 rounded-xl p-2">APUESTAS MANUALES</button>
                    </nav>
                </div>
            </header>
        </>
    )
}