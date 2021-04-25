function compras(trabalho1, trabalho2) {
    const comprarSorvete = trabalho1 || trabalho2  // ou
    const comprarTV50 = trabalho1 && trabalho2     // e
    const comprarTV32 = trabalho1 != trabalho2     // diferente de
    const manterSaudavel = !comprarSorvete //operador unario

    //retorno de par chave/valor implicito, a chave e o valor tem o mesmo nome por baixo dos panos ES2015
    return {comprarSorvete, comprarTV50, comprarTV32, manterSaudavel}
}

console.log(compras(true, true))
console.log(compras(true, false))
console.log(compras(false, true))
console.log(compras(false, false))