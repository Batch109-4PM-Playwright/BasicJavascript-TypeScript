

function myTransaction(name : string ,  aadharcard? : number)  : void //here aadharcard is optional parameters
{
    if(aadharcard == undefined)
    {
        console.log("Transaction are not related to bank")
    }

    else
    {
        console.log("Transaction are related to bank")
    }
}

myTransaction("Vidya");

myTransaction("Mahith", 123456);