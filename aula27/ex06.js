

class ContaBancaria {
    #saldo 
    constructor(){
        this.#saldo = 5000
    }

    sacar(saque){
        if(this.#saldo < saque){
            console.log( 'ERRO, saldo insuficiente')
        }else{
            let saldoDisponivel = this.#saldo - saque
            console.log(`O seu saque foi um sucesso.\n Saldo disponivel ${saldoDisponivel.toLocaleString("BRL", {style:"currency", currency:"BRL"})}`)
        }
    }

}
const saque1 = new ContaBancaria()
saque1.sacar(6000)
