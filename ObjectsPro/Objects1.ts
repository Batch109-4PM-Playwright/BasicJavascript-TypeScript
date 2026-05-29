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

//get the employee area from subobject
console.log(employeeInfo.empaddres.earea);

//adding emp designation
employeeInfo.designation = "QA Manager";
console.log(employeeInfo);

//updating emp name
employeeInfo.empname = "Mukunda Kumar";
console.log(employeeInfo);
