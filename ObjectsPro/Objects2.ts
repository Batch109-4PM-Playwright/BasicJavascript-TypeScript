interface empdata      //it is an rough data
{
    empid : number,
    empname : string,
    empage : number,
    isLive : boolean,
    empaddres : 
    {
        estreet : string,
        earea : string,
        elocation : string
    }
}
 
let employeeInfo : empdata =  {    //converts into a proper data  
empid : 220140,
empname : "Mukunda",
empage : 32,
isLive : true,
empaddres : {
    estreet : "Road No :1",
    earea : "Madhapur",
    elocation : "Hyderabad"
            }
}
console.log(employeeInfo);

//delete the data (subobject)
delete employeeInfo.empaddres;

console.log(employeeInfo);

//check the data exist or not
console.log("empaddres" in employeeInfo);
//check the data exist or not
console.log("isLive" in employeeInfo);


