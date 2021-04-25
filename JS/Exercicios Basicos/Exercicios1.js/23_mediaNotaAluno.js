function mediaNota(cod, primeiraNota, segundaNota, terceiraNota) {
    let mediaPonderada = 0;
    mediaPonderada = ((primeiraNota * 4) + (segundaNota *3) + (terceiraNota * 3))/10
    console.log(`${cod}, Notas: ${primeiraNota}, ${segundaNota}, ${terceiraNota}. Nota Geral: ${mediaPonderada} ${mediaPonderada > 5 ? 'Aprovado' : 'Reprovado'}`);
}
mediaNota('AFE8548', 5,4,7)