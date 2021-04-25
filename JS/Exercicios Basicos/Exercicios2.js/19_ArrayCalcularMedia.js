function calcularMedia(array) {
    let resultado = array.reduce((valor, proxi) => valor + proxi)
    return console.log(resultado / array.length)
    
}
const array = [1,2,3,4,5,6]
calcularMedia(array)