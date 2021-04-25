function calculadora(x,y) {
    if((isNaN(x)) || (isNaN(y))){
        return console.log('Valor invalido, insira apenas valores numericos');
    }else{
        return console.log(`${x} + ${y} = ${x+y}
${x} - ${y} = ${x-y}
${x} * ${y} = ${x*y}
${x} / ${y} = ${(x/y)}
${x} % ${y} = ${x%y}`)
    }
}
calculadora(10,6)