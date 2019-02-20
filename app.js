//Solve these problems (again) in a Javascript file on VSCode.
//Additional Instruction:
//We need to develop the habit of putting all our global variables and arrays in objects instead of just stand alone, don’t worry about doing the same for functions just yet. So for these solutions there should never be any variables or arrays just on their own - everything should be in an object.
//"1. arrange these array items in alphabetical order and log myArray to the console"
//let myArray = ["Elishka", "Dan", "Ashley", "Connor", "Ben"]

let myObject1 = {
    myArray: ["Elishka", "Dan", "Ashley", "Connor", "Ben"]
};

function orderMe(arr) {
    let ordedArray = arr.sort();
    console.log(ordedArray);
}

orderMe(myObject1.myArray);


//"2. Declare a variable as a string, and then split that string into an array of letters (check out string methods). Store the result in a new variable and log it to the console"

let myObject2 = {
    name: "Dan", 
  };
  
  console.log(myObject2.name.split(''));


//"3. Take the word 'codenation' and rearrange the letters in the word so they are in alphabetical order. Store the result in a new variable and log it to the console"
let myObject3 = {
    name: "codenation", 
  };
  
  console.log(myObject3.name.split('').sort());



//"4. Change 'Benjamin' into 'Ben'"
//start by storing the string 'Benjamin' in a variable (Remember to look up array methods)

let myObject4 = {
    name: "Benjamin", 
  };
  
  console.log(myObject4.name.slice(0, 3));

//"5. write a function that adds a fruit onto the end of an array"
//Use this array inside your function (just copy and paste it into your function body) let array1 = ["apple", "pear", "banana"]

module.exports = {
    orderMe
}