function somaFracionada(x,y) {
    const a = x + y
    return console.log(`R$ ${a.toFixed(2).replace('.',',')}`);
}
somaFracionada(0.1,0.2)