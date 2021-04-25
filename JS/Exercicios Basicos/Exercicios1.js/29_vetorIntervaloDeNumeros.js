const vetor = [1,2,3,5,6,20,23,65,21,148,10,15];
let foraDaMarca = 0;
let dentroDaMarca=0;
for (let i = 0; i < vetor.length; i++) {
    vetor[i] >= 10 || vetor[i] <= 20 ? dentroDaMarca++ : foraDaMarca++
}
