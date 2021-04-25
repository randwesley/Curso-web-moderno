function aumentoDeSalario(planoAtual, salarioAtual) {
    let novoSalario
    switch (planoAtual) {
        case 'a':
            novoSalario = salarioAtual + (salarioAtual * 0.1);
            console.log('Seu salario ajustado é', novoSalario);
            break;
        case 'b':
            novoSalario = salarioAtual + (salarioAtual * 0.15);
            console.log('Seu salario ajustado é', novoSalario);
            break;
        case 'c':
            novoSalario = salarioAtual + (salarioAtual * 0.20);
            console.log('Seu salario ajustado é', novoSalario);
            break;
        default:
            console.log('Valor informado é invalido');
            break;
    }
}
aumentoDeSalario(1, 1100)