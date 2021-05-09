function gerarNumeroEntre(min, max) {
    if (min > max){
        [max, min] = [min, max]
    }
    return new Promise(resolve => {
        const random = parseInt(Math.random() * (max - min +1)) + min
        resolve(random)
    })
}

gerarNumeroEntre(10,30)
.then(valor => valor * 10)
.then(valor => valor/10)
.then(console.log)