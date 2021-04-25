let vetorResultado = []
let vetorzinho = [1,2,3,4,5]

function multiplicaVetor(vetor, num) {
    vetor.forEach(elemento => {
        vetorResultado.push(elemento*num)
    });
    return vetorResultado;
}

function multiplicaVetor2(vetor,num) {
    for (let i = 0; i < vetor.length; i++) {
        if (vetor[i]> 5) {
            vetorResultado = vetor[i] * num
        }   
    }
    return vetorResultado
}

console.log(multiplicaVetor(vetorzinho,2));
