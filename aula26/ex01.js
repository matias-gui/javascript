// Criação de um set frutas.
let frutas = new Set()

frutas.add("Maça");
frutas.add("Banana")
frutas.add("Melão")
frutas.add("Maça")

//Verificando se um valor específico está no set.
console.log(frutas.has("Limão"))

// Removendo valor do set
frutas.delete("Banana")

//Limpando todo o set com o método "clear"
frutas.clear()

