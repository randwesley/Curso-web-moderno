let isAtivo = false;

console.log(isAtivo);

isAtivo = true;
console.log(isAtivo);

isAtivo = 1;
console.log(!true);

console.log('Vedadeiros'); 
console.log(!!3);
console.log(!!-1);
console.log(!!' ')
console.log(!![])
console.log(!!{})
console.log(!!Infinity)
console.log(!!(isAtivo = true));

console.log('Falsos'); 
console.log(!!0);
console.log(!!'');
console.log(!!null);
console.log(!!NaN);
console.log(!!undefined);
console.log(!!(isAtivo = false));

console.log('Concluindo');
console.log(!!('' || null || 0 || ' ')); // O simbolo || significa OU, logo pelo menos uma sentença tem que ser verdadeira


//let nome = '';                // string vazia = false
let nome = 'John';
console.log(nome || 'desconhecido');