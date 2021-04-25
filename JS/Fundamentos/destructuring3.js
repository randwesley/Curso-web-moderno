// da pra se beneficiar dos parametros padroões nos mais diversos contextos, incluindo no do destructuring
function rand([min=0,max=1000]) { 
    if (min > max) [min, max] = [max, min] // se o min for maior que o max, troque ele usando o destructuring
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor);
}

const arrayn = [50, 40];
console.log(rand(arrayn));
console.log(rand([50, 40]))
console.log(rand([40]))
console.log(rand([,50]))
console.log(rand([]))