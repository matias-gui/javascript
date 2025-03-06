// Inserindo elementos no inicio do array utilizando unshift

// criação do array
let animais = []

//adicionado utilizando o método push
animais.push("Pantera")
animais.push("Milk")
animais.push("Nina")

// adicionando um elemento no inicio do array
animais.unshift("Belinha")

//percorrendo o array,  e mostrando na tela os elementos que existe dentro dele 
for(let i = 0; i < animais.length; i++){
    console.log(animais[i])
}