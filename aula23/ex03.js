//1 polegada é 2.54cm
// Essa função converte polegadas em centímetros
function ConvertePolegada(polegada){
    let centímetros = polegada * 2.54
    return `${centímetros} cm`
}

let polegada = ConvertePolegada(2)
console.log(polegada)