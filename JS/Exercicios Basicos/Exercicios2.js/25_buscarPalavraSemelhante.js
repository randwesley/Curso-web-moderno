function buscarPalavraSemelhante(inicio, palavras) {
    console.log(palavras.filter(palavra => palavra.includes(inicio)))
}
buscarPalavraSemelhante("java", ["javascript", "java", "c++"]) 
