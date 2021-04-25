// Array no js é dinamico
console.log(typeof Array, typeof new Array, typeof []);

let aprovados = new Array('Bia', 'Carlos', 'Ana')
console.log(aprovados);

aprovador = ['Bia', 'Carlos', 'Ana']
console.log(aprovados[0]);
console.log(aprovados[1]);
console.log(aprovados[2]);
console.log(aprovados[3]);

aprovados[3] = 'Paulo'
aprovados.push('Joana')
console.log(aprovados.length);

aprovados[9] = 'John'
console.log(aprovador.length);
console.log(aprovados);

aprovados.sort()
console.log(aprovados);

delete aprovados[1]
console.log(aprovados[0]);
console.log(aprovados[2]);
aprovados[1] = 'Bia'

aprovados.splice(6, 4) 
console.log(aprovados);

aprovados.splice(6,0,'Wesley', 'Randerson')
aprovados.sort()
console.log(aprovados);