// Usando o operador Spread para combinar os dois arry no array lista de compras
let compra1 = ["Arroz", "Feijão", "Macarrão"]
let compra2 = ["Açucar", "Verduras", "Sabão"]

let listaDeCompras = [...compra1, ...compra2]

for(let item of listaDeCompras){
    console.log(item)
}