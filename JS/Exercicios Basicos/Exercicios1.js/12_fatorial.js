const fatorialX = (valor) => valor === 0 || valor === 1 ? 1 : valor * fatorialX(valor-1)
console.log(fatorialX(5));
console.log(fatorialX(1));
console.log(fatorialX(0));
