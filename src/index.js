// variables

// 1. Declare 3 variables with the name of a, b and c. a has type of string, b has type of number, and c has type of number
// a and b can not be re-assigned, c can be re-assigned
// the variable value can be of your choice
const a = 'Anjana Devi'
const b = 2
let c = 3

// 2. Write an if statement that has the following logic:
// if the length of a is larger than 5, print "a has more than 5 characters" to console, else print "a has less than 5 characters"
if(a.length>5){
  console.log("a has more than 5 characters")
}else{
  console.log("a has less than 5 characters")
}
// if b is larger than 0 and smaller than 5, print "ping", else print "pong"
if(b>0 && b<5){
  console.log("ping")
}else{
  console.log("pong")
}
// if c is larger than b, print "c is larger than b", else print "c is smaller than b"
if(c>b){
  console.log("c is larger than b")
}
else{
  console.log("c is smaller than b")
}

// functions

// 1. Write a function that will take 2 numbers as inputs, then return the sum of the 2 numbers.
function add(num1,num2){
  let result = num1+num2;
  return result;
}

let addresult = add(1,2);
console.log(addResult)

// 2. Create a similar function as the above, but return the multiple of the 2 numbers.
function multiply(num1,num2) {
  let result = num1*num2;
  return result;
}

let mulResult = multiply(1,2);
console.log(mulResult)

// 3. Write a function that accepts a number as input, if the number is odd, return a string 'odd', if this number is even, return a string 'even'.
function oddOrEven(givenNum) {
  if(!(givenNum%2)){
    return `Given no. is even and i.e.${givenNum}`
  }else{
    return `Given no. is odd and i.e. ${givenNum}`
  } 
}
let result = oddOrEven(6);
console.log(result)

// 5. Fix this function. We want to see 2 in the console instead of undefined
function hoisting() {
  let y = 2
  console.log(y)  
}
hoisting()

// 6. Write a count function that runs from 1 to 100 using for loop
// if the current count is odd, print "odd", else print "even"
function count() {
  for(let num = 1; num<=100; num++){
    if(num%2===0){
      console.log('even');
    }
    else{
      console.log('odd');
    }

  }
}

count();

// 7. Write a function that accepts a string as an input, and return a new string with the first character uppercased
// Ex: capitalized("abc") will return "Abc"
function capitalized(someString) {
  let newString = someString.charAt(0).toUpperCase()+someString.slice(1,someString.length)
  return newString
}

capitalized('anjana');

// 8. Write a function accepts a number as input and then return the number reversed
// Ex: reverse(1234) will return 4321
function reverse(aNumber) {
  let newNumber = aNumber.toString().split("");
  let reverseNum = newNumber.reverse().join("");
  return Number(reverseNum);
}
reverse(4567);

// 9. Write a function accepts a string as input and checks if that string is a palindrome. A palindrome is word, phrase, or sequence that reads the same backward as forward, Ex: madam
// if the string is a palindrome, return true, else return false
function isPalindrome(someString) {
  let splitString = someString.split("");
  let revString = splitString.reverse().join("");
  
  if(someString===revString){
    return true;
  }else{
    return false;
  }
}
console.log(isPalindrome('anju'));

// 10. Write a JavaScript function that accepts two numbers and print the larger
// Ex: printLarger(1,2) will console log 2 in the console
function printLarger(num1,num2) {
  if(num1>num2){
    return num1
  }
  else{
    return num2
  }
}
console.log(printLarger(1,2))

// 11. Write a JavaScript function to extract a specified number of characters from a string
// Ex: extract("abcd", 2) will return "ab"
// Ex: extract("abcd", 3) will return "abc"
let extractString=[];
function extract(someString,num){
  for(let i=0;i<num;i++){
    extractString.push(someString[i]);
  }
  return extractString.join("");
}
console.log(extract('abcd',2));
// 10. Transform all of the above into arrow functions below here

// 1. Write a function that will take 2 numbers as inputs, then return the sum of the 2 numbers.
const addition = (num1,num2) => num1+num2;
console.log(add(1,2));

// 2. Create a similar function as the above, but return the multiple of the 2 numbers.
const multiplication = (num1,num2) => num1*num2;
console.log(multiplication(1,2));

// 3. Write a function that accepts a number as input, if the number is odd, return a string 'odd', if this number is even, return a string 'even'.
const oddOrEven = (givenNum) => {
  if(!(givenNum%2)){
    return `Given no. is even and i.e.${givenNum}`
  }else{
    return `Given no. is odd and i.e. ${givenNum}`
  } 
}
console.log(oddOrEven(6));

// 5. Fix this function. We want to see 2 in the console instead of undefined
hoisting = () => {
  let y = 2
  console.log(y)  
}
hoisting()

// 6. Write a count function that runs from 1 to 100 using for loop
// if the current count is odd, print "odd", else print "even"
const count = () => {
  for(let num = 1; num<=100; num++){
    if(num%2===0){
      console.log('even');
    }
    else{
      console.log('odd');
    }

  }
}

count()

// 7. Write a function that accepts a string as an input, and return a new string with the first character uppercased
// Ex: capitalized("abc") will return "Abc"
const capitalized = (someString) => {
  let newString = someString.charAt(0).toUpperCase()+someString.slice(1,someString.length)
  return newString
}

capitalized('anjana');

// 8. Write a function accepts a number as input and then return the number reversed
// Ex: reverse(1234) will return 4321
const reverse = (aNumber) => {
  let newNumber = aNumber.toString().split("");
  let reverseNum = newNumber.reverse().join("");
  return Number(reverseNum);
}
reverse(4567);

// 9. Write a function accepts a string as input and checks if that string is a palindrome. A palindrome is word, phrase, or sequence that reads the same backward as forward, Ex: madam
// if the string is a palindrome, return true, else return false
const isPalindrome = (someString) => {
  let splitString = someString.toLowerCase().split("");
  splitString = splitString.join(" ")
  let revString = splitString.reverse().join("");
  console.log(revString)
  console.log(someString.toLowerCase())
  if(someString.toLowerCase()===revString){
    return true;
  }else{
    return false;
  }
}
console.log(isPalindrome("Mr Owl ate my metal worm"));
/////////////////////////////////////////////////////////
const isPalindrome = (someString) => {
  someString = someString.replace(/ /g, "")
  let splitString = someString.toLowerCase().split("");
  let revString = splitString.reverse().join("");
  if(someString.toLowerCase()===revString){
    return true;
  }else{
    return false;
  }
}
console.log(isPalindrome("Mr Owl ate my metal worm"));

// 10. Write a JavaScript function that accepts two numbers and print the larger
// Ex: printLarger(1,2) will console log 2 in the console
const printLarger = (num1,num2) =>{
  if(num1>num2){
    return num1
  }
  else{
    return num2
  }
}
console.log(printLarger(1,2))

// 11. Write a JavaScript function to extract a specified number of characters from a string
// Ex: extract("abcd", 2) will return "ab"
// Ex: extract("abcd", 3) will return "abc"

//oneway with slice
const extract = (someString,extractNumCount) => someString.slice(0,extractNumCount)
extract("abcd", 3)

//another way with substring
const extract1 = (someString,extractNumCount) => someString.substring(0,extractNumCount)
extract1("abcdef", 4)

//another way
// let extractString=[];
// const extract = (someString,num) => {
//   for(let i=0;i<num;i++){
//     extractString.push(someString[i]);
//   }
//   return extractString.join("");
// }
// console.log(extract('abcd',2));



