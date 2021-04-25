function bhaskara(a=3, b= -5, c=12) {
    let delta = Math.pow(b,2) -(4*a*c)
    if (delta<0){
        console.log(`Delta = ${delta} é negativo!`);
    } else{
        let x1 = (-b + Math.sqrt(delta))/(2*a)
        let x2 = (-b - Math.sqrt(delta))/(2*a)
        let xX = []
        xX.push(x1,x2)
        console.log(`X1,X2 = ${xX}`);
    }
}
bhaskara(3,1,2);
