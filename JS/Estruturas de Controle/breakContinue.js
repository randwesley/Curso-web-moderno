const nums = [1,2,3,4,5,6,7,8,9,10]

for (let x in nums) {
    if (x == 5) {
        break //interrompe o laço
    }
    console.log(`${x} = ${nums[x]}`);
}
console.log(' ');
for (let y in nums) {
    if (y == 5) {
        continue //interrompe a repetição atual e vai para a proxima
    }
    console.log(`${y} = ${nums[y]}`);
}


externo: for (let a in nums) { //externo é um rotulo criado para que o break seja direcionado para o laço mais externo
    for (let b in nums) {
        if (a==2 && b==3) break externo 
        console.log(`Par = ${a}, ${b}`);
            
    }
}