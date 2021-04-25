const notas = [7.7,6.5,5.2,8.9,3.6,7.1,9.0];

//sem callback
let notasBaixas = []
for (let i in notas) {
    if(notas[i]<7){
        notasBaixas.push(notas[i]);
    }
}
console.log(notasBaixas);

//com callback
notasBaixas = notas.filter(nota => nota < 7) //o filter retorna uma função que atraves de uma chamada condicional diz se o elemento é verdadeiro ou não para estar integrando o novo array
console.log(notasBaixas); // o filter não altera o array original