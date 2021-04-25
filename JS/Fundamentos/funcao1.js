

// função sem retorno
function imprimirSoma(a,b) {
    console.log(a + b);
}

imprimirSoma(6,9)
imprimirSoma(2);
imprimirSoma(9,6,6,66,6,6,);
imprimirSoma();

// função com retorno
function soma(a, b=0) {
    return a+b 
}
console.log(soma(2,3)) // QUANDO A FUNÇÃO RETORNA VALOR, TEM QUE COLOCAR DENTRO DE UM CONSOLE.LOG
console.log(soma(2)) // RETORNOU 2, PQ O SEGUNDO PARAMETRO FOI PADRONIZADO COMO ZERO CASO O SEGUNDO VALOR NÃO FOR DECLARADO