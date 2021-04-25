function getInteiroAleatorioEntre(min, max) {
    const valor = Math.random() * (max - min) + min;
    return Math.floor(valor)
}

let opcao = 0; // iniciou a variavel

while (opcao != -1) { // O laço só termina quando o numero que sair for -1
    opcao = getInteiroAleatorioEntre(-1,10) // variavel opção recebe um numero aleatorio e mostra na tela
    console.log(`Opção escolhida foi: ${opcao}`); 
}

console.log('Até a proxima');