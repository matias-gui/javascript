
function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date ()
var hora = data.getHours()
//var hora = 
msg.innerHTML = `Agora são ${hora} horas.`

if (hora >= 0 && hora <  12 ) {
    img.src ='manha.png' 
    document.body.style.backgroundColor = '#D4C75C'
} else if (hora >= 12 && hora < 18){
    img.src = 'tarde.png'
    document.body.style.backgroundColor = '#EC9E39'
}else {
    img.src = 'noite.png'
    document.body.style.backgroundColor = '#1A3255'
}

}