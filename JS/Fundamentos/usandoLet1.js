var numero = 1;
{
    let numero = 2; // let da preferencia para o escopo menor
    console.log("dentro =", numero)
}
console.log("fora = ", numero)