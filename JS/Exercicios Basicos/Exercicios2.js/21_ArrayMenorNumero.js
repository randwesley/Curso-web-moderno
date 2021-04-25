const arrayNumerico = [5,-15,50,3]

function menorNumero(array) {
    console.log(array.reduce((a,b) => Math.min(a,b)))
}

function menorNum(array) {
    console.log(Math.min(...array))
}

menorNumero(arrayNumerico)
menorNum(arrayNumerico)