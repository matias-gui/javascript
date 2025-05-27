// Criando array com um elemento
let array = [4]
//Usando a desestruturação para criar duas variáveis, a primeira recebe o valor do array e a segunda um valor padrão
let [a, b = 5] = array 

console.log(`Primeira variável ${a}\nSegunda variável ${b}`)