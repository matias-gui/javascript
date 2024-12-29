function adicionar (){
let most = document.getElementById('imostranum')
let n = window.document.getElementById('inum')

if (n.value.length == 0 || Number ( n.value> 100)){
    window.alert ('Número invalido, porfavor preencha corretamente')
}else {
    let num = Number(n.value)
    let op = document.createElement ('option')
    op.innerHTML += (`${n}`)
    most.appendChild (op)
}
}
