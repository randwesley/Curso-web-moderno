const alunos = [
    { nome: 'João', nota: 7.3, bolsista: false },
    { nome: 'Maria', nota: 9.2, bolsista: true },
    { nome: 'Pedro', nota: 9.8, bolsista: false },
    { nome: 'Ana', nota: 8.7, bolsista: true }
]

const todosBolsistas = (acumulador, valorAtual) => acumulador && valorAtual
const algunsBolsistas = (acumulador, valorAtual) => acumulador || valorAtual

const resultado = alunos.map(a=> a.bolsista).reduce(todosBolsistas)
console.log(resultado);

const resultado2 = alunos.map(a=> a.bolsista).reduce(algunsBolsistas)
console.log(resultado2);