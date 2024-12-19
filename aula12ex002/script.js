function verificar(){
    var data = new Date
    var ano = data.getFullYear()
    var fano = document.getElementById('iano')
    if(fano.value.length == 0 ||Number (fano.value) > ano) {
        window.alert('[ERRO] Verifique as datas novamente')
        
    }else{
        var fsex = window.document.getElementsByName('sexo')
        var idade = ano - Number (fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id' , 'foto')
        img.style.width = '250px'

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'fotocriançam.png')
            }else if (idade <= 21){
                img.setAttribute('src', 'fotojovemm.png')
            }else if (idade <= 50 ){
                img.setAttribute('src', 'fotoadultom.png')
            }else {
                img.setAttribute('src', 'fotosenhor.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                img.setAttribute('src', 'fotocrinçaf.png')
            }else if (idade <= 21){
                img.setAttribute('src', 'fotojovemf.png')
            }else if (idade <= 50  ){
                img.setAttribute('src', 'fotoadultof.png')

            }else {
                img.setAttribute('src', 'fotosenhora.png')
            }
        }
        imagem.style.textAlign = 'center'
        imagem.innerHTML = `Detectamos ${genero} com ${idade} anos`
        imagem.appendChild(img)
      
    }
}