let nome = document.getElementById('inome')
let alt = document.getElementById('ialtura')
let sx = document.getElementsByName('sexo')
let res = document.getElementById('res')
let pesoid = 0

function concluir(){
    res.innerHTML = ''
    if(nome.value.length == 0 || alt.value.length == 0 ){
        alert('Preencha todos os campos!')
    }else if(!sx[0].checked && !sx[1].checked){
        alert('Selecione o sexo')}
        else {
            if(sx[0].checked){
                pesoid = (72.7 * parseFloat(alt.value)) - 58
            }else if(sx[1].checked){
                    pesoid = (62.1 * parseFloat(alt.value)) - 44.7
            }
                res.innerHTML += `O peso ideal de ${nome.value} é: ${Number(pesoid.toFixed(0))} Kg `
    }
     nome.value = ''
     alt.value = ''
     sx.checked = ''
}