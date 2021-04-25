const nums = [ 10, 18, 1, 15 ]
const numsFiltrados = nums.filter(e => e > 10)
console.log(numsFiltrados);

const nome = ['Bruno', 'Zezin', 'Fulano', 'Wesley']
const filtrarNome = nome.filter(nome => nome[0] === 'Z')
console.log(filtrarNome);

const numers = [ 10, 18, 1, 15, 2, 12, 21, 33, 100 ]
const numersPares = numers.filter(numero => numero % 2 === 0)
console.log(numersPares);

const filmes = [
        {titulo: 'Titanic', duracao: 195, nota: 7.5 },
        {titulo: 'The Avengers', duracao: 203, nota: 9.5 },
        {titulo: 'MR. Bean', duracao: 90, nota: 6.5 }
]
const filmesBons = filmes.filter(filme => filme.nota > 8.5)
console.log(filmesBons);

const convidados = [
    { nome: 'Daniel', vip: true, idade: 21 },
    { nome: 'Rafael', vip: true, idade: 54 },
    { nome: 'Felipe', vip: false, idade: 37 }
]
const convidadosVips = convidados.filter(convidado => convidado.vip)
console.log(convidadosVips);