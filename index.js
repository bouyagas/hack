

// change an Array to Object
function changeArrToObj(array){
  var obj = {};
  obj[array[0]] = array[array.length-1];
  return obj;
}
var arr1 = ["Mohamed Gassama", "Programer", "Visioner", "The CEO of Edtronics worth $62 billionaire dollar"];
console.log(arrToObj(arr1));


// -------------------------------------------------------------------------

// get all object keys and transform it to an array
function getAllKeys(obj) {
  var arr = [];
  for(var key in obj) {
    arr.push(key)
  }
  return arr;
}
var obj1 = {
  name : 'Sam',
  age : 25,
  hasPets : true
}
console.log(getAllKeys(obj1));


// get all object values and transform it to an array
function getAllValues(obj) {
  var arr = [];
  for(var value in obj ) {
    arr.push(obj[value]);
  }
  return arr;
}
var obj1 = {
  name : 'Krysten',
  age : 33,
  hasPets : false
}
getAllValues(obj1)

// -------------------------------------------------------------------------


// Change a two dimensional array to an object
function fromListToObject(array) {
  var obj = {};
  for(var i = 0; i < array.length; i++){
    /*
      Or create a variable and assign it to the array element:
       var newArray = array[i]
      obj[newArray[0]] = newArray[1]
    */
    obj[array[i][0]] = array[i][1];
  }
  return obj;
}

arr2 = [['make', 'Ford'], ['model', 'Mustang'], ['year', 1964]];

console.log(fromListToObject(arr2));


// Change an object in a two dimensional array
function convertObjectToList(obj){
  var arr = [];
  for(var key in obj){
   arr.push([key, obj[key]]);
  }
}

var obj1 = {
  name: 'Holly',
  age: 35,
  role: 'producer'
}

convertObjectToList(obj1);


// ---------------------------------------------------------------------------


// Looping Over a two dimensional array transformed it an object
function transformEmployeeData(array) {
 var arr = [];
 for(var i = 0; i < array.length; i ++ ) {
   var obj = {};
   for(var j = 0; j < array[i].length; j++ ) {
     obj[array[i][j][0]] = array[i][j][1]
   }
   arr.push(obj)
 }
  return arr;
}



var arr3 = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
];

transformEmployeeData(arr3)

// --------------------------------------------------------------------------


function convertObjectToList(obj) {
  // your code here
  return Object.keys(obj).map(e => [e, obj[e]])
}
var obj1 = {
  name: 'Holly',
  age: 35,
  role: 'producer'
}

convertObjectToList(obj1);

// -------------------------------------------------------


// Greeting program
var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3,
  },
  'Carrie': {
    visits: 4
  }
};

function greetCustomer(firstName) {
  var greeting = '';

  if (!customerData[firstName]) {
    greeting = 'Welcome! Is this your first time?';
  } else if (customerData[firstName].visits === 1) {
    greeting = "Welcome back, " + firstName + "! We're glad you liked us the first time!";
  } else if (customerData[firstName].visits >= 2) {
    greeting = "Welcome back, " + firstName + "! So glad to see you again!";
  }

  return greeting;
}


greetCustomer("Joe")

//............................................................................

/*Write a function called "isOldEnoughToDrinkAndDrive".

Given a number, in this case an age, "isOldEnoughToDrinkAndDrive" returns whether a person of this given age is old enough to legally drink and drive in the United States.
Notes:
* The legal drinking age in the United States is 21.
* It is always illegal to drink and drive in the United States.
var output = isOldEnoughToDrinkAndDrive(22);
console.log(output); // --> false

Starter Code :
function isOldEnoughToDrinkAndDrive(age) {
  // your code here
}*/

function isOldEnoughToDrinkAndDrive(age) {
  return false;
}

isOldEnoughToDrinkAndDrive(18);

/*nstructions from your teacher:
Write a function called "getFullName".
Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space.
var output = getFullName('Joe', 'Smith');
console.log(output); // --> 'Joe Smith'
Starter Code :
function getFullName(firstName, lastName) {
  // your code here
}*/

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

getFullName("Bernard", "Kitchens");

/*nstructions from your teacher:
Write a function called "getLengthOfWord".

Given a word, "getLengthOfWord" returns the length of the given word.

var output = getLengthOfWord('some');
console.log(output); // --> 4

Starter Code :
function getLengthOfWord(word) {
  // your code here
}*/
/* Write a function called "getProperty".

Given an object and a key, "getProperty" returns the value of the property at the given key.

Notes:
* If there is no property at the given key, it should return undefined.

var obj = {
  key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'
*/
//The two most common ways to access properties in JavaScript are with a dot and with square brackets. Both value.x and value[x] access a property on value—but not necessarily the same property. The difference is in how x is interpreted. When using a dot, the part after the dot must be a valid variable name, and it directly names the property. When using square brackets, the expression between the brackets is evaluated to get the property name. Whereas value.x fetches the property of value named “x”, value[x] tries to evaluate the expression x and uses the result as the property name.

function getProperty(obj, key) {
               return obj[key];
}




function getLengthOfWord(word) {
  return word.length;
}

getLengthOfWord("bernard");

/*Instructions from your teacher:
Write a function called "getLengthOfTwoWords".

Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.

var output = getLengthOfTwoWords('some', 'words');
console.log(output); // --> 9

Starter Code :
function getLengthOfTwoWords(word1, word2) {
  // your code here
}*/

function getLengthOfTwoWords(word1, word2) {
  return word1.length + word2.length;

}

getLengthOfTwoWords("Mike", "Hat");

/*Write a function called "isGreaterThanTen".

Given a number, "isGreaterThanTen" returns whether it is greater than 10.

var output = isGreaterThanTen(11);
console.log(output); // --> true

Starter Code :
function isGreaterThanTen(num) {
  // your code here
}*/

//input a number
//output returns true if number is greater than 10

function isGreaterThanTen(number) {
  if (number > 10) {
    return true;
  } else {
    return false;
  }
}

isGreaterThanTen(10);

/*Instructions from your teacher:
Write a function called "isLessThan30".

Given a number, "isLessThan30" returns whether the given number is less than 30.

var output = isLessThan30(9);
console.log(output); // --> true

Starter Code :
function isLessThan30(num) {
  // your code here
}*/

//input a number
//print true if < 30 else return false

function isLessThan30(num) {
  if (num < 30) {
    return true;
  } else {
    return false;
  }
}

isLessThan30(40);

/*Instructions from your teacher:
Write a function called "isGreaterThan".

Given 2 numbers, "isGreaterThan" returns whether num2 is greater than num1*/

//Input:  two numbers
//Output:  the number that is greater

function isGreaterThan (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
}

isGreaterThan(1,-2);

/*Write a function called "isOdd".

Given a number, "isOdd" returns whether the given number is odd.*/

//input:  a number
//output: a boolean T if number is odd, false if it is even

function isOdd(number) {
  if (number %2 !==0) {
    return true;
  } else {
    return false;
  }
}

isOdd(2);
isOdd(3);

/*nstructions from your teacher:
Write a function called "isSameLength".

Given two words, "isSameLength" returns whether the given words have the same length.*/

//input: two words
//output: true or false if they have the same length

function isSameLength(word1, word2) {
  if (word1.length === word2.length) {
    return true;
  } else {
    return false;
  }
}

isSameLength("cuck", "duck");

/*Instructions from your teacher:
Write a function called "areBothOdd".

Given 2 numbers, "areBothOdd" returns whether or not both of the given numbers are odd.*/

//input: 2 numbers
//output: return true if both are odd and false if either is true

function areBothOdd(num1, num2) {
  if (num1 %2 !== 0 && num2 %2 !==0) {
    return true;
  } else {
    return false;
  }
}

areBothOdd(2,2);

/*Instructions from your teacher:
Write a function called "isEitherEven".

Given two numbers, "isEitherEven" returns whether or not either one of the given numbers is even.*/

//Input: two numbers
//Output: if either number is even return true, else return false

function isEitherEven(num1, num2) {
  if (num1 %2 === 0 || num2 %2 === 0) {
    return true;
  } else {
    return false;
  }
}

isEitherEven(1,3);

/*Instructions from your teacher:
Write a function called "isEvenLength".

Given a word, "isEvenLength" returns whether the length of the word is even.*/

//input:  a word as a string
//output: returns t/f based on whether the length is even or odd

function isEvenLength(word) {
  if (word.length %2 === 0) {
    return true;
  } else {
    return false;
  }
}

isEvenLength("Bernardo");

/*Instructions from your teacher:
Write a function called "average".

Given two numbers, "average" returns their average.*/

//input: 2 numbers
//output: the average of the two numbers

function average(num1, num2) {
  return (num1 + num2)/2;
}

average(1,-4);

/*Instructions from your teacher:
Write a function called "computeAreaOfATriangle".

Given the base and height of a triangle, "computeAreaOfATriangle" returns its area.*/

//input: base and height of triangle
//output: area of the triangle

function computeAreaOfATriangle(base, height) {
  return (base * height) * 0.5;
}

computeAreaOfATriangle(10,5);

/*Instructions from your teacher:
Write a function called "cube".

Given a number, "cube" returns the cube of that number.*/

//Input: a number
//Output: the cube of that number

function cube(num) {
  return Math.pow(num,3);
}

cube(5);

function cube(num) {
  return Math.pow(num, 3); // num here is base, 3 is exponent
}
console.log(cube(3));



/*Instructions from your teacher:
Write a function called "square".

Given a number, "square" should return the square of the given number.
*/

//input: a number
//output: the square of that number

function square(num) {
  return Math.pow(num, 2);
}

square(3);

/*31 Write a function called "isPersonOldEnoughToDrinkAndDrive".

Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrinkAndDrive" returns whether the given person is old enough to legally drink and drive in the United States.

Notes:
* The legal drinking age in the United States is 21.
* The legal driving age in the United States is 16.
* It is always illegal to drink and drive in the United States.*/

//Input:  A person object
//Output:  Returns whether person is old enough to drink and drive

function isPersonOldEnoughToDrinkAndDrive(person) {
  return false;
}

var Bernard = {
  age: 40
};

var Luiz = {
  age: 17
};

isPersonOldEnoughToDrinkAndDrive(Bernard);


/*34 Instructions from your teacher:
Write a function called "isPersonOldEnoughToDrink".

Given a "person" object, that contains an "age" property, "isPersonOldEnoughToDrink" returns whether the given person is old enough to drink.

Notes:
* The legal drinking age in the United States is 21.*/

//Input: a person object
//Output: returns whether person is old enough to drink (drinking age is 21)

function isPersonOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

isPersonOldEnoughToDrink(Luiz);


/*35 Write a function called "addArrayProperty".

Given an object, a key, and an array, "addArrayProperty" sets a new property on the object at the given key, with its value set to the given array.*/

//Input: object, key, and an array
//Output: sets a new property on the object and set the array as the value

function addArrayProperty(obj, key, arr) {
  obj.key = arr;
  return obj;
}

addArrayProperty(Luiz, "birthdate", [9,21,1987]);

/*38 instructions from your teacher:
Write a function called "getLastElement".
Given an array, "getLastElement" returns the last element of the given array.
Notes:
* If the given array has a length of 0, it should return 'undefined'.*/

//Input: an array
//Output: return last element

function getLastElement(arr) {
  if (arr.length === 0) {
    return undefined;
  } else {
    return arr.pop();
    }
}

getLastElement([1,2,3,4,5]);



/*41 Instructions from your teacher:
Write a function called "computeAreaOfARectangle".
Given the length and width of a rectangle, "computeAreaOfARectangle" returns its area.*/

//Input: length and width of rectangle
//Output: area of rectangle

function computeAreaOfARectangle(len, wid) {
  return len * wid;
}

computeAreaOfARectangle(10,50);


/*42 Instructions from your teacher:
Write a function called "computePerimeterOfARectangle".
Given a length and a width describing a rectangle, "computePerimeterOfARectangle" returns its perimter.*/

//Input length and widht of rectangle
//Output:  The perimeter of a rectangle

function computePerimeterOfARectangle(len, wid) {
  return (len * 2) + ( wid * 2);
}

computePerimeterOfARectangle(10,50);


/*44 Instructions from your teacher:
Write a function called "computeTripledAreaOfARectangle".
Given a length and width of a rectangle, "computeTripledAreaOfARectangle" returns the rectangle's area, multiplied by 3.
*/

//Input: length and width
//Output: return area of rectangle * 3

function computeTripledAreaOfARectangle(len, wid) {
  return (len * wid) * 3;
}

computeTripledAreaOfARectangle(10,5);


/*45 Write a function called "computePerimeterOfACircle".
Given the radius of a circle, "computePerimeterOfACircle" returns its perimeter.*/

//Input: a radius of a circle
//Output: perimeter = 2*Pi*r

function computePerimeterOfACircle(radius) {
  return 2 * Math.PI * radius;
}

computePerimeterOfACircle(6);


/*47 Instructions from your teacher:
Write a function called "computePower".
Given a number and an exponent, "computePower" returns the given number, raised to the given exponent*/

//Input: a number and and exponent
//Output:  that number raised to an exponent

function computePower(num, exp) {
  return Math.pow(num, exp);
}

computePower(2,3);


/*48 Instructions from your teacher:
Write a function called "computeSquareRoot".
Given a number, "computeSquareRoot" returns its square root.*/

//Input a number
//Output its square root

function computeSquareRoot(num) {
  return Math.sqrt(num)
}

computeSquareRoot(9);


/*50 Instructions from your teacher:
Write a function called "getLengthOfThreeWords".
Given 3 words, "getLengthOfThreeWords" returns the sum of their lengths.*/

//Input 3 words
//Output the sum of the length of these three words

function getLengthOfThreeWords(word1, word2, word3) {
  return word1.length + word2.length + word3.length;
}

getLengthOfThreeWords('hat', 'bat', 'cat');


/*55 Instructions from your teacher:
Write a function called "getAllElementsButLast".
Given an array, "getAllElementsButLast" returns an array with all the elements but the last.*/

//Input:  An array
//Output: return an array will all elements but the last

function getAllElementsButLast(arr) {
  arr.pop();
  return arr;
}

getAllElementsButLast([1,1,2,3,5,8]);

/*
Write a function called "getAllElementsButFirst".

Given an array, "getAllElementsButFirst" returns an array with all the elements but the first.

var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output); // --> [2, 3, 4]
*/



function getAllElementsButFirst(array) {
 array.shift();
 return array;

}
var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output);

/*56 Instructions from your teacher:
Write a function called "removeFromFront".
Given an array, "removeFromFront" returns the given array with its first element removed.
Notes:
* You should be familiar with the method 'shift'.*/

//Input: an array
//Output:  same array with first element removed

function removeFromFront(arr) {
  arr.shift();
  return arr;
}

removeFromFront([1,1,2,3,4,5]);

/*57 Instructions from your teacher:
Write a function called "removeFromBackOfNew".
Given an array, "removeFromBackOfNew" returns a new array containing all but the last element of the given array.
Notes:
* You should be familiar with the 'slice' method.*/

//Input:  An array
//Output:  A NEW array containing all but the last element

function removeFromBackOfNew(arr) {
 var newArray = arr.slice(0,arr.length-1); //
  return newArray;
}
var arr = [1, 2, 3];
console.log(removeFromBackOfNew(arr)); // [1, 2]
console.log(arr); //[1, 2, 3]

/*
Write a function called "removeFromFrontOfNew".

Given an array, "removeFromFrontOfNew" returns a new array containing all but the first element of the given array.

Notes:
* You should be familiar with the 'slice' method.

var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]
*/

function removeFromFrontOfNew(arr) {
  var newArr = arr.slice(arr[0]);
  return newArr;
}
var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output);
console.log(arr);

/*59 Instructions from your teacher:
Write a function called "countCharacter".
Given a string input and a character, "countCharacter" returns the number of occurences of a given character in the given string.*/

//Input: A string and a character
//Output the number of occurences of the character

function countCharacter(str,chr) {
  var arr = str.split("");  // split an array into substrings
  var charCount = 0;

  for (var i = 0; i < arr.length; i++) { // going through each substrings
    if (arr[i] === chr) {  // since chr/a hits the right position
      charCount++;    // start counting by how many hits before hit "a"
    }
  }
  return charCount;
}

countCharacter("I am the watcher on the wall", "a");//looking for how many "a" in the string

//Can I implement this with forEach?


function characterCounter(str, chr) {
  var array = str.split("");
  var charCounter = 0;

  array.forEach(function(value) {
    if (value === chr) {
      charCounter++;
    }
  })
  return charCounter;

}

characterCounter("This is it it's over nit wit", "i");


/*Write a function called "getAllLetters".

Given a word, "getAllLetters" returns an array containing every character in the word.

Notes:
* If given an empty string, it should return an empty array.

var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
*/
function getAllLetters(str) {
  var arr = str.split("");
  return arr;
}
console.log(getAllLetters("Radagast"));
// --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']



//Write a function called "addFullNameProperty".

/*Given an object that has a "firstName" property and a "lastName" property, "addFullNameProperty" returns a "fullName" property whose value is a string with the first name and last name separated by a space.

var person = {
  firstName: 'Jade',
  lastName: 'Smith'
};


addFullNameProperty(person);
console.log(person.fullName); // --> 'Jade Smith'

*/

function addFullNameProperty(obj) {
    obj.fullName = obj.firstName + " " + obj.lastName;
    return obj.fullName;
}
var person = {
  firstName: "Jade",
  lastName: "Smith"
}
addFullNameProperty(person);
console.log(person.fullName);

// Write a function called "addToFront".

/*
Given an array and an element, "addToFront" adds the given element to the front of the given array, and returns the given array.

Notes:
* It should be the SAME array, not a new array.

var output = addToFront([1, 2], 3);
console.log(output); // -> [3, 1, 2]
*/

function addToFront(arr, element) {
  arr.unshift(element);
  return arr;
}
var output = addToFront([1, 2], 3);
console.log(output);

/*Write a function called "joinArrays".

Given two arrays, "joinArrays" returns an array with the elements of "arr1" in order, followed by the elementsin "arr2".

var output = joinArrays([1, 2], [3, 4]);
console.log(output); // --> [1, 2, 3, 4]

You should be familiar with the "concat" method for this problem.
*/
// concat method is used to glue arrays together.

function joinArrays(arr1, arr2) {
  return arr1.concat(arr2);
}
console.log(joinArrays([1, 2], [3, 4]));
/*
Write a function called "getAllWords".

Given a sentence, "getAllWords" returns an array containing every word in the sentence.

Notes:
* If given an empty string, it should return an empty array.

var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
*/
function getAllWords(str) {
  var arr = str.split(" ");
  return arr;
}
var output = getAllWords('Radagast the Brown');
console.log(output);


/*Write a function called "removeFromBack".

Given an array, "removeFromBack" returns the given array with its last element removed.

Notes:
* You should be familiar with the method 'pop'.

var output = removeFromBack([1, 2, 3]);
console.log(output); // --> [1, 2]
*/
function removeFromBack(arr) {
  arr.pop();
  return arr;
}
var output = removeFromBack([1, 2, 3]);
console.log(output);

/*the 2nd object to the 1st object.

Notes:
* Add any keys that are not in the 1st object.
* If the 1st object already has a given key, ignore it (do not overwrite the property value).
* Do not modify the 2nd object at all.

var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};

extend(obj1, obj2);

console.log(obj1); // --> {a: 1, b: 2, c: 3}
console.log(obj2); // --> {b: 4, c: 3}*/

function extend(obj1, obj2) {
 var obj = Object.assign(obj1, obj2);
  return obj;
}

var obj1 = {
  a: 1,
  b: 2
};
var obj2 = {
  b: 4,
  c: 3
};

extend(obj1, obj2);

console.log(obj1);
console.log(obj2);

/*Write a function called "removeNumbersLargerThan".

Given a number and an object, "removeNumbersLargerThan" removes any properties whose values are numbers greater than the given number.

var obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLargerThan(5, obj);
console.log(obj); // --> { b: 2, c: 'montana' }

Starter Code :
function removeNumbersLargerThan(num, obj) {
  // your code here
}
*/

function removeNumbersLargerThan(num, obj) {
  for (var property in obj) {  // for...in loop like for (variable in obj)
    if (obj[property] > num) { //checking prop if bigger than num as 5
      delete obj[property]; // delete this prop
    }
  }
}
var obj = {
  a: 8,
  b: 2,
  c: "montana"
}
removeNumbersLargerThan(5, obj);
console.log(obj);

/*Write a function called "removeEvenValues".
Given any object, "removeEvenValues" removes any properties whose values are even numbers.
Do this in place and return the original object, do not construct a cloned object that omits the properties.

var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj); // --> { b: 3 }
*/

function removeEvenValues(obj) {
  for (var prop in obj) {
    if (obj[prop] % 2 === 0) {
      delete obj[prop];
    }
  }
}
var obj = {
  a: 2,
  b: 3,
  c: 4
};
removeEvenValues(obj);
console.log(obj);

/*Write a function called "getIndexOf".

Given a character and a string, "getIndexOf" returns the first position of the given character in the given string.

Notes:
* Strings are zero indexed, meaning the first character in a string is at position 0.
* When a string contains more than one occurrence of a character, it should return the index of its first occurrence.
* If the character does not exist in the string, it should return -1.
* Do not use the native indexOf function in your implementation.

var output = getIndexOf('a', 'I am a hacker');
console.log(output); // --> 2
*/

function getIndexOf(char, str) {
  for (var i = 0; i < str.length; i++) {
    var letter = str.charAt(i);
    if (char === letter) {
      return i;
    }
  }
  return - 1;
}

var output = getIndexOf('a', 'I am a hacker');
console.log(output);

/*
function getElementsThatEqual10AtProperty(obj, key) {
  var arr = [];
  for (var prop in obj) {
    for (var i = 0; i < obj[prop].length; i++) {
      if (obj[prop][i] === 10) {
        arr.push(obj[prop][i]);
      }
    }
  }
  return arr;
}
var obj = {
  key: [1000, 10, 50, 10] //[10, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output);
*/
function getElementsThatEqual10AtProperty(obj, key) {
  var arr = [];
  for (var prop in obj) {
    for (var i = 0; i < obj[prop].length; i++) {
      if (obj[prop][i] === 10) {
        arr.push(obj[prop][i]);
      }
    }
  }
  return arr;
}
var obj = {
  key: [1000, 10, 50, 10] //[10, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output);


//.............................................................


// function getElementsLessThan100AtProperty(obj, key) {
  // your code here
  var arr = [];
  for (var i in obj.key){
    if(obj.key[i] <= 100){
      arr.push(obj.key[i]);
    }
  }
  return arr;
}



var obj = {
  key: [1000, 20, 50, 500]
};

var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output);squareElements and Diana's question'

function isGreaterThan10(number) {
  return number > 1;
}


[1, 2, 3, 4].every(isGreaterThan10);


var john = [1, 2, 5];

var result = john.reduce(add);

function add(acc, element) {
  return acc + element;
}

console.log(result);


var salesTeam = [{name: {first: 'aleen', last: 'atkins'}, age: 26, sales: '$2314'},
   {name: {first: 'alvaro', last: 'angelos'}, age: 55, sales: '$1668'},
   {name: {first: 'denese', last: 'dossett'}, age: 29, sales: '$9248'},
   {name: {first: 'douglas', last: 'denney'}, age: 53, sales: '$5058'},
   {name: {first: 'earline', last: 'erickson'}, age: 19, sales: '$18876'},
   {name: {first: 'herman', last: 'hazell'}, age: 25, sales: '$2746'},
   {name: {first: 'homer', last: 'hirth'}, age: 26, sales: '$474'},
   {name: {first: 'hwa', last: 'heidt'}, age: 53, sales: '$9607'},
   {name: {first: 'hyon', last: 'hampshire'}, age: 46, sales: '$13598'},
   {name: {first: 'issac', last: 'ingerson'}, age: 45, sales: '$5225'},
   {name: {first: 'jeraldine', last: 'joplin'}, age: 39, sales: '$2891'},
   {name: {first: 'jin', last: 'jeffrey'}, age: 17, sales: '$14402'},
   {name: {first: 'joleen', last: 'jolin'}, age: 45, sales: '$15736'},
   {name: {first: 'jude', last: 'jarrett'}, age: 53, sales: '$7557'},
   {name: {first: 'magda', last: 'mireles'}, age: 18, sales: '$1498'},
   {name: {first: 'mistie', last: 'montealegre'}, age: 31, sales: '$6920'},
   {name: {first: 'nancy', last: 'napoli'}, age: 49, sales: '$5255'},
   {name: {first: 'regine', last: 'rohrbaugh'}, age: 33, sales: '$7881'},
   {name: {first: 'rolando', last: 'riebel'}, age: 35, sales: '$8573'},
   {name: {first: 'scarlett', last: 'stagg'}, age: 36, sales: '$7126'},
   {name: {first: 'sherron', last: 'strawn'}, age: 36, sales: '$8848'},
   {name: {first: 'susan', last: 'shilling'}, age: 29, sales: '$8542'},
   {name: {first: 'tama', last: 'tworek'}, age: 16, sales: '$9200'},
   {name: {first: 'tonisha', last: 'taunton'}, age: 41, sales: '$5219'},
   {name: {first: 'vergie', last: 'villescas'}, age: 25, sales: '$8712'}];


function capitalize(salesTeam) {
  // your code here
  salesTeam.forEach(function(teamMember) {
    teamMember.name.first = capitalizeName(teamMember.name.first);
    teamMember.name.last = capitalizeName(teamMember.name.last);
  })
  return salesTeam;
}

function capitalizeName(name) {
  var result = '';
  name.split('').forEach(function(letter, index) {
    if (index === 0) {
      return result += letter.toUpperCase();
    } else {
      return result += letter;
    }
  })
  return result;
}




// function assert(expectedBehavior, descriptionOfCorrectBehavior) {
//   if (!expectedBehavior) {
//     console.log(descriptionOfCorrectBehavior);
//   } else {
//     console.log('test passed');
//   }
// }

//Edit the below invocation of the below assert function to use JSON.stringify() where necessary to test your capitalize function.

capitalize(salesTeam);
// assert(JSON.stringify(salesTeam[2].name) === JSON.stringify({first: 'Denese', last: 'Dossett'}), 'should capitalize the first letter of the first and last names');





// var averageTeamSales = function (salesTeam) {
//   //loop through each 'sales' and return sum
//   var totalSales = salesTeam.reduce(function(acc, memberSales){
//     return acc + makeNumber(memberSales.sales);
//   }, 0);
//   //divide by length of sales team to get the proper answer
//   var numberOfTeamMembers = salesTeam.length
//   //round up final average
//   return Math.ceil(totalSales / numberOfTeamMembers);
// };

// function makeNumber(dollarAmount) {
//   var dollarNumber = dollarAmount.slice(1);
//   dollarNumber = parseInt(dollarNumber, 10);
//   return dollarNumber;
// }



// function assert(expectedBehavior, descriptionOfCorrectBehavior) {
//   if (!expectedBehavior) {
//     console.log(descriptionOfCorrectBehavior);
//   } else {
//     console.log('test passed');
//   }
// }

//Edit the below invocation of the below assert function to use JSON.stringify() where necessary to test your capitalize function.


//assert(averageTeamSales(salesTeam) === 7487, 'should return the average team sales');



var highestEarner = function (companies) {
  var highestSalesMember;
  var highestSalesNumber;
  var highestSalesString;

  //loop through all team memberSales and grab the sales of each
    //convert sales to number
  companies.forEach(function(teamMember) {
    var dollarSales = makeNumber(teamMember.sales);
    var fullName = teamMember.name.first + ' ' + teamMember.name.last;
    if (highestSalesMember === undefined || dollarSales > highestSalesNumber) {
      highestSalesMember = fullName;
      highestSalesNumber = dollarSales;
      highestSalesString = teamMember.sales;
    }
  })

  return highestSalesMember + ': ' + highestSalesString;
};



function makeNumber(dollarAmount) {
  var dollarNumber = dollarAmount.slice(1);
  dollarNumber = parseInt(dollarNumber, 10);
  return dollarNumber;
}


function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}

assertEqual(highestEarner(salesTeam), 'Earline Erickson: $18876', 'it should return the highest earner\'s name and sales');





function filter(collection, predicate) {
  // Your code below. You must use reduce in your solution.
  // return reduce(collection, function(acc, element) {
  //   if (predicate(element)) {
  //     return acc.concat(element);
  //   } else {
  //     return acc;
  //   }
  // },[])

  var result = [];

  each(collection, function(element) {
    if (predicate(element)) {
      result.push(element);
    }
  })
  return result;
}



// DO NOT ADJUST BELOW FUNCTIONS
function reduce(collection, accumulator, initialValue) {
  each(collection, function(val) {
    if (initialValue !== undefined) {
      initialValue = accumulator(initialValue, val);
    } else {
      initialValue = val;
    }
  })
  return initialValue;
}

function each (collection, callback) {
  if (Array.isArray(collection)) {
    for (let i = 0; i < collection.length; i++) {
      callback(collection[i], i, collection);
    }
  } else {
    for (let key in collection) {
      callback(collection[key], key, collection);
    }
  }
}
//And here is a sample implementation:

var arr = [1, 2, 3, 4];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
}

function isEven(val) {
  return val % 2 === 0;
}

function isOdd(val) {
  return !isEven(val);
}

var output1 = filter(arr, isEven);
console.log(output1); // --> [2, 4];

var output2 = filter(obj, isOdd);
console.log(output2); // --> [1, 3];


  getAllElementsButNth    filter
  getElementsThatEqual10AtProperty    filter
  select    forEach
  getElementsLessThan100AtProperty    filter
  getElementsGreaterThan10AtProperty    filter
  removeElement    filter
  keep    filter
  getOddLengthWordsAtProperty    filter
  computeAverageOfNumbers    reduce
  getAverageOfElementsAtProperty    reduce
  getEvenLengthWordsAtProperty    filter
  filterOddLengthWords    filter
  ******getSquaredElementsAtProperty******    filter
  getOddElementsAtProperty    filter
  getEvenElementsAtProperty    filter
  filterEvenLengthWords    filter
  getLengthOfLongestElement    reduce
  getSmallestElementAtProperty    reduce
  getLargestElementAtProperty    reduce
  squareElements    map
  filterOddElements    filter
  computeProductOfAllElements    reduce
  filterEvenElements    filter
  getLengthOfShortestElement    reduce
  getLongestElement    reduce
  findSmallestElement    reduce
  findShortestElement    reduce
  getLargestElement    reduce
  computeSumOfAllElements    reduce
  getProductOfAllElementsAtProperty    reduce
  sumDigits    reduce
  getSumOfAllElementsAtProperty    reduce
  ******findShortestWordAmongMixedElements******    ******filter****** / reduce
  findSmallestnumberAmongMixedElements    filter / reduce
  getLongestWordOfMixedElements    filter / reduce
  getLargestNumberAmongMixedElements    filter / reduce
  getLongestOfThreeWords    reduce
  findShortestOfThreeWords    reduce



var john = [1, 2, 3]

console.log(john.filter(function(element){
  return element > 1;
}));


function getSquaredElementsAtProperty(obj, key) {
  return obj.key.filter(function(element) {
    return element;
  });
}

var obj = {
  key: [2, 1, 5]
};
var output = getSquaredElementsAtProperty(obj, 'key');
console.log(output); // --> [4, 1, 25]


function getAllElementsButNth(array, n) {
  return array.filter(function(element, index) {
    if (index !== n) {
      return element;
    }
  });
}

var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']

function getElementsThatEqual10AtProperty(obj, key) {
  // your code here
  return obj.key.filter(function(element, index) {
    if (element === 10) {
      return index;
    }
  });
}


var obj = {
  key: [1000, 10, 50, 10]
};
var output = getElementsThatEqual10AtProperty(obj, 'key');
console.log(output); // --> [10, 10]

//-----------------------------------------------
function getElementsLessThan100AtProperty(obj, key) {
  // your code here
  var arr = [];
  for (var i in obj.key){
    if(obj.key[i] <= 100){
      arr.push(obj.key[i]);
    }
  }
  return arr;
}



var obj = {
  key: [1000, 20, 50, 500]
};

var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output);
//-------------------------------------------------function getElementsLessThan100AtProperty(obj, key) {
  // your code here
  var arr = [];
  for (var i in obj.key){
    if(obj.key[i] <= 100){
      arr.push(obj.key[i]);
    }
  }
  return arr;
}



var obj = {
  key: [1000, 20, 50, 500]
};

var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output);

//Starter Code:
function select(arr, obj) {
  // your code here
  var result = {};

  arr.forEach(function(element) {
    if(obj[element] !== undefined) {
      result[element] = obj[element];
    }
  });
  return result;
}

var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }


//Starter Code :
function getElementsLessThan100AtProperty(obj, key) {
  // your code here
  return obj.key.filter(function(element) {
    return element < 100;
  });
}


var obj = {
  key: [1000, 20, 50, 500]
};
var output = getElementsLessThan100AtProperty(obj, 'key');
console.log(output); // --> [20, 50]




var obj = {
  key: [1, 20, 30]
};
var output = getElementsGreaterThan10AtProperty(obj, 'key');
console.log(output); // --> [20, 30]

//Starter Code :
function getElementsGreaterThan10AtProperty(obj, key) {
  // your code here
  return obj.key.filter(function(element) {
    return element > 10;
  });
}



var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]


//Starter Code :
function removeElement(array, discarder) {
  // your code here
  return array.filter(function(element) {
    return element !== discarder;
  });
}



var output = keep([1, 2, 3, 2, 1], 2)
console.log(output); //--> [2, 2]

//Starter Code :
function keep(array, keeper) {
  // your code here
  return array.filter(function(element) {
    return element === keeper;
  });
}


var obj = {
  key: ['It', 'has', 'some', 'words']
};

var output = getOddLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['has', 'words']

//Starter Code :
function getOddLengthWordsAtProperty(obj, key) {
  if (obj.hasOwnProperty(key) && Array.isArray(obj.key)){
    return obj.key.filter(function(element) {
      return element.length % 2 === 1;
    });
  }
}



var input = [];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3

//Starter Code :
function computeAverageOfNumbers(nums) {
  var sum = nums.reduce(function(acc, element) {
    return acc + element;
  }, 0);
  return sum / (nums.length || 1);
}



var obj = {
  key: [1, 2, 3]
};
var output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2

//Starter Code :
function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  var startingNumber = 0;

  if (obj.hasOwnProperty(key) && Array.isArray(obj.key)) {
    var sum = obj.key.reduce(function(acc, element) {
      return acc + element;
    }, 0);

    return sum / (obj.key.length || 1);
  } else {
    return startingNumber;
  }
}



var obj = {
  key: ['a', 'long', 'game']
};
var output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']

//Starter Code :
function getEvenLengthWordsAtProperty(obj, key) {
  // your code here
  var start = [];
    if (obj.hasOwnProperty(key) && Array.isArray(obj.key)) {
      return obj.key.filter(function(element) {
        return element.length % 2 === 0;
      });
    } else {
      return start;
    }
}


var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']

//Starter Code :
function filterOddLengthWords(words) {
  // your code here
  return words.filter(function(element) {
    return element.length % 2 === 1;
  });
}



var obj = {
  key: [1, 2, 3, 4, 5]
};
var output = getOddElementsAtProperty(obj, 'key');
console.log(output); // --> [1, 3, 5]

//Starter Code :
function getOddElementsAtProperty(obj, key) {
  // your code here
  var start = [];
  if (obj.hasOwnProperty(key) && Array.isArray(obj.key)) {
    return obj.key.filter(function(element) {
      return element % 2 === 1;
    });
  } else {
    return start;
  }

}




var obj = {
  key: [1000, 11, 50, 17]
};
var output = getEvenElementsAtProperty(obj, 'key');
console.log(output); // --> [1000, 50]

//Starter Code :
function getEvenElementsAtProperty(obj, key) {
  // your code here
  var start = [];

  if (obj.hasOwnProperty(key) && Array.isArray(obj.key)) {
    return obj.key.filter(function(element) {
      return element % 2 === 0;
    });
  } else {
    return start;
  }
}





var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']

//Starter Code :
function filterEvenLengthWords(words) {
  // your code here
  return words.filter(function(element) {
    return element.length % 2 === 0;
  });
}




var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5

//Starter Code :
function getLengthOfLongestElement(arr) {
  // your code here
  return arr.reduce(function(acc, element) {
    if (element.length > acc) {
      acc = element.length;
    }
    return acc;
  }, 0);
}




var obj = {
  key: [2, 1, 5]
};
var output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1

//Starter Code :
function getSmallestElementAtProperty(obj, key) {
  // your code here
  var start;
  if (obj.hasOwnProperty(key) && Array.isArray(obj.key)) {
    return obj.key.reduce(function(acc, element) {
      if (acc === undefined || element < acc) {
        acc = element;
      }
      return acc;
    }, start);
  } else {
    return start;
  }
}



var obj = {
  key: [1, 2, 4]
};
var output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4

//Starter Code :
function getLargestElementAtProperty(obj, key) {
  // your code here
  var start;

  if (obj.hasOwnProperty(key) && Array.isArray(obj.key)) {
    return obj.key.reduce(function(acc, element) {
      if (acc === undefined || element > acc) {
        acc = element;
      }
      return acc;
    }, undefined);
  } else {
    return start;
  }
}




var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]

//Starter Code :
function squareElements(arr) {
  // your code here
  return arr.map(function(element) {
    return element * element;
  });
}



var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]

//Starter Code :
function filterOddElements(arr) {
  // your code here
  return arr.filter(function(element) {
    return element % 2 === 1;
  });
}



var output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60

//Starter Code :
function computeProductOfAllElements(arr) {
  // your code here
  return arr.reduce(function(acc, element) {
    return element * (acc || 1);
  }, 0);
}


var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]

//Starter Code :
function filterEvenElements(arr) {
  // your code here
  return arr.filter(function(element) {
    return element % 2 === 0;
  });
}


var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3

//Starter Code :
function getLengthOfShortestElement(arr) {
  // your code here
  return arr.reduce(function(acc, element) {
    if(acc === 0 || element.length < acc) {
      acc = element.length;
    }
    return acc;
  }, 0);
}




var output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'

//Starter Code :
function getLongestElement(arr) {
  // your code here
  return arr.reduce(function(acc, element) {
    if (acc === '' || element.length > acc.length) {
      acc = element;
    }
    return acc;
  }, '');
}



var output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1

//Starter Code :
function findSmallestElement(arr) {
  // your code here
  return arr.reduce(function(acc, element) {
    if (acc === 0 || element < acc) {
      acc = element;
    }
    return acc;
  }, 0);
}


var output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'

//Starter Code :
function findShortestElement(arr) {
  // your code here
  return arr.reduce(function(acc, element) {
    if (acc === '' || element.length < acc.length) {
      acc = element;
    }
    return acc;
  }, '');
}



var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;

//Starter Code :
function getLargestElement(arr) {
  // your code here
  return arr.reduce(function(acc, element) {
    if (acc === 0 || element < acc) {
      acc = element;
    }
    return acc;
  }, 0);
}



function computeSumOfAllElements(arr) {
  // your code here
  return arr.reduce(function(acc, element) {
    return acc + element;
  }, 0);
}

var bob = computeSumOfAllElements([1, 2, 3]);

console.log(bob);




var obj = {
  key: [1, 2, 3, 4]
};
var output = getProductOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 24

//Starter Code :
function getProductOfAllElementsAtProperty(obj, key) {
  // your code here
  var start = 0;

  if (obj.hasOwnProperty(key) && Array.isArray(obj.key)) {
    return obj.key.reduce(function(acc, element) {
      return element * (acc || 1);
    }, start);
  } else {
    return start;
  }
}



function sumDigits(num) {
  // your code here
  var negativeNum = num < 0;
  var numStr = num.toString().split('');

  return numStr.reduce(function(acc, element, index) {
    if (negativeNum && index === 0) {
      return acc;
    } else if (negativeNum && index === 1) {
      return parseInt(element, 10) * -1;
    } else {
      return acc + parseInt(element);
    }
  }, 0);
}


var output = sumDigits(-316);
console.log(output); // --> 4



var obj = {
  key: [1, 2, 3]
};
var output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13

//Starter Code :
function getSumOfAllElementsAtProperty(obj, key) {
  // your code here
  var start = 0;
  if (obj.hasOwnProperty(key) && Array.isArray(obj.key)) {
    return obj.key.reduce(function(acc, element) {
      return acc + element;
    }, start);
  } else {
    return start;
  }
}



var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'

//Starter Code :
function findShortestWordAmongMixedElements(arr) {
  // your code here

  return arr.reduce(function(acc, element) {
    if (typeof element === 'string' && (acc === '' || element.length < acc.length)) {
      acc = element;
    }
    return acc;
  }, '');
}




var output = findSmallestNumberAmongMixedElements(['5']);
console.log(output); // --> 4

//Starter Code :
function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  return arr.reduce(function(acc, element) {
    if (typeof element === 'number' && (acc === 0 || element < acc)) {
      acc = element;
    }
    return acc;
  }, 0);
}


var output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4


//Starter Code :
function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  return arr.filter(function(element) {
    return typeof element === 'number';
  }).reduce(function(acc, element) {
    if (acc === 0 || element < acc) {
      acc = element;
    }
    return acc;
  }, 0);
}




var output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 'word'

//Starter Code :
function getLongestWordOfMixedElements(arr) {
  // your code here
  return arr.filter(function(element) {
    return typeof element === 'string';
  }).reduce(function(acc, element) {
    if (acc === '' || element.length > acc.length) {
      acc = element;
    }
    return acc;
  }, '');
}



var output = getLargestNumberAmongMixedElements([-3, 'word', -5, 'up', -3, -1]);
console.log(output); // --> 5

//Starter Code :
function getLargestNumberAmongMixedElements(arr) {
  // your code here
  return arr.filter(function(element) {
    return typeof element === 'number';
  }).reduce(function(acc, element) {
    if (acc === 0 || element > acc) {
      acc = element;
    }
    return acc;
  }, 0);
}


var output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'

//Starter Code :
function getLongestOfThreeWords(word1, word2, word3) {
  // your code here
  var allKeys = Array.prototype.slice.call(arguments);
  return allKeys.reduce(function(acc, element) {
    if (acc === '' || element.length > acc.length) {
      acc = element;
    }
    return acc;
  }, '');
}



var output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'

//Starter Code :
function findShortestOfThreeWords(word1, word2, word3) {
  // your code here
  var elements = Array.prototype.slice.call(arguments);
  return elements.reduce(function(acc, element) {
    if (acc === '' || element.length < acc.length) {
      acc = element;
    }
    return acc;
  }, '');
}


var john = 'johno';

john = john.replace(john.charAt(0), john.charAt(0).toUpperCase());
console.log(john);

var bob = 'bob';

bob = bob.slice(0, 1).toUpperCase() + bob.slice(1);
console.log(bob)



var sentence = 'this is a sentence';
var words = sentence.split(' ');
console.log(words.map(function(word) {
  return capitalizeWord(word);
}).join(' '));

function capitalizeWord(word) {
  return word.slice(0, 1).toUpperCase() + word.slice(1);
}

console.log(capitalizeWord('john'))



var john = [1, 2, 3];
var final = [];

var bob = {
  one: 1,
  two: 2,
  three: 3
};

john.forEach(function(element) {
  final.push(element * 2);
})

console.log(final);



function myEach(collection, iterator) {
  if (Array.isArray(collection)) {
    for (var i = 0; i < collection.length; i++) {
      iterator(collection[i]);
    }
  } else if (typeof collection === "object") {
    var values = Object.values(collection);
    for (var i = 0; i < values.length; i++) {
      iterator(values[i]);
    }
  }
}


myEach(bob, function(element) {
  final.push(element * 2);
})

console.log(final);

function myReduce(collection, iterator, accumulator) {
  var isMissingAccumulator = accumulator === undefined;
  myEach(collection, function(element) {
    if (isMissingAccumulator) {
      accumulator = element;
      isMissingAccumulator = false;
    }
    accumulator = iterator(accumulator, element);
  });
  return accumulator;
}

var final = myReduce(john, function(acc, element) {
  return acc + element;
}, 0);

console.log(final);


function filter(collection, predicate) {
  return myReduce(collection, function(acc, element) {
    if (predicate(element)) {
      acc = acc.concat(element);
    }
    return acc;
  }, []);
}



var john = [4, 5, 6];
var final = filter(john, function(element) {
  return element > 4;
})

console.log(final);



function verifiedIfIndexIncludeAnArray(arr, target){
  //  if(arr.includes(target)){
  //    return true;
  // }else {
  //   return false;
  // }

  for(var i = 0; i < arr.length; i++){
    if(arr[i] === target){
      return true;
    }
  }
  return false;
}

var titles = ['The habbit', 'Game of Throme', 'The Last King']
console.log(arrTitle(titles, 'he'));



function getLastElementOfProperty(obj, key) {
  // your code here
    if (obj.hasOwnProperty(key) && Array.isArray(obj.key)) {
      return obj.key.filter((element, index) => {
        return index === 2;
      });
    }
}

var obj = {
  key: [1, 2, 5]
};
var output = getLastElementOfProperty(obj, 'key');
console.log(output);



var gar = [1, 2, 3, 4];

const higherOrderFunction1 = (array) => {
  let  power = (base, exp) => {
    if (exp === 0) {
      return 1;
    }
    return base * power(base, exp - 1);
  };

   let each = (array, func) => {
    for (let i = 0; i < array.length; i++) {
      func(array[i]);
    }
  };

   let sumSquares = (sumArray) => {
    let sum = 0;
    each(sumArray, (element) => {
      sum += power(element, 2);
    });
    return sum;
  };
 return sumSquares(array);
};

higherOrderFunction1(gar);
