function triangulo(a,b,c) {
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        return console.log('Valor invalido');
    } else {
        if (a === b && b==c) {
            return console.log('Equilátero');
        } else if((a===b && b!==c) || (a === c && a!==b) || (b === c && c!==a)){
            return console.log('Isósceles');
        } else {
            return console.log('Escaleno');
        }    
    }
    
}

triangulo(3,0,1)