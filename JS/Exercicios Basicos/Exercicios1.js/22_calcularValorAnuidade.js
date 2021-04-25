function anuidade(mesAtual, valor) {
    if (mesAtual <=0 || mesAtual > 12) {
        console.log('Mes invalido');
    } else {
        
    
        let txJuros = 0.05;
        let atraso = mesAtual-1;
        let valorTotal=0;
            valorTotal = (valor * (Math.pow((1 + txJuros), atraso)))
            console.log(valorTotal.toFixed(2));
    }
}

anuidade(12, 100)