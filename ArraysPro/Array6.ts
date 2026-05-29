let animals1 : string[] = ["Lion", "Cow", "Cat", "Dog", "Elephant", "Tiger", "Fox"];
let animals2 : string[] = ["Lion", "Cow", "Cat", "Dog", "Elephant", "Tiger", "Fox"];

animals1.splice(1, 3);  //starting index to count of elements to be deleted
console.log(animals1);

animals2.splice(4);   //delete from 4th index

console.log(animals2);




