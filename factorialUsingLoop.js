// var fact = 1;
// for (var i = 1; i <= 10; i++) {
//     fact = fact * i;
//     console.log(i, fact);
// }

function factorial(num) {
    var fact = 1;
    for (var i=1; i<=num; i++) {
        fact = fact * i;
        
        // console.log(i, fact);
    }
    return fact;
}
var result = factorial(3);
console.log(result);
