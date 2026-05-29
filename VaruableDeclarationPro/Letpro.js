let myfavcolor = "Blue"
console.log(myfavcolor);  //blue

myfavcolor = "Red";   //reassigning the value
console.log(myfavcolor);  //red

//let myfavcolor = "Green";   //redeclaring the variable
//console.log(myfavcolor);  //SyntaxError: Identifier 'myfavcolor' has already been declared

{
    console.log(myfavcolor); //accessing the variable inside the block  //red
     let favfood = "Pizza";  //declaring a new variable inside the block
    console.log(favfood); //pizza
}

//console.log(favfood);   //console.log(favfood); //ReferenceError: favfood is not defined




