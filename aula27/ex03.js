// Criação de uma classe Estudante
class Estudante {
    constructor(){
        this.notas = []
    }
    // Método adiconar nota no array notas
    adicionarNota(notaProva){
        this.notas.push(notaProva)
    }
    // Método Calcular a média, uso do reduce, para somar os elementos do array
    calcularMedia(){
      if(this.notas.length === 0 ){
        return "Não há notas"
      }
      let soma = this.notas.reduce((total, nota) =>  total + nota, 0)
      // Calculando a média, usando a soma divididade por a quantidade de elemento que há no array, usando o length
      let media = soma / this.notas.length
      console.log(`A média do Estudante é: ${media.toFixed(2)}`)
    }
}

let media = new Estudante()
media.adicionarNota(5)
media.adicionarNota(4)
media.adicionarNota(2)
media.calcularMedia()
