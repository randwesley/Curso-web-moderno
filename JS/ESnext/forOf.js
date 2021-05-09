for (let letra of 'Wesley'){
    console.log(letra);
}

const assuntosECMA = ['map', 'set', 'promise']
for (let i in assuntosECMA) {
    console.log(i);
}

for (let assuntos of assuntosECMA){
    console.log(assuntos);
}

const assuntosMap = new Map([
    ['Map', {abordado: true}],
    ['set', {abordado: true}],
    ['Promise', {abordado: false}]
])

for (let assunto of assuntosMap){
    console.log(assunto);
}

for (let chave of assuntosMap.keys()) {
    console.log(chave);
}

for (const valor of assuntosMap.values()) {
    console.log(valor);
}

for (let [ch, vl] of assuntosMap.entries()) {
    console.log(ch, vl);
}