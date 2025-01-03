
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
   n.value = ''
   n.focus()
}


  


function finalizar (){
    if(valores.length == 0 ){
        window.alert('Por favor preencha os números')

    }else{

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
        
     
        m.innerHTML +=`<p>Ao todo, temos <strong>${valores.length}</strong> números cadastrado</p>`
        m.innerHTML += `<p>O maior número digitado foi o <strong>${max}</strong></p>`
        m.innerHTML +=`<p>O menor número digitado foi o <strong>${min}</strong></p>`
        m.innerHTML +=`<p>Somando todos os números, temos <strong>${soma}</strong></p>`
        m.innerHTML +=`<p>A media dos números cadastrado é <strong>${media.toFixed(2)}</strong></p>`               
    }   
}
function limpar(){
    
    valores = ''
    res.innerHTML = ''
    m.innerHTML = ''
    m.style.backgroundColor = ''
    m.style.boxShadow  = ''

}