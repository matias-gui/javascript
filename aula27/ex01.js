
class Animal {
    constructor(nome,som ){
        this.nome = nome
        this.som = som
    }

    falar(){
        console.log(`${this.nome} está ${this.som}`)
    }
}

let animal1 = new Animal("Gato", "Miando")
let animal2 = new Animal("Cachorro","Latindo")
animal1.falar()
animal2.falar()