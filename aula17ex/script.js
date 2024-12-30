
let n = window.document.getElementById('inum')
let res = document.getElementById('res')
let m = document.getElementById('most')
let valores = []
    

function adicionar (){
  
if (n.value.length == 0 || Number ( n.value > 100)){
    window.alert ('Número invalido, porfavor preencha corretamente')

}else {
    let n1 = Number(n.value)
    valores.push(n1)
    let tem = valores.indexOf()
    
    if(tem == -1 ){
    let op = document.createElement ('option')
    op.innerHTML += (`Valor ${n1} foi adicionado.<br>`)
    res.appendChild (op)}else{
        alert('n')
    }
   
}
   
}



function finalizar (){

        let max = Math.max(...valores)
        let min = Math.min(...valores)
        let soma = 0
        m.innerHTML = ""
        for (let i = 0; i < valores.length;i++){
            soma+=valores[i]
        }
        let media= soma / valores.length
     
        m.innerHTML +=`Ao todo, temos <strong>${valores.length}</strong> números cadastrado. <br>
        O maior número digitado foi o <strong>${max}</strong><br>
        O menor número digitado foi o <strong>${min}</strong><br>
        Somando todos os números, temos <strong>${soma}</strong><br>
        A media dos números cadastrado é <strong>${media}</strong>`
        
        
}