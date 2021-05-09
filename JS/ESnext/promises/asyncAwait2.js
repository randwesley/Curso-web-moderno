function gerarNumeroEntre(min, max, numerosProibidos) {
    if (min > max){
        [max, min] = [min, max]
    }
    return new Promise((resolve, rejected) => {
        const random = parseInt(Math.random() * (max - min +1)) + min
        if(numerosProibidos.includes(random)){
            rejected('Numero repetido!')
        } else {
            resolve(random)
        }
    })
}

async function gerarMegasena(qtdNumeros) {
    try {
        const numeros = []
        for (let _ of Array(qtdNumeros).fill()) {
            numeros.push(await gerarNumeroEntre(1,60, numeros))
        }
        return numeros    
    } catch (error) {
        throw "que chato!"
    }
    
}

gerarMegasena(8)
    .then(console.log)
    .catch(console.log)

// gerarNumeroEntre(1, 5, [1 ,2 ,4])
//     .then(console.log)
//     .catch(console.log)