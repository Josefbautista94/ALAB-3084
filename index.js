// Part 1: Refactoring Old Code

let string1 =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26".split(
    "\n"
  ); // splitting by new line
let string2 =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232".split(
    "\n"
  );

// Part 2: Expanding Functionality

let array1 = []; // the array the first string would go to
let array2 = [];

for (let i = 0; i < string1.length; i++) {
  //for loop to go through the first string array
  let splitting = string1[i].split(","); // splitting the strings into an array format so they can have their own arrays
  array1.push(splitting); // pushing the new array strings into the new arrays
}
console.log(array1);

for (let i = 0; i < string2.length; i++) {
  //for loop to go through the first string array
  let splitting = string2[i].split(","); // splitting the strings into an array format so they can have their own arrays
  array2.push(splitting); // pushing the new array strings into the new arrays
}

console.log(array2);

// Part 3: Transforming Data


let firstRow = [];

for (let i of array1[0]) {
  console.log(i.toLowerCase());
  firstRow.push(i.toLowerCase());
}

console.log(firstRow);
