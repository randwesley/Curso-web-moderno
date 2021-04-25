const div = (x,y) =>{
    if (isNaN(x) || isNaN(y)){
        return console.log('Valor invalido!');
    }else{
        return console.log(`${x} / ${y} = ${(x/y)}
${x} % ${y} = ${x%y}`)
    }
}
div(10,6)