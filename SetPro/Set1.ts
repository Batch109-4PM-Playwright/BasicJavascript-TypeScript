

let K = new Set();

K.add(1234);
K.add(true);
K.add("Yes");
K.add(null);
K.add(346235)
K.add(56512);
K.add("Tea");
K.add("Hello");
K.add(false);
K.add(true);
K.add("bus");

console.log(K);

console.log(K.has("Tea"));

K.delete("Tea");
console.log("-------------------------------------------------------")

console.log(K.has("Tea"));



