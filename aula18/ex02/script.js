let nome = document.getElementById('inome')
let mat = document.getElementById('imatricula')
let sal = document.getElementById('isalario')
let vendas = document.getElementById('ivendas')
let res = document.getElementById('res')

function enviar(){
     res.innerHTML = ''
    if(nome.value.length == 0 || mat.value.length == 0 || sal.value.length == 0 || vendas.value.length == 0 ){
        alert('Por favor, preencha os dados!!')
    }else{
        let comissao = 0
        if(vendas.value < 1500){
            comissao = (2/100)* sal.value
        }else if(vendas.value > 1500){
            comissao = (4/100) * sal.value
        }
        
       let total = Number(sal.value) + Number(comissao)
       res.innerHTML += `<p>Vendedor: ${nome.value}</p>`
       res.innerHTML += `<p>Matricula: ${Number(mat.value).toFixed(0).replace('.','-')}</p>`
       res.innerHTML += `<p>Sálario fixo: ${Number(sal.value).toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}</p>`
       res.innerHTML += `Sálario total: ${total.toLocaleString('pt-BR',{style:'currency',currency:'BRL'})}`
    }
    nome.value = ''
    mat.value = ''
    sal.value = ''
    vendas.value = ''
    nome.focus()   
}