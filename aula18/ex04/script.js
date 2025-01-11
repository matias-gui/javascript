let n = document.getElementById('inumeros')
let res = document.getElementById('res')
let numeros =[]
let negativo = 0

function adicionar(){
if(n.value.length == 0 || numeros.length >= 5){
    alert('Número invalido ou a quantidade de números completo ')
}else{
    numeros.push(n.value)
    n.value = ''
    n.focus()
    res.innerHTML = ''
    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] < 0 ){
            negativo += 1
        }else{
            negativo = 0
        }
    }   
} 
}
function concluir(){
    res.innerHTML += ''
    if(n.value.length == 0){
        alert('Adicione os números')
    }else{
        n.value = ''
        res.innerHTML+=`Os números adicionados são ${numeros} entre eles temos ${negativo} numero negativo`
        numeros.length = 0
    }
}