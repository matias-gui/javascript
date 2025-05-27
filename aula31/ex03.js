// Criando um contador que imprime um número a cada segundo
function Contador (){
    this.contar = 0

    setInterval(()=>{
        this.contar++;
        console.log(this.contar)
    },1000);
    }
new Contador()

