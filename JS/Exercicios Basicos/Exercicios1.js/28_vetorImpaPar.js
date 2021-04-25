const vetor = [1,2,3,5,8,3,5,9,4,6,87,6,4,5,6]
par=0;
impar=0;
for (let i = 0; i < vetor.length; i++) {
    vetor[i] % 2 === 0 ? par++ : impar++
}
console.log(`Qnt par: ${par}
Qnt impar: ${impar}`);

