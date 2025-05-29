// Criando uma arry fuction usando o método "slice" para o array original não ser modificado, e o método "sort" para ordenar o array por ordem alfabetica.
const arrayOrdenado = (arry) => arry.slice().sort()

// Array com seus elementos
const elementosArray = ["U", "I", "O", "A", "E"]

//Armazenando o array ordenado
const elementosArrayOrdenado = arrayOrdenado(elementosArray)

console.log(elementosArrayOrdenado)
