// Criação de um array com vários números
let numeros = [2, 5, 6, 8, 4, 9, 12, 39]

// Usando o método "filter" para criar um novo array com números pares a partir do array números
let numerosPares = numeros.filter(num => num % 2 === 0)

console.log(numerosPares)