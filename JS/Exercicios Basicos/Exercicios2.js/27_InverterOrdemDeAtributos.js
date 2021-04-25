function inverter(obj) {
    const keyValue = Object.entries(obj).map(chaveValor => chaveValor.reverse())
    console.log(Object.fromEntries(keyValue));
}
inverter({a:1,b:2,c:3,d:4})