let n = document.getElementById('inum')
let res = document.getElementById('res')
function adicionar(){
     res.innerHTML = ''
     if(n.value.length == 0 ){
        alert('Adicione um número!!')
     }else if( (Number(n.value) % 3) == 0 && (Number(n.value) % 7) == 0){
            res.innerHTML += `O número ${n.value} é divisível por 3 e  também é divisível por 7`
        }else{
            res.innerHTML += `O número ${n.value} não é divisível por 3 e nem por 7 `
        }
        n.value = ''
        n.focus()
    }