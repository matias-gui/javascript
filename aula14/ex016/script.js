function contar() {
    let inicio = document.getElementById("inicio")
    let fim = document.getElementById("ifim")
    let passo = document.getElementById("ipasso")
    let res = document.getElementById("res")

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        window.alert  ("[ERRO] Preencha corretamente!!")
        res.innerHTML = "Impossivel Contar!!"
    }else {
        res.innerHTML = "Contando: <br>"
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        if (p <= 0 ){
            window.alert("Erro. O Passo será considerado 1")
            p = 1
        }

        if (i < f ){

        for (let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{27A1} `
        }
    }else {
        for (let c = i; c >=f; c-=p ){
            res.innerHTML += `${c} \u{27A1} `
        }
    }
     res.innerHTML += `<br> Fim da Contagem..\u{2705}`
     res.style.backgroundColor = 'rgb(137, 137, 248)'
     res.style.boxShadow = ` 5px 5px 10px rgba(0, 0, 0, 0.41)`
    }
  
}