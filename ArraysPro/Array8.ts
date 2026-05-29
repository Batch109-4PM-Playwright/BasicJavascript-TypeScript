


let DOBData = //object  ---> for in
{
    "Place" : "Vizag",
    "Date" : 22,
    "Month" : "Sep",
    "Year" : 2012,
    "Gender" : "Male",
    "Status" : "Working",
    "HumanBeing" : true
}

let animals : string[] = ["Lion", "Cow", "Cat", "Dog", "Elephant", "Tiger", "Fox"];   //array --> for of
//console.log(animals);


for(let O in DOBData)
{
    console.log(O +" Values ----> " +DOBData[O]);
}

console.log("------------------------------------------------------")
for(let A of animals)   //used to print iterative data
{
    console.log(A);
}






