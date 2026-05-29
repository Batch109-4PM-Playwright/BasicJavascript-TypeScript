
let mymobiledata =    //mymodiledata is an object which has properties and values
{
name : "Moto",
color : "blue",
cost : 35000,
ram : "8GB",
internalspace : "128GB",
andriod : 12,
isStillWork : true,
areSelling : false,
shopDetails :   {     //object inside of another object   --> subobject
                  shopLocation : "Karimnagar",
                  shopName : "Sangeetha",
                  shopPinCode : 510099
                 }
}

console.log(mymobiledata);

console.log(mymobiledata.cost);

console.log(mymobiledata.shopDetails);

console.log(mymobiledata.shopDetails.shopName);