// Removendo o primeiro elemento do array utilizando o método shift

// criação do array
let animais = []

//adicionado utilizando o método push
animais.push("Pantera")
animais.push("Milk")
animais.push("Nina")

//removendo o primeiro elemento do array
animais.shift()

//percorrendo o array,  e mostrando na tela os elementos que existe dentro dele 
for(let i = 0; i < animais.length; i++){
    console.log(animais[i])
}