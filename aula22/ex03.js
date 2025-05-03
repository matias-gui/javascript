// O código irá avaliar a nota dos alunos, e classificar se está reprovado, de recuperação e aprovado
let nota = 10

switch(true){
    case (nota < 6):
            console.log("Reprovado")
    break;
    case (nota >= 6 && nota < 7):
            console.log("Recuperação")
    break;      
    case (nota >= 7 && nota <= 10):
            console.log("Aprovado, parabéns!")
    break; 
    default:
        console.log("Nota invalida")       
}