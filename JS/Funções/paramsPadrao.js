// estrategias 1 para gerar valores padrão

function soma1(a,b,c) { //usando o ou
    a = a || 1;
    b = b || 1;
    c = c || 1;
    return a + b + c;
}
console.log(soma1(), soma1(3), soma1(1,2,3), soma1(0,0,0)); // passar zero vai adr erro, já que zero é false no js

// estrategia 2,3,4 para gerar valor padrão
function soma2(a,b,c) {
    a = a !== undefined ? a : 1;
    b = 1 in arguments ? b : 1; // o indice 1 foi passado como argumento? se não, passe 1  
    c = isNaN(c) ? 1 : c;
    return a+b+c;
}
console.log(soma2(), soma2(3), soma2(1,2,3), soma2(0,0,0));

// Valor padrão ES2015
function soma3(a=1,b=1,c=1) {
    return a+b+c;
}
console.log(soma3(), soma3(3), soma3(1,2,3), soma3(0,0,0));
