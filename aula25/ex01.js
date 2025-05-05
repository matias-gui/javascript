// Criação de um map chamado "livro"  
let livros = new Map()

// Adicionando três chaves-valores.
livros.set("O jogo", "Abigail")
livros.set("Rei Leão", "Tom A")
livros.set("Nevou", "Marcos T")

// Imprimindo o valor da chave "Rei leão", que no caso será "Marcos T"
//console.log(livros.get("Rei Leão"))

// Usando o loop for..of para imprimir todos os pares chave-valor
for(let [chave, valor] of livros){
    console.log(`${chave}: ${valor}`)
}

// O método "size" irá imprimir a quantidade de chave-valor que há no map livros
console.log(`Números de livros: ${livros.size}`)

// O método delete irá deletar a chave informada, que no caso será "Rei Leão"

livros.delete("Rei Leão")

// O método "has" verifica se a chave informada está ainda no map, ou seja, irá retornar "true" ou "false"
console.log(`O livro Rei Leão ainda está no map livros? ${livros.has("Rei Leão")}`)