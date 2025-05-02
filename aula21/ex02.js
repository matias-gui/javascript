// Esse loop irá imprimir somente números ímpares de 0 a 20
for(let i = 0; i < 21; i++){
    if(i % 2 === 0){
        continue // Irá pular os números pares
    }
    console.log(i)
}