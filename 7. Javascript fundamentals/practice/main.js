console.log("hello from me.js");

//variables

let age = 25;
console.log(age);

const salary = 8000; //const value cant be chamged after once initialized
console.log(salary);

// data types

let result;
console.log(result); //undefined since not initialized

const res = undefined;

const data = null;

const person = {
  firstname: "zile",
  lastname: "huma",
  age: 30,
};

console.log(person.firstname);

const addNUmbers = [1, 3, 5, 7, 9];
console.log(addNUmbers[3]);

//operators

// === checks for the value and the data type

//-----TYPE CONVERSION -----
//implisite conversion

console.log(2 + "3");
console.log("4" - "2");
console.log("amna" - "hira");
console.log("4" - "false");
console.log("4" - null);
console.log(5 + NaN);

//explicite conversion

console.log(parseFloat("1.876"));
console.log((1690).toString());
console.log(Boolean(788));

// Equality --- ==(allows coersion) ---- === (doesnot allow coersion)
