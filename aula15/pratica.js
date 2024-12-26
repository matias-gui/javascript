let vaga = ['Carro','Moto', 'Caminhão']
vaga.sort()
console.log(`Há ${vaga.length} vagas, sendo assim :`)
for (let pos in vaga){
    console.log(`Na posição ${pos} temos a vaga de ${vaga[pos]}`)
}