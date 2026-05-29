var myfavcolor = "Blue"

console.log(myfavcolor);  //blue

myfavcolor = "Red";   //reassigning the value

console.log(myfavcolor);  //red

var myfavcolor = "Green";  //redeclaring the variable

console.log(myfavcolor);  //green

{
    console.log(myfavcolor); //accessing the variable inside the block  //green
    var favfood = "Pizza";  //declaring a new variable inside the block
    console.log(favfood); //pizza
}
 
console.log(favfood); //accessing the variable outside the block  //pizza

