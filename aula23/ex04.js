
function Imc(peso,altura){
 let calcImc = peso / (altura * altura)

if(calcImc < 18.5){
    console.log( "Baixo peso")
}else if(calcImc >= 18.5 && calcImc <= 24.9){
    console.log("Peso normal")
}else if(calcImc >= 25 && calcImc <= 29.9){
    console.log("Sobre Peso")
}
}

console.log(Imc(83, 175
))