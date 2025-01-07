let num = document.getElementById('inum')
let res = document.getElementById('res')
let raiz = 0
let quad = 0
function calcular (){
    if(num.value.length == 0 || num.value < 1){
        alert('Digite um número!!')
    }else{
      raiz = Math.sqrt(num.value)
      quad = Number(num.value)*Number(num.value)
      res.innerHTML +=`A raiz quadrada do número ${num.value} é: ${raiz.toFixed(3)}...
      <br>`
      res.innerHTML += `E o seu quadrado é: ${quad}`
    }
    num.value = ''
    num.focus()
}
function limpar(){
    res.innerHTML = ''
}
