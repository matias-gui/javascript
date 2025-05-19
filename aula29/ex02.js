// Criação de um objeto 
let usuario = {nome: "Guilherme", email:"guilherme@000000000.com"}
//criando outro objeto com os mesmos dados do usuário e adicionando uma propriedade a esse objeto usando o spread
let atualizarUsuario = {...usuario, status:"online"}
console.log(atualizarUsuario)