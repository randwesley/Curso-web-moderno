function multiplicaNumero(num, num2) {
    resultado = 0
    if (num != 0 && num2 != 0) {
        for (let i = 0; i < num2; i++) {
            resultado +=num
        }
        return console.log(resultado);    
    }else {
        return console.log('numero invalido');
    }
    
}
multiplicaNumero(7,0)
