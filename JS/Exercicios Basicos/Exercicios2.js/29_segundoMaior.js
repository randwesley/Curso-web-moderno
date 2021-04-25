function segundoMaior(numeros) {
    const maiorNumero = Math.max(... numeros)
    numeros = numeros.filter(numero => numero != maiorNumero)
    const segundoMaior = Math.max(... numeros)

    return console.log(segundoMaior)
}
segundoMaior([12,16,1,5,4,9,98,65,])