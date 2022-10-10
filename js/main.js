// import playGuitar from "./guitars.js";
// import { shredding as shred, plucking as fingerpicking } from "./guitars.js";
// console.log(playGuitar());
// console.log(shred());
// console.log(fingerpicking());



import * as Guitars from "./guitars.js"
import User from "./user.js";

const me = new User("sajed@email.com", "Sajed");
console.log(me);
console.log(me.greetings());

console.log(Guitars.default());
console.log(Guitars.shredding());
console.log(Guitars.plucking());