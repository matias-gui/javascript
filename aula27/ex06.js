// Classe ContaBancaria com método sacar.

class ContaBancaria {
    #saldo 
    constructor(){
        this.#saldo = 5000
    }

    sacar(saque){
        if(this.#saldo < saque){
            console.log( 'ERRO, saldo insuficiente')
        }else{
            this.#saldo -= saque
            console.log(`O seu saque foi um sucesso.\n Saldo disponivel ${this.#saldo.toLocaleString("BRL", {style:"currency", currency:"BRL"})}`)
        }
    }

}
const saque1 = new ContaBancaria()
saque1.sacar(4000)
