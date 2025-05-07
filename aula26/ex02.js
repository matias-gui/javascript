// Criando um set com vários valores.

let numeros = new Set()
numeros.add(1)
numeros.add(2)
numeros.add(3)
numeros.add(4)
numeros.add(5)
numeros.add(6)

// Imprimindo o números de elementos no set.
console.log("O set números, é composto por", numeros.size,"elementos.")

//Imprimindo cada valor do set, usando o loop "for..of"
for(let valor of numeros){
    console.log(valor)
}