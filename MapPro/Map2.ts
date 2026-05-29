const P = console.log;

let S = new Map();

S.set(true , "Hello");
S.set(462352 , "Orange");
S.set(false , 573);
S.set(46231 , "yes");
S.set("Parrot" , 63523);
S.set(34124 , "yes");
S.set("Wheel" , "Cart");
S.set(34634 , 632523);
S.set("Wheel" , "Running");

P(S.get("Parrot"));

S.delete(false);

P(S);

S.clear();

P(S);







