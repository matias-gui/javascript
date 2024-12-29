
let n = window.document.getElementById('inum')
let res = document.getElementById('res')
let m = document.getElementById('most')
let valores = []



function adicionar (){
if (n.value.length == 0 || Number ( n.value > 100)){
    window.alert ('Número invalido, porfavor preencha corretamente')
    
}else{
    let n1 = Number(n.value)
    let op = document.createElement ('option')
    op.innerHTML += (`Valor ${n1} foi adicionado.<br>`)
    res.appendChild (op)
    valores.push(n1)
    valores.sort()
    }
   
}

function finalizar (){
      m.innerHTML +=`Ao todo temos ${valores.length} números cadastrado. <br>`
      m.innerHTML +=`O maior número é o ${valores}`
        
}