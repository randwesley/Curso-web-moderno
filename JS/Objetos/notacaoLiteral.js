const a = 1;
const b = 2;
const c = 3;

const objt1 = { a: a, b: b,c: c }
const obj2 = { a ,b ,c } // atualmente usasse assim
console.log(objt1,obj2);

const nomeAttrb = 'nota'
const valorAttrb = 7.22

const obj3 = {}
obj3[nomeAttrb] = valorAttrb
console.log(obj3);

const obj4 = {[nomeAttrb]: valorAttrb}
console.log(obj4);

const obj5 = {
    funcao: function name(params) {
        //...        
    },
    funcao2(){
        // ...
    }
}
console.log(obj5);
