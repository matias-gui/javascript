let num = document.getElementById('inum')
let res = document.getElementById('res')
let numeros = []

function valores(n){
    if(Number(n) == 0){
        return true
    }else{
        return false
    }
}
function jaadicionado(n,j){
    if(j.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function enviar(){
    if(!valores(num.value) && !jaadicionado(num.value,numeros)){
        let n = Number(num.value)
        numeros.push(n)
        let soma = 0
        for (let i = 0; i < numeros.length; i++){
            soma+=numeros[i]    
        }
        media = soma / numeros.length
        par = 0 
        impar = 0 
        for (let c = 0; c < numeros.length; c++){
            if(numeros[c] % 2 == 0){
                par += 1
            }else{
                impar += 1
            }
            num.value = ''
            num.focus()
            res.innerHTML = ''

        
        }
    }else{
        alert('Número invalido ou já adicionado')
        num.value = ''
        num.focus()
    }
}
function concluir(){
    if(numeros.length == 0 ){
        window.alert('Por favor adicione os números!!')
    }else{
    res.innerHTML = ''
    res.innerHTML += `<p>Ao todo, foram ${numeros.length} números adicionados.</p>`  
    res.innerHTML += `A média desses números é ${media.toFixed(3)}`
    res.innerHTML += `<p>Temos o total de ${par} números PARES<br> E ${impar} números IMPARES</p>` 
    }
}
