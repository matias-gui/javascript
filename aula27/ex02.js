
class Veiculo {
    constructor(marca, modelo, velocidadeMaxima) {
        this.marca = marca
        this.modelo = modelo
        this.velocidadeMaxima = velocidadeMaxima
    }

    descrever() {
        console.log(` Marca - ${this.marca} \n Modelo - ${this.modelo}\n Velocidade Máxima - ${this.velocidadeMaxima}Km  `)
    }
}

let carro = new Veiculo("Honda", "Civic", 190)
carro.descrever()