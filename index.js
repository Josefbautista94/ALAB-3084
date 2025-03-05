// Part 1: Refactoring Old Code

let string1 =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26".split(
    "\n"
  ); // splitting by new line

// Part 2: Expanding Functionality

let array1 = []; // the array the first string would go to


for (let i = 0; i < string1.length; i++) {
 //for loop to go through the first string array
  let splitting = string1[i].split(","); // splitting the strings into an array format so they can have their own arrays
  array1.push(splitting); // pushing the new array strings into the new arrays
}

console.log(array1);

// Part 3: Transforming Data


let firstRow = [];
let peopleArray = [];

for (let i of array1[0]) { // Using a for of loop to make each letter on the first row array lowecase
  firstRow.push(i.toLowerCase());
}

console.log(firstRow);


for (let i = 1; i < array1.length; i++) {// starting at 1 cause it only makes sense since we seperated the first row
  let object = {}; // The object that I would be putting my first row and ppl into
  for (let j = 0; j < firstRow.length; j++) {
    object[firstRow[j]] = array1[i][j]; // assigning my key, values here my firstRow[j] are going to be the keys
    // and array1[i][j] are going to be the values,  object[firstRow[j]] = array1[i][j]; are going to assign the values perfectly.
    //first [i] index is going to be the rows
    //second [j] index is going to be the columns 
  }
  peopleArray.push(object);
}

console.log(peopleArray);

// Part 4: Sorting and Manipulating Data

peopleArray.pop() // removing last item in the array
peopleArray.splice(1 , 0,{ id: "48", name: "Barry", occupation: "Runner", age: "25" }) //placing this obj in index 1(first argument) and 0 on the second argument cus im not removing anything
peopleArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" }) // pushing item to the last index of the array

let averageAge = 0; 

for( let i of peopleArray){
  averageAge += (Number(i.age)) // adding the sum of ages
}

console.log(`This is the Average : ${averageAge/ peopleArray.length}`); // dividing by the number of people

// Part 5: Full Circle
// As a final task, transform the final set of data back into CSV format.
// There are a number of ways to do this; be creative!
// Once complete, be sure to submit your work according to the 
//submission instructions at the beginning of this document.

//sets of data to be worked on
//peopleArray
//dataArr

//what i want to do is
// take the keys out and put it in its own array
// put it in the begginging of the array once we convert the values into array as well
// make the array of objects back into string format

let header1 = Object.keys(peopleArray[0]); // Extracts all keys (column headers) from the first object in peopleArray.(Just learned this today)


//Putting the first letter in every string in the array capital since thats how it was at first.
let finalHeader1 = [];
for(let i = 0; i < header1.length; i++){
let caps = header1[i][0].toUpperCase() + header1[i].slice(1); // [i] is the current index we are and [0] would be the first character of the string we are in
finalHeader1.push(caps);
}
console.log(finalHeader1)


let arr1 = []

for (let i = 1; i < peopleArray.length; i++){
  arr1.push(Object.values(peopleArray[i])); // pushing all the values into a seperate array
}

arr1 = arr1.flat(); // flattening nested array? not too sure if I did this right.

let finalArr = finalHeader1.concat(arr1); // combing both arrays

for(let i = 4 ; i < finalArr.length; i +=5 ){ // here we start at index 4 to add the \n but we increment by 5 bcus of the extra \n that we are adding every 4 indexes
  finalArr.splice(i, 0, "\n") // splicing it every i we land on
}

let csvString1 = finalArr.join(","); // joing this to create a string

//New Csv
console.log(csvString1);
//Old csv
console.log(string1)