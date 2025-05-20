// Copiando um array usando o spread
let arrayDeMusicas = [ 'Jorge e Matheus', 'Mc Kevin', 'Simone', 'Mc Hariel', 'Bruno e Marrone', 'Mc Ig']
// Copiando o array original e modificando
let copiaArrayDeMusicas = [...arrayDeMusicas, 'Mc Tuto']

console.log(copiaArrayDeMusicas) 

// Verificando se o arry original foi modificado
console.log(arrayDeMusicas)