// tanto contador A. quanto o B compartilham do mesmo objeto retornado
const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.incremento()
contadorA.incremento()
console.log(contadorB.valor, contadorA.valor);

contadorC.incremento()
contadorC.incremento()
console.log(contadorC.valor, contadorD.valor);