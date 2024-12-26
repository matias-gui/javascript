let valores = [2,4,6,8,9]
/*
for (let i = 0; i < valores.length; i++){
    console.log(`Na posição ${i} tem o valor ${valores[i]}`)
}
console.log('O vetor tem o valor de',valores.length, 'posições')*/

for (let i in valores){
    console.log (`Na posição ${i} tem o valor ${valores[i]}`)
}
let pos = valores.indexOf(6)
if (pos == -1 ){
    console.log('O valor não foi encontrado')
}else {
    console.log(`O valor está na posição ${pos}`)
}
