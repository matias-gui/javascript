  let pessoa = {nome:"Guilherme", idade:22}
  let {nome, idade} = pessoa

function exibirInfo({nome, idade}){
    console.log(`Nome: ${nome}\nIdade: ${idade}`)
}

exibirInfo(pessoa)
