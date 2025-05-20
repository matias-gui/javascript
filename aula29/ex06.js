// Criando uma função que aceite varios itens como array, e usando o operador spread para criar um unico array de menu.
function criarMenu() {
    let entradas = ["Peixe", "Pão ao molho", "Bauru"]
    let pratosPrincipais = ["Feijoada", "Macarronada", "Prato da casa"]
    let sobremesas = ["Sorvete", "mousse", "Açaí"]

    let menu = ["---------Entradas---------", ...entradas, "---------Pratos Principais---------", ...pratosPrincipais, "---------Sobremesa---------", ...sobremesas]

    return menu.join("\n")
}

console.log(criarMenu())