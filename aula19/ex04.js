// Alterando elementos específicos do array

// criação do array
let animais = []

//adicionado utilizando o método push
animais.push("Pantera")
animais.push("Milk")
animais.push("Nina")

//alterando, no lugar do "Milk" agora é "Belinha" 

animais[1] = "Belinha"

//percorrendo o array,  e mostrando na tela os elementos que existe dentro dele 
for(let i = 0; i < animais.length; i++){
    console.log(animais[i])
}