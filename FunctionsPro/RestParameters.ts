

function sumOfStdMarks(...marks : number[]) : number    //... --> accepting "n" number of values in an array format
{

     let totalSum : number = 0;
     for(let sumIs of marks)
     {
       // console.log(sumIs);
        totalSum += sumIs;   //56  , 56+72,   56+72+91, 56+72+91+11 ,  56+72+91+11+32, 56+72+91+11+32+67
        
     }

     //console.log("The Sum of STudent Marks : " +totalSum);
     return totalSum;

}

console.log(sumOfStdMarks(56, 72, 91, 11, 32, 67));

