

function calculate() : number  
{
	  let a : number = 91;
    let b : number = 83;
    let t: string = "TIGER"
    console.log("The Sum of A and B is : " +(a+b));   
    return a-b;
    //return b;  //Unreachable code detected
}

let c : number = 11;

console.log("The Difference of A and B is " +calculate());
console.log("The Calculation between A, B and C is : " +(calculate() + c))


