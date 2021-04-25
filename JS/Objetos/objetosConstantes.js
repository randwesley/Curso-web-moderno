// pessoa -> endereço de memoria: 123 -> no endereço está o objt
const pessoa = {nome: 'João'}
pessoa.nome = 'Wesley'
console.log(pessoa);

// nesse caso da erro: pessoa recebe um novo obt que está num outro endereço de memoria
//pessoa = {nome: 'John'} 

// o metodo freeze impede que os dados do endereço de memoria em questão seja alterado
Object.freeze(pessoa) 
delete pessoa.nome
pessoa.nome = 'Maria'
console.log(pessoa);

const objetoConstante = Object.freeze({nome: 'João'})
console.log(objetoConstante);