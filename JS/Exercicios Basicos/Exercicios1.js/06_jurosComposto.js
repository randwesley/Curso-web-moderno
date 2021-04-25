function jurosSimples(capInicial=0, tempoAplicacao=0, txJuros=0.05) {
    const montante= capInicial * (1 + (txJuros * tempoAplicacao));
    return console.log(montante.toFixed(2));
}


function juroscomposto(capInicial=0, tempoAplicacao=0, txJuros=0.05) {
    const montanteComp= capInicial * (Math.pow((1 +txJuros),tempoAplicacao));
    return console.log(montanteComp.toFixed(2));
}
jurosSimples(100, 2);
juroscomposto(100, 2, 0.05)