//Jogo de adivinhação entre 1 e 5

// Math.random gera um número decimal entre 0 e 1
// multiplica pelo 5, e arredonda usando o Math.floor
// soma mais 1, para garantir que o número fique entre o intervalo
// Ou podemos simplismente adicionar o número direto no let num, let num = 3
let num = Math.floor(Math.random() * 5) +1
let palpite = 3
switch (num){
    case palpite:
        console.log("Você acertou o número", num)
    break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:                
    default:
        console.log("Você errou, o número era:", num)
}