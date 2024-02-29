// Esta funcion sirve para crear 4 combinaciones de apuestas, usala solo si no sabes crear el aleatorio o si te da igual usarlo.
export const create = ()=>{
    let nuevasApuestas= []
      for(let i = 0; i<4; i++){
        let apuesta = []
        for(let h=0; h<4; h++){
          const numero = Math.floor(Math.random()*13 +1)
          apuesta.push(numero)
        }
        nuevasApuestas.push(apuesta)
      }
    return nuevasApuestas;
}