const obj = { a: 1, b: 2, c: 3, soma(){ return a + b + c } }
console.log(JSON.stringify(obj));

// json não armazena funções, apenas textos

console.log(JSON.parse('{"a": 1, "b": 2, "c": 3}')); // Formato JSON valido
console.log(JSON.parse('{"a":1, "b": "Aceita strings, boolean, number e array", "c": true, "d": []}'));