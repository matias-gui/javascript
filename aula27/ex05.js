// Criação de uma classe Jogo, com método estático que gera um número aleatório, e retorna se o usuario errou ou acertou.
class Jogo {
    static numeroAleatorio(adivinharNumero) {
        let num = Math.floor(Math.random() * 10)
        if(adivinharNumero === num ){
            return "Você acertou o número"
        }else{
            return `Você errou, o número correto era o : ${num}`
        }
    }
}

console.log(Jogo.numeroAleatorio(4))