
let colecao = new Map()

colecao.set("string", "A, E, I, O, U")
colecao.set(22, "Isso é um number")
colecao.set("object", {nome: "Guilherme", sobrenome: "Alencar"})

//Irá imprimir o valor da chave objeto, no caso a prpriedade 'nome' e 'sobrenome'
console.log(colecao.get("object").nome)
console.log(colecao.get("object").sobrenome)

//for (let [chave, valor] of colecao) {
   // console.log(`${chave} : ${valor}`)
//}

// Transformado um map em um Objeto
let mapParaObjeto = Object.fromEntries(colecao)
//console.log(mapParaObjeto)

// Transformando um map em um array
let mapParaArray = [...colecao]
//console.log(mapParaArray)