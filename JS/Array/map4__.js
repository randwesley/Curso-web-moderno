 const nums = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ]
 const numsMultiplicados = nums.map( numero => numero * 2)
 console.log(numsMultiplicados);

const fahrenheit = [ 0, 32, 45, 46, 47, 91, 93, 121 ]
const celcius = fahrenheit.map( valor => Math.round((valor - 32) * 5 / 9))
console.log(celcius);

const convidados = [
    { nome: 'DanIEL', vip: true, idade: 21 },
    { nome: 'rafael', vip: true, idade: 54 },
    { nome: 'Felipe', vip: false, idade: 37 }
]
const convidadosAjustados = convidados.map(convidado => Object.assign(convidado, {nome: convidado.nome.toUpperCase()}))
console.log(convidadosAjustados);