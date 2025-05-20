//  Criando dois objetos e usando o operador spread para mesclar esses dois objetos em um unico objeto "filme"
let objeto1 = {titulo: "Poera em alto mar", diretor:"Marco X" }

let objeto2 = {ano: 2000, genero:"Comédia"}

let filme = {...objeto1, ...objeto2}

console.log(filme)