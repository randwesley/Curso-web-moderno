const nome = 'Wesley';
const concatenacao = 'Olá ' + nome + '!';


const template = `
    Olá ${nome}!
    Tudo bem?`

console.log(concatenacao,template)

console.log(`1 + 1 = ${ 1 + 1}`);

const up = texto => texto.toUpperCase();
console.log(up(template));

console.log(`Eii... ${nome}, ${up('cuidado')}!`);