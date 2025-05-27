// Criando array de arrays
let array = [[2, 4, 6, 8, 10], [1, 3, 5, 7, 9]]

// Usando a desestruturação para criar variáveis 
let [pares, impares] = array

console.log(`Números pares: ${pares.join(" ")}\nNúmeros impares: ${impares.join(" ")}`)