const vetor = [5,8,65,6565,645,62654,98,8751,6546,9,987,84,3]
let maior
let menor
for (let i = 0; i < vetor.length; i++) {
    if (maior === undefined && menor === undefined){ 
        maior=vetor[i];
        menor=vetor[i]
    }else{
        if (vetor[i] > maior) {maior=vetor[i]}
        if (vetor[i] < menor) {menor=vetor[i]}
    }
}
console.log(`Maior numero: ${[maior]}
Menor Numero: ${menor}`);