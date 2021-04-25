function rand(valor) {
    const min = 1
    const max = 10
    const novoValor = Math.floor(Math.random() * (max-min) + min);
    novoValor === valor ? console.log(`Parabéns! O número sorteado foi o ${valor}`) : console.log(`Que pena! O número sorteado foi o ${novoValor}. `);
}
rand(1)