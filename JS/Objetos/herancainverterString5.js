console.log(typeof String);
console.log(typeof Array);
console.log(Object);


String.prototype.reverse = function () {
    return this.split('').reverse().join('')
}

console.log('Randerson Wesley'.reverse());

Array.prototype.first = function () {
    return this [0]
}

console.log([1,2,3,4,5].first());
console.log(['a','b','c'].first());

