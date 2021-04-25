function ProgressaoAritmetica(n,a1,r) {
    let soma=0
    for (let i = 0; i <n; i++) {
        console.log(a1);
        a1 = a1+r 
        soma = soma + a1

    }
    console.log(`Soma: ${soma}`);    
}
ProgressaoAritmetica(10,1,2)

function ProgressaoGeometrica(n,a1,r) {
    let soma=0
    for (let i = 0; i <n; i++) {
        console.log(a1);
        a1 = a1*r 
        soma = soma + a1/2
    }
    console.log(`Total: ${soma}`);
}
ProgressaoAritmetica(10,1,2)
console.log('');
ProgressaoGeometrica(10,1,2)