
const carno = 45;

console.log(carno);

var nymame = 4587;

//carno = "Saturday";  //re-assignment  //TypeError: Assignment to constant variable.

//const carno = "Saturday";   //re-declaration //SyntaxError: Identifier 'carno' has already been declared
{
    const carColor = "Red and Black";
    console.log(carno);  //we are accesing outside data into inside of the block
    console.log(carColor);  //we are accessing inside data into inside of the block
}

console.log(carColor);  //we are accessing inside data into outside of the block //ReferenceError: carColor is not defined



