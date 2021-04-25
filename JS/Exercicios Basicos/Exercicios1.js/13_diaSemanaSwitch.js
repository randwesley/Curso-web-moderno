function switchCase(diaDaSemana) {
    switch (diaDaSemana) {
        case 1:
            console.log('Domingo: fim de semana');
            break;
        case 2:
            console.log('Segunda-Feira: Dia útil');
            break;
        case 3:
            console.log('Terça-Feira: Dia útil');
            break;
        case 4:
            console.log('Quarta-Feira: Dia útil');
            break;
        case 5:
            console.log('Quinta-Feira: Dia útil');
            break;
        case 6:
            console.log('Sexta-Feira: Dia útil');
            break;
        case 7:
            console.log('Sábado: Fim de semana');
            break;    
        default:
            console.log('Valor Invalido!');
            break;
    }
   
}
switchCase(1)
switchCase(99)