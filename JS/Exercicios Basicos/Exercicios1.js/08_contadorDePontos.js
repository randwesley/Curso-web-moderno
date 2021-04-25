let stringPontos = "10 20 20 8 25 3 0 30 1"

function avaliarPontos(stringPontos) {
    let pontos = stringPontos.split(' ')
    let vezesQuebrouRecords = 1
    let piorJogo = 1
    let maiorPontuacao = pontos[0]
    let menorPontuacao = pontos[0]

    for (let i = 0; i < pontos.length; i++) {
        if (pontos[i] > maiorPontuacao) {
            maiorPontuacao = pontos[i]; 
            vezesQuebrouRecords++
        } else if (pontos[i] < menorPontuacao) {
            menorPontuacao = pontos[i]
            piorJogo = i+1
        }
    }
    return console.log([vezesQuebrouRecords, piorJogo]);
}
avaliarPontos(stringPontos)
  
