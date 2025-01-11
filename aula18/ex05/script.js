let nome = document.getElementById('inome')
let alt = document.getElementById('ialtura')
let sx = document.getElementsByName('sexo')
function concluir(){
    if(nome.value.length == 0 || alt.value.length == 0 ){
        alert('Preencha todos os campos!')
    }else{
        alert("ok")
    }
}