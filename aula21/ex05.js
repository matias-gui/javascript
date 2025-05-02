// O loop irá imprir números de 0 a 20, mas irá pular o número 13
for(let i = 0; i < 21; i++ ){
    if(i === 13){
        continue;//Pula o número 13
    }
    console.log(i)
 }