//EJERCICIOS DE FREECODE ALGORITMOS Y ESTRUCTURAS
/*
1) /40)Add the numbers 5 through 0 (inclusive) in order to myArray using a while loop.
const myArr = [];
let i = 0

while (i <=5) {
  myArr.push(i);
  i++;
}
console.log(myArr)

//2) Convert the given number into a roman numeral
const convertir = (num) =>{ 

  let  conversion = {
      M:1000,
      CM:900,
      D:500,
      CD:400,
      C:100,
      XC:90,
      L:50,
      XL:40,
      X:10,
      IX:9,
      V:5,
      IV:4,
      I:1
  };

  let romano = '';
  for(i in conversion){ 
      while(num >= conversion[i]){ 
          romano += i;
          num -= conversion[i]; 
      } 
  } 
  return romano; 

}

/*
3) Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on. */


const cifrado = (mensaje) =>{
    return mensaje.replace(/[a-zA-Z]/gi,function(s){
        return String.fromCharCode(s.charCodeAt(0)+(s.toLowerCase()<'n'?13:-13));
    });
}

//4)Change the 0 so that product will equal 80
const product = 8 * 10;

//5)Modify the data stored at index 0 of myArray to a value of 45.
const myArray = [18, 64, 99];
myArray[0] = 45;

// 6) Using bracket notation select an element from myArray such that myData is equal to 8
/* const myArray = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11, 12], 13, 14],
]; */

const myData = myArray[2][1];

//7)Push ["dog", 3] onto the end of the myArray variable
//const myArray = [["John", 23], ["cat", 2]];
myArray.push(["dog",3])

//8)Use the .pop() function to remove the last item from myArray and assign the popped off value to a new variable, removedFromMyArray.
//const myArray = [["John", 23], ["cat", 2]];
const removedFromMyArray = myArray.pop();

//9)Use the .shift() function to remove the first item from myArray and assign the "shifted off" value to a new variable, removedFromMyArray
//const myArray = [["John", 23], ["dog", 3]];
//const removedFromMyArray = myArray.shift()

//10)Add ["Paul", 35] to the beginning of the myArray variable using unshift()
/* const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
myArray.unshift(["Paul", 35]); */

/* 11) Create a shopping list in the variable myList. The list should be a multi-dimensional array containing several sub-arrays.
The first element in each sub-array should contain a string with the name of the item. The second element should be a number representing the quantity i.e */

const myList = [["Chocolate",10],["Azucar",4],["Leche",11],["Lavandina",4],["Agua",2]];

/* 12) Create a function called reusableFunction which prints the string Hi World to the dev console.
Call the function. */

const reusableFunction = () =>{
  console.log("hi world")
}

reusableFunction()

/* 13)Using let or const, declare a global variable named myGlobal outside of any function. Initialize it with a value of 10.

Inside function fun1, assign 5 to oopsGlobal without using the var, let or const keywords. */
const myGlobal = 10 

function fun1() {
 oopsGlobal = 5
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

/* 
14)The editor has two console.logs to help you see what is happening. Check the console as you code to see how it changes. Declare a local variable myVar inside myLocalScope and run the tests. */
function myLocalScope() {
  // Only change code below this line
  let myVar = 5

  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
//console.log('outside myLocalScope', myVar);

//15) Add a local variable to myOutfit function to override the value of outerWear with the string sweater
// Setup
const outerWear = "T-Shirt";

function myOutfit() {
  const outerWear = "sweater"
  return outerWear;
}

myOutfit();

//16) Call the processArg function with an argument of 7 and assign its return value to the variable processed
let processed = 2;

function processArg(num) {
  return (num + 3) / 5;
}

processed = processArg(7)

/* 17) Write a function nextInLine which takes an array (arr) and a number (item) as arguments.

Add the number to the end of the array, then remove the first element of the array.

The nextInLine function should then return the element that was removed. */
function nextInLine(arr, item) {
  // Only change code below this line
  let num = arr.push(item)
  num = arr.shift()
  
  return num;
  // Only change code above this line
}

// Setup
let testArr = [1, 2, 3, 4, 5];

// Display code
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//18)Modify the welcomeToBooleans function so that it returns true instead of false when the run button is clicked.
function welcomeToBooleans() {
  return true; 
}

//19)Create an if statement inside the function to return Yes, that was true if the parameter wasThatTrue is true and return No, that was false otherwise
const trueOrFalse = (wasThatTrue) => {
  return wasThatTrue ? "Yes, that was true" : "No, that was false"
  }

//20)Add the equality operator to the indicated line so that the function will return the string Equal when val is equivalent to 12.
const testEqual= (num)=> {
  return num == 12 ? "Equal" : "Not equal"
}
console.log(testEqual(12));

//21)Use the strict equality operator in the if statement so the function will return the string Equal when val is strictly equal to 7.
function testStrict(val) {
  return val === 7 ? "Equal" : "Not Equal"
}

testStrict(10);
/* 22)The compareEquality function in the editor compares two values using the equality operator. Modify the function so that it returns the string Equal only when the values are strictly equal. */
function compareEquality(a, b) {
  if (a === b) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

compareEquality(10, "10");

/* 23)Add the inequality operator != in the if statement so that the function will return the string Not Equal when val is not equivalent to 99. */

function testNotEqual(val) {
  if (val != 99) { 
    return "Not Equal";
  }
  return "Equal";
}

testNotEqual(10);

/* 24)Add the strict inequality operator to the if statement so the function will return the string Not Equal when val is not strictly equal to 17 */
function testStrictNotEqual(val) {
  if (val !== 17) {
    return "Not Equal";
  }
  return "Equal";
}

testStrictNotEqual(10);

//25) Add the greater than operator to the indicated lines so that the return statements make sense.
function testGreaterThan(val) {
  if (val > 100) {  
    return "Over 100";
  }
   if (val > 10 ) { 
    return "Over 10";
  }
 return "10 or Under";
}

testGreaterThan(10);

//26)Add the greater than or equal to operator to the indicated lines so that the return statements make sense.


function testGreaterOrEqual(val) {
  if (val >= 20) {  
    return "20 or Over";
  }

  if (val >=10) {  
    return "10 or Over";
  }

  return "Less than 10";
}

testGreaterOrEqual(10);

//27)Add the less than operator to the indicated lines so that the return statements make sense.
function testLessThan(val) {
  if (val < 25) { 
    return "Under 25";
  }

  if (val < 55) { e
    return "Under 55";
  }

  return "55 or Over";
}

testLessThan(10);

//28)Add the less than or equal to operator to the indicated lines so that the return statements make sense.
function testLessOrEqual(val) {
  if (val <= 12) {  
    return "Smaller Than or Equal to 12";
  }

  if (val <= 24) {  
    return "Smaller Than or Equal to 24";
  }

  return "More Than 24";
}

testLessOrEqual(10);

//29)Replace the two if statements with one statement, using the && operator, which will return the string Yes if val is less than or equal to 50 and greater than or equal to 25. Otherwise, will return the string No.
function testLogicalAnd(val) {
   if (val <=50 && val >=25) {
      return "Yes";
  }
  return "No";
}

testLogicalAnd(10);

//30)Combine the two if statements into one statement which returns the string Outside if val is not between 10 and 20, inclusive. Otherwise, return the string Inside.
function testLogicalOr(val) {
  if (val <10 || val >20) {
    return "Outside";
  }
  return "Inside";
}

testLogicalOr(15);

//31)Combine the if statements into a single if/else statement
function testElse(val) {
  if (val > 5) {
    result = "Bigger than 5";
  }
  else {
    result = "5 or Smaller";
  }
  return result;
}

testElse(4);

//32)Convert the logic to use else if statements.
function testElseIf(val) {
  if (val > 10) {
    return "Greater than 10";
  } else if (val < 5) {
    return "Smaller than 5";
  }else{
     return "Between 5 and 10";
  }
}

testElseIf(7);

//33)Change the order of logic in the function so that it will return the correct statements in all cases.
function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

orderMyLogic(7);

//34)Write chained if/else if statements to fulfill the following conditions.
function testSize(num) {
  if(num >= 20){
    return "Huge"
  }else if (num >= 15){
    return "Large"
  }else if (num >= 10){
    return "Medium"
  }else if (num >= 5){
    return "Small"
  }else{
    return "Tiny"
  }
}

testSize(7);

//35) Return the correct string according to this table which lists the strokes in order of priority; top (highest) to bottom (lowest)
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if(strokes === 1){
    return names[0]
  }else if (strokes <= par - 2){
    return names[1]
  }else if (strokes <= par - 1){
    return names[2]
  }else if (strokes == par){
    return names[3]
  }else if (strokes <= par + 1){
    return names[4]
  }else if (strokes <= par + 2){
    return names[5]
  }else{
    return names[6]
  }
}

golfScore(5, 4);

//36)Delete the tails property from myDog. You may use either dot or bracket notation
const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"],
  "bark": "woof"
};

delete myDog.tails;

//37 Add a bark property to myDog and set it to a dog sound, such as "woof". You may use either dot or bracket notation.
/* const myDog = {
  "name": "Happy Coder",
  "legs": 4,
  "tails": 1,
  "friends": ["freeCodeCamp Campers"]
};

myDog.bark="woof" */

//38)Create a function called functionWithArgs that accepts two arguments and outputs their sum to the dev console.
const functionWithArg =(num1, num2)=> {
  return num1 + num2;
}
console.log(functionWithArg(2,3))

//39)Change the 0 so that product will equal 80
/* const product = 8 * 10; */


//40)Add the numbers 5 through 0 (inclusive) in descending order to myArray using a while loop.
const myArr = [];
let i = 0

while (i <=5) {
  myArr.unshift(i);
  i++;
}
console.log(myArr)
