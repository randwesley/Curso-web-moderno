const pessoa = {
    nome: 'Wesley',
    idade: 2,
    peso: 13
}

console.log(Object.keys(pessoa)); // captura as chaves do obj
console.log(Object.values(pessoa)); // captura os valores do obj
console.log(Object.entries(pessoa)); // captura a chave/valor do obj e retorna como um array com arrays de dois elementos = [[chave], [valor]]

Object.entries(pessoa).forEach(elementoDePessoa => {
    console.log(`${elementoDePessoa[0]}: ${elementoDePessoa[1]}`);
});
console.log();

// entries.forEach Usando o destructuring - MUITO LINDOOOO
Object.entries(pessoa).forEach( ([ chave, valor ]) => { 
    console.log(`${chave}: ${valor}`);
});
console.log();

Object.defineProperty(pessoa, 'dataNascimento', { // params: nome, atributo e propriedades a serem inseridas
    enumerable: true,
    writable: false,
    value: '26/07/1996'
})
pessoa.dataNascimento = '14/01/2020'
console.log(pessoa);

// Object.assign (ECMASCRIPT 2015)
const destino = { a: 1}
const o1 = {b: 2}
const o2 = {c:3, a:4}

obj = Object.assign(destino, o1, o2)
console.log(obj);
Object.freeze(obj)
obj.c = 1244;
console.log(obj);
