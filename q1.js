/*
a) Sum of all elements in the array using reduce()
*/
let arr3 = [ 1, 2, 3, 4, 5 ]
let newarr3 = arr3.reduce((h1,h2)=>{
    return h1+h2;
})
console.log(newarr3);


/*
b) Average of all elements in the array using reduce()
*/
let newarr = arr3.reduce((a, b) => (a + b)) / arr3.length;
console.log(newarr);
