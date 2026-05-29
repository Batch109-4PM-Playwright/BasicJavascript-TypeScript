
let fancynumber : number[] = [89, 12, 56, 4, 30,  23, 67, 91, 21];   

//lamda expression : map
let add9 : number[] = fancynumber.map( a => a+9);  //adds "9" to every element
console.log(add9)

//lamda expression : filter
let myreminder = fancynumber.filter( k => k%5 == 0);
console.log(myreminder);

//for each
fancynumber.forEach(R => console.log(R));
