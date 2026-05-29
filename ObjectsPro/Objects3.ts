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
console.log("-----------------------------------------------------------------")

//getting only keys
console.log(Object.keys(employeeInfo))

console.log("-----------------------------------------------------------------")


//getting only values
console.log(Object.values(employeeInfo))

console.log("---------------------------------------------------------")

//getting both key and values
console.log(Object.entries(employeeInfo))