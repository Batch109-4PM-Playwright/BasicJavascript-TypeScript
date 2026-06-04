

let a : number = 81;
let b : number = 27;
let c : number = 51;

if(a > b)  //if1
{
    console.log("Dog Barks")   //1 --> if1
    if(b < c)   //if2
    {
        console.log("Cow says MOO MOO")   //2  --> if2
        if(a < c)  //if3
        {
            console.log("Fish Swims")   //--> if3
        }
        console.log("Lion Roars")   //3   --> if2
    }
    console.log("Snake Bites")   //4  --> if1
}