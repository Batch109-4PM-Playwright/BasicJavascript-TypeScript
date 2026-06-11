
let x: number = 18;
let y : number = 56;

try
{
    let a  = new Array(5);
} 
catch(myerroris)
{
    console.log("Array Len has to be proper");
}

finally
{
    console.log("The Difference of X and Y is : " +(x-y));
}

console.log("The Sum of X and Y is : " +(x+y));