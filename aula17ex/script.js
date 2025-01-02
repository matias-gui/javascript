
let n = window.document.getElementById('inum')
let res = document.getElementById('res')
let m = document.getElementById('most')
let valores = []
function numeros(n){
    if(Number(n) >= 1 && Number(n) < 100) {
        return true
    }else{
        return false
    }
}

function lista(n,l){
    if(l.indexOf(Number(n)) != -1){
        return true

    }else{
        return false
    }
}

function adicionar (){
    if(numeros(n.value) && !lista(n.value, valores) ){
        let num = Number(n.value)
        valores.push(num)
        let op = document.createElement ('option')
        op.innerHTML = (`O valor ${num} foi adicionado.`)
        res.appendChild(op)
        m.innerHTML=''
        m.style.backgroundColor =''
        m.style.boxShadow = ''


    }else{
        alert('Número invalido ou já se encontra na lista!!')
    }
}


  


function finalizar (){

        let max = Math.max(...valores)
        let min = Math.min(...valores)
        let soma = 0
        
        for (let i = 0; i < valores.length;i++){
            soma+=valores[i]
        }
        let media= soma / valores.length
        m.style.backgroundColor = ' rgba(0, 0, 139, 0.5)'
        m.style.width = '68vw'
        m.style.margin = 'auto'
        m.style.boxShadow = '5px 5px 10px  rgba(0, 0, 0, 0.381)'
        
     
        m.innerHTML +=`Ao todo, temos <strong>${valores.length}</strong> números cadastrado. <br>
        O maior número digitado foi o <strong>${max}</strong><br>
        O menor número digitado foi o <strong>${min}</strong><br>
        Somando todos os números, temos <strong>${soma}</strong><br>
        A media dos números cadastrado é <strong>${media.toFixed(2)}</strong>`
        
        
}