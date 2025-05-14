// Criação de uma classe Jogo, com método estático que gera um número aleatório, e retorna se o usuario errou ou acertou.
class Jogo {
    static numeroAleatorio(adivinharNumero) {
        let num = Math.floor(Math.random() * 5)
        if(adivinharNumero === num ){
            console.log("Você acertou o número")
        }else{
            console.log("Você errou, o número correto era o :",num)
        }
    }
}

Jogo.numeroAleatorio(4)