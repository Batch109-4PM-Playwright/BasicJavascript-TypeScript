

function fixedDepositScheme(age : number , status : string = "Eligible for 10% ROI")  : void  //status --> default parameters
{
    if(age > 60)
    {
        console.log("As candidate is a Senior Citizen and Fixed deposit rate is " +status)
    }
    else
    {
        console.log("Fixed deposit rate is 9%");
    }
}


fixedDepositScheme(59);

fixedDepositScheme(92);

