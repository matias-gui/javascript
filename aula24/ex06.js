// Criação de um objeto "pessoa" com suas propriedades
let pessoa = {
    nome: "Guilherme",
    sobreNome:"Alencar",
    idade: 22,
    contato: 11114444,
    pais: "BR"
}
// Adicionando as chaves do objeto usando o método "Objeto.keys()" na constante "chaves"
const chaves = Object.keys(pessoa)
// Adicionando os valores do objeto usando o método "Objeto.values()" na constante "valores"
const valores = Object.values(pessoa)

// Imprimindo as chaves e os valores do objeto pessoa
console.log("Chaves:", chaves)
console.log("Valores:", valores)