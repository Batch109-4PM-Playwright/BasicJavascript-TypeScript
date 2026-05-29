
var carno = 45;

console.log(carno);

carno = "TS09TE1234";   //re-assignment

console.log(carno);

var carno = "WHITE";   //re-declaration

console.log(carno);

{
    var climate = "HOT";
    console.log(carno);  //we are accessing outside var data into block
    console.log(climate); //we are accessing inside data into block
}

  console.log(climate);  //we are accesssing inside block data into outside block

