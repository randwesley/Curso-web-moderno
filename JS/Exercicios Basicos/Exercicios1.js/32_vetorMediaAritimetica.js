const vetor = [1,2,3,4,5,6]
let total = vetor.reduce((total, numero)=> (total+ numero), 0)
console.log(total/vetor.length);