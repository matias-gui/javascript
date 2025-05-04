// Craição de um objeto pessoa
let pessoa = {
    nome: "Paulo",
    sobreNome: "Guilherme",
    idade: 22
}
// Criação do loop "for..in..", para percorrer o objeto e imprimir suas propriedades
for(let dados in pessoa){
    console.log(pessoa[dados])
}
