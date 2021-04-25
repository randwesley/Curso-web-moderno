const nums = [1,2,3,4,5]

// map é um for com um proposito: transformar os elementos de um array em um novo

let resultado = nums.map((element) => {
    return element * 2
})
console.log(resultado);

const somar10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

resultado = nums.map(somar10).map(triplo).map(paraDinheiro)
console.log(resultado);