// Criação de objeto 
let livro = {
    titulo: "O jogo",
    autor: "Guilherme A"
}
console.log(`Objeto original: ${livro.titulo}`)
//Criação de uma variável que referencia o objeto livro
let novoLivro = livro
// Alteração da propriedade "titulo"
novoLivro.titulo = "THE KING"
// Verificando se a propriedade original foi modificada
console.log(`Objeto modificado: ${novoLivro.titulo}`)