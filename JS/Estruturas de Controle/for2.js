const notas = [6.9,7.4,9.8,7.7];
// for in = percorre o array e o obj pelo indice e não pelos valores
for (let i in notas) {
    console.log(i, notas[i]);    
}


const pessoa = {
    nome: 'Ana',
    sobrenome: 'Silva',
    idade: 29,
    peso: 64
}

console.log(' ');

for (let atributo in pessoa) {
        console.log(`${atributo} =  ${pessoa[atributo]}`);
}

