"use strict";
let message = ("I found a bigger dinner table for today.");
console.log(message);
// Guest Name in Array
let guest = [
    "Hammad",
    "Mashood",
    "Momi",
    "Kounain"
];
// Adding New Name in the Beginning of Array
let newguest = "Wajid";
guest.unshift(newguest);
// Adding New Name in the Middle  of Array
let newguestinmiddle = (guest.splice(2, 0, "Ahmed"));
guest.forEach((guest) => {
    console.log(`Dear ${guest}, I will like to invite you to dinner party on Saturday Night`);
});
