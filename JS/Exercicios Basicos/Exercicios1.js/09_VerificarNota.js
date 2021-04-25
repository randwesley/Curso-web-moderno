function  notas(nota) {
    let notaCorrigida = arredondar(nota)
    if (notaCorrigida >= 40){
        console.log(`Sua nota é ${notaCorrigida}. Você está APROVADO`);
    } else{
        console.log(`Sua nota é ${notaCorrigida}. Você está REPROVADO`);
    }
}

function arredondar (nota) {
    if (restoDivisão(nota) > 2){
        /* Se o resto da divisão da nota por 5 for maior que 2
        * o valor da novaNota vai 5 menos o resto da divisão mais 
        * o valor original da nota */
        nota = nota + (5 - restoDivisão(nota))  
        return nota
    } else {
        return nota
    }
}

let restoDivisão = (nota, x=5) => {
    let restou;
    restou =  nota % x
    return restou
}

notas(77)
notas(78)
notas(79)
notas(30)
notas(61)
notas(62)
notas(63)