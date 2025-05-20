//Função que recebe nomes e os imprime como lista de convidados
function Convidados (...nomes){
    console.log("Lista de Convidados:")
    for(let i in nomes){
        console.log(nomes[i])
    }
}

Convidados("Guilherme", "Kessya", "Pantera")



