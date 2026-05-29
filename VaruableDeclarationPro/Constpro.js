const myfavcolor = "Blue"
console.log(myfavcolor);  //blue

//myfavcolor = "Red";  //reassigning the value  //TypeError: Assignment to constant variable.
//console.log(myfavcolor);  

// const myfavcolor = "Green";  //redeclaring the variable  //SyntaxError: Identifier 'myfavcolor' has already been declared
// console.log(myfavcolor);

{
    console.log(myfavcolor); //accessing the variable inside the block  //blue
    const favfood = "Pizza";  //declaring a new variable inside the block
    console.log(favfood); //pizza
}

 console.log(favfood); //accessing the variable outside the block  //ReferenceError: favfood is not defined

