function gerar(){
    let num = document.getElementById('inum')
    let tab = document.getElementById('tab')
    if(num.value.length == 0 ){
        window.alert ('[ERRO] Digite um número')
    }else {
        let n = Number(num.value)
        let c = 1 
        tab.innerHTML = ''
        while (c <=  10 ){
            let item = document.createElement('option')
            item.innerHTML += `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
            c++
        }
    }
}