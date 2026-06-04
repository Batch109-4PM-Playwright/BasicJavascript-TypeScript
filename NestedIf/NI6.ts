

let a : number = 81;
let b : number = 27;
let c : number = 51;

if(a > b)  //if1
{
    console.log("Dog Barks")   //--> if1
    if(b < c)   //if2
    {
        console.log("Cow says MOO MOO")   //  --> if2
        if(a < c)  //if3
        {
            console.log("Fish Swims")   //--> if3
        }
        else  //if3
        {
            console.log("Deer runs more faster than Tiger")
        }
        console.log("Lion Roars")   //   --> if2
    }
    console.log("Snake Bites")   //  --> if1
}