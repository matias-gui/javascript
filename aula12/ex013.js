var aghora = new Date ()
var hora = aghora.getHours()
console.log(`Agora são exatamente ${hora} horas.`)
if (hora < 12 ){
    console.log('Bom Dia')
} else if (hora < 17 ){
    console.log ('Boa Tarde')
} else {
    console.log ('Boa Noite')
}