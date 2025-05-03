// Criação de uma tabela do IMC, que irá imprimir um mensagem sobre o seu peso.
function Imc(peso, altura) {
    let calcImc = peso / (altura * altura)
    let mensagem = ""

    if (calcImc < 18.5) {
        mensagem = "De acordo com a tabela de IMC, você está com baixo peso"
    } else if (calcImc >= 18.5 && calcImc <= 24.9) {
        mensagem = " De acordo com a tabela de IMC, você está no seu peso normal"
    } else if (calcImc >= 25 && calcImc <= 29.9) {
        mensagem = "De acordo com a tabela de IMC, você está acima do peso"
    } else if (calcImc >= 30 && calcImc <= 34.99) {
        mensagem = "De acordo com a tabela de IMC, você está com obesidade 1"
    } else if (calcImc >= 35 && calcImc <= 39.99) {
        mensagem = "De acordo com a tabela de IMC, você está com obesidade 2 (severa)"
    } else {
        mensagem = "De acordo com a tabela de IMC, você está com obesidade 3 (mórbida)"
    }
    return mensagem
}

console.log(Imc(83, 1.75))