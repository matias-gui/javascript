// Criação de um objeto
let Carro = {
    marca: "Honda",
    modelo: "Civic",
    ano: 2015
}
// Adicionado mais uma propriedade no Objeto Carro
Carro.cor ="Preto"
// Alterando a propriedade "ano"
Carro.ano = 2017
// Percorrendo o Objeto carro, usando o "for..in.." e imprimindo o Objteo Carro
for(let carro in Carro){
    console.log(Carro[carro])
}
