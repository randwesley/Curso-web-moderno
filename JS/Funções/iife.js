// IIFE -> Immediately Invoked Function Expression
//da pra fugir do escopo global, criando variaveis, funções e objetos que não tem relação com o escopo global
// assim que ela é lida pelo js, ela é executada
(function () {
    console.log('Será executada na hora!')
    console.log('Foge do escopo mais abrangente')
})()

