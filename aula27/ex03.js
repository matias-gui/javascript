
class Estudante {
    constructor(){
        this.notas = []
    }
    adicionarNota(notaProva){
        this.notas.push(notaProva)
    }
    calcularMedia(){
      let soma = 0 
      for(let i in this.notas){
        soma += this.notas[i]
      }
      let media = soma / this.notas.length
      console.log(media)

    }
}

let media = new Estudante()
media.adicionarNota(5)
media.adicionarNota(1)
media.calcularMedia()
