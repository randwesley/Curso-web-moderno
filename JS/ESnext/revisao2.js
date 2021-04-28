// Arrow function

const soma = (a, b) => console.log(a+b)
soma(2 ,3)

// Arrow Function (this)
const lexico1  = () => console.log(this === exports);
const lexico2 = lexico1.bind({});

lexico1()
lexico2()

// parametro default
function log(texto = 'node'){
    console.log(texto);
}
log();
log('Sou mais forte');

// operador rest(juntar) e spread(espalhar)
// spread = no contexto do objeto e array
// // rest = no contexto de função - como parametro

function total(... numeros) {
    let total = 0
    numeros.forEach(n => total += n)
    return console.log(total)
}
total(1,2,3,4,5)