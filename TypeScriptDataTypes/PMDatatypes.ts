

let weight : number = 67.56; 
let city : string = "Hyderdabad";
let isMarried : boolean = false;
let sleep : null = null;
let address : undefined;

let myLocal : symbol  = Symbol("MyLocCode");

let localAddress = {
    street : "Road No :1",
    [myLocal] : "7-56-HG/23"
}

console.log(weight);
console.log(city);
console.log(isMarried);
console.log(sleep);
console.log(address);

console.log(localAddress);

