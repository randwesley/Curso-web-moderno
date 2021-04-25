function valorDoPlano(idade){
    if (idade <= 0 || idade > 110) {
        console.log('Idade informada fora da faixa permitida');
    } else {
        if (idade <= 10){
            console.log('Valor do plano é 180');
        }else if (idade > 10 && idade <= 30){
            console.log('Valor do plano é 150');
        }else if (idade > 30 && idade < 60) {
            console.log('Valor do plano é 195');
        } else if (idade > 60){
            console.log('Valor do plano é 230');
        }
    }
}
valorDoPlano(111)