console.log(this === global);
console.log(this === module);

console.log(this === module.exports);
console.log(this === exports);
console.log('');

function logThis(){
    console.log('dentro de uma function o This não aponta para exports...');
    console.log(this === exports);
    console.log(this === module.exports);

    console.log('dentro de uma function o This APONTA para global...');
    console.log(this === global);
}
logThis()