function soma(array) {
    return console.log(array.reduce((acumulador, proxNum) => acumulador+=proxNum))
}
soma([15,15,15,15])