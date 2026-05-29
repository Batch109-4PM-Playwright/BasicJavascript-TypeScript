
let carno = 45;

console.log(carno);

carno = "Hyderabad";  //re-assignment

console.log(carno);

//let carno = "ABCDEF";   //re-declaration  //SyntaxError: Identifier 'carno' has already been declared

{
    let carName = "Brezza";
    console.log(carno);  //we are accessing outside data inside of the block
    console.log(carName);  //we are accessing inside data inside of the block
}

//console.log(carName);  //we are accessing inside data outside of the block //ReferenceError: carName is not defined


