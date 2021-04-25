/* Operadores ternarios são estruturas para lidar com 3 operandos,
 * 1º - uma expressão relacional (maior que, menor que , maior ou igual, menor ou igual, diferente de... etc)
 * 2ª Se a expressão for verdadeira, ela retorna algo
 * 3º Se a expressão for falsa ela retorna algor
 * 1 - <=> (compara o relacionamento) 2 - ? (questiona a veracidade) 3 - retornoVerdadeiro : (ou) retornoFalso
 */ 
const resultado =  nota => nota>=7 ? 'Aprovado' : 'Reprovado' // arrow function

const resultado1 =  (nota) => {
    nota>=7 ? 'Aprovado' : 'Reprovado'          // arrow function
}

const result = function (nota1) {          //função anonima
    return nota1>=7 ? 'Aprovado' : 'reprovado'
}
 console.log(result(6.6))
 console.log(resultado(6.9))
