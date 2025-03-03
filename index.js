// Part 1: Refactoring Old Code
// When code is outdated or inefficient,
// it often goes through a process called “refactoring.”
// Refactoring code is the process of restructuring that code without changing its original behavior.
// For the first part of this assignment, revisit your code from ALAB 308.3.1,
// wherein you create a script that parsed CSVs. Now that you have knowledge of arrays and objects,
//  how would you change your approach to this problem? Take a few minutes to examine and refactor the code before continuing.

// For reference, ALAB 308.3.1 is embedded below. The section on CSV parsing is “Part 3.”
// https://www.canva.com/design/DAFxi0NmQZg/view

let string1 =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26".split("\n"); // splitting by new line
let string2 =
  "Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232".split("\n");

// Part 2: Expanding Functionality
// Now that you are familiar with your code, and perhaps have improved it, it is time to expand upon its functionality.
// Begin with the following task:
// Declare a variable that stores the number of columns in each row of data within the CSV.
// Instead of hard-coding four columns per row, expand your code to accept any number of columns. This should be calculated dynamically based on the first row of data.
// For example, if the first row of data (the headings) has eight entries, your program should create eight entries per row. You can safely assume that all rows that follow will contain the same number of entries per row.
// After you have implemented the above:
// Store your results in a two-dimensional array.
// Each row should be its own array, with individual entries for each column.
// Each row should be stored in a parent array, with the heading row located at index 0.
// Cache this two-dimensional array in a variable for later use.
// Using the original CSV example data, here is what the result of this step should look like:
// ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26
// becomes
// [["ID", "Name", "Occupation", "Age"],
//  ["42", "Bruce", "Knight", "41"],
//  ["57", "Bob", "Fry Cook", "19"],
//  ["63", "Blaine", "Quiz Master", "58"],
//  ["98", "Bill", "Doctor’s Assistant", "26"]]
let array1 = []; // the array the first string would go to
let array2 = [];


for (let i = 0; i < string1.length; i++) { //for loop to go through the first string array
    let splitting = string1[i].split(",") // splitting the strings into an array format so they can have their own arrays
  array1.push(splitting); // pushing the new array strings into the new arrays
}

console.log(array1);



for (let i = 0; i < string2.length; i++) { //for loop to go through the first string array
    let splitting = string2[i].split(",") // splitting the strings into an array format so they can have their own arrays
  array2.push(splitting); // pushing the new array strings into the new arrays
}

console.log(array2);
