
let x: number = 18;
let y : number = 56;

try
{
    let a  = new Array(-1);
} 
catch(myerroris)
{
    console.log("The Array length should not be less than zero and should not be decimals");
}

console.log("The Sum of X and Y is : " +(x+y));