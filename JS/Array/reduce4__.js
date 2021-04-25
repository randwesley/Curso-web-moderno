const numeros = [1.5, 2, 4, 10]
const somatoria = numeros.reduce((acumulador, proximoNumero) => acumulador + proximoNumero, 0 )
console.log(somatoria);

const divisao = numeros.reduce((acumulador, proximoNumero, indice, array) => {
    acumulador = acumulador + proximoNumero
  return  indice == array.length - 1 ? acumulador / array.length : acumulador
}, 0)
console.log(divisao);

const divisaoSimples = somatoria/numeros.length
console.log(divisao);

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const dobrados = nums.map( num => num *2)
console.log(dobrados);

const dobraDois = nums.reduce((total, numero) => { 
    return total.concat(numero * 2)
    
}, [])
console.log(dobraDois);

numers = [10, 18, 1, 15]
const maiorQueDez = numers.reduce((acumulador, numero) => {
    numero > 10 ? acumulador.push(numero) : acumulador
    return acumulador
}, [] )
console.log(maiorQueDez);

const valores = [10, 18, 1, 15, 2, 12, 21, 33, 100]
const dobraEFiltra = valores.filter(valor => valor % 2 == 0).map(valor => valor * 2)
console.log(dobraEFiltra);

const carros = [
    {marca: 'Audi', cor: 'preto'},
    {marca: 'Audi', cor: 'branco'},
    {marca: 'Ferrari', cor: 'vermelho'},
    {marca: 'Ford', cor: 'branco'},
    {marca: 'Peugot', cor: 'branco'}
]

function groupBy(array, atributo) {
    const valor = array.reduce((total, item)=> {
        const chave = item[atributo] // item.marca 
        total[chave] =  (total[chave] || []).concat(item)
        return total
    }, {})

    return valor
}
const agrupados = groupBy(carros, 'marca')
console.log(agrupados);