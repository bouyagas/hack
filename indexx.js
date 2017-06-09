/* 119 Instructions from your teacher:
Write a function called "findShortestElement".
Given an array, "findShortestElement" returns the shortest string within the given array.
Notes:
* If there are ties, it should return the first element to appear.
* If the given array is empty, it should return an empty string.*/

//Inputs:  An array
//Outputs:  shortest string in the array
//If tied return 1st, If array is empty, return an emptyString

function findShortestElement(arr) {
  var shortestElement = arr[0];
  
  if (arr.length === 0) {
    return "[]";
  } else {
    arr.forEach(function(value) {
      if (value.length < shortestElement.length) {
        shortestElement = value;
      }
    });
  }
  return shortestElement;
}

findShortestElement([]);


/* 91 Instructions from your teacher:
Write a function called "countAllCharacters".
Given a string, "countAllCharacters" returns an object where each key is a character in the given string. The value of each key should be how many times each character appeared in the given string.
Notes:
* If given an empty string, countAllCharacters should return an empty object.*/

//Inputs:  a string
//Output: an object that returns the number of times the character appears
//empty string = empty object

function countAllCharacters(str) {
  var arr = str.split("");                        //changes string to array for our loop
  var sort = arr.sort();                          //sorts array so characters will be together
  var charCount = 1;                              //set character count to 1
  var newObj = {};
  
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i+1]) {                    //if the letter matches the next letter counter is increased  
      charCount++;
    } else {
      newObj[arr[i]] = charCount;                 //once the next letter is different, then we assign the character and its count to our object
      charCount = 1;                              //resets counter for next letter
      }
  }
  return newObj;
}

countAllCharacters("king joffrey first of his name");


/* 125 Instructions from your teacher:
Write a function called "getProductOfAllElementsAtProperty".
Given an object and a key, "getProductOfAllElementsAtProperty" returns the product of all the elements in the array located at the given key. 
Notes:
* If the array is empty, it should return 0.
* If the property at the given key is not an array, it should return 0.
* If there is no property at the given key, it should return 0.*/

//Inputs: obj, key
//Outputs: return the produce all the elements in array at the key

function getProductOfAllElementsAtProperty(obj, key) {
  var product = 1;
  if (obj[key] === undefined || Array.isArray(obj[key]) === false || obj[key].length === 0) {              //does undefined get checked first?
    return 0;
  } else {
    obj[key].forEach(function(value) {
      product*= value;
    
    });
  }
  return product;
}

var myObj = {
  ages: [1,2,3,4,5,6,7,8,9,10],
  age: []
};

getProductOfAllElementsAtProperty(myObj, "aged");


/* 122 Instructions from your teacher:
Write a function called "calculateBillTotal".
Given the pre tax and pre tip amount of a meal, "calculateBillTotal" returns the total amount due after tax and tip.
Notes:
* Assume that sales tax is 9.5% and tip is 15%.
* Do NOT tip on the sales tax, only on the pre tip amount.*/

//Input:  total dinner bill,
//Output: total due after tax and tip

function calculateBillTotal(totalBill) {
  var totalTax = totalBill * 0.095;
  var totalTip = totalBill * 0.15;
  
  return totalBill + totalTax + totalTip;
}

calculateBillTotal(100);


/* 60 Instructions from your teacher:
Write a function called "removeFromFrontOfNew".
Given an array, "removeFromFrontOfNew" returns a new array containing all but the first element of the given array.
Notes:
* You should be familiar with the 'slice' method.*/

//Inputs:  an array
//Output: a new array containing all but the first element

function removeFromFrontOfNew(arr) {
  var slicedArray = arr.slice(1);
  return slicedArray;
}

var myArray = [1,1,2,3,4,5];

removeFromFrontOfNew(myArray);


/* 83 Instructions from your teacher:
Write a function called "getAllElementsButNth".
Given an array and an index, "getAllElementsButNth" returns an array with all the elements but the nth.*/

//Input: an array, and an index
//Output: an array that returns all elements but at the given index

function getAllElementsButNth(arr, index) {
  var containerArray = [];
  
  arr.forEach(function(element, i) {
    if (i !== index ) {
      containerArray.push(element);
    }
  });
  return containerArray;
}

getAllElementsButNth([1,2,3,4,5], 2);


/* 145 Instructions from your teacher:
Write a function called "computeSumBetween".
Given 2 integers, "computeSumBetween" returns the sum between the two given integers, beginning at num1, and excluding num2.
Notes:
* The sum between 1 and 4 is 1 + 2 + 3 = 6.
* If num2 is not greater than num1, it should return 0.*/

//Input:  2 integers
//Output:  The sum between the two integers

function computeSumBetween(num1, num2) {
  var sum = 0;
  if (num2 < num1) {
    return 0;
  } else {
    for (var i = 0; i < num2-1; i++) {
      sum+= num1;
      num1++;
    }
  }
  return sum;
}

computeSumBetween(1,5);


/* 78 Instructions from your teacher:
Write a function called "removeStringValues".
Given an object, "removeStringValues" removes any properties on the given object whose values are strings.
*/

//Input:  An object
//Output:  Remove properties that have string values

function removeStringValues(obj) {
  for (var key in obj) {
    if (typeof obj[key] === "string") {
      delete obj[key];
    }
  }
  return obj;
}

myObject = {
  name: "Bernard",
  age: 40
};

removeStringValues(myObject);


/* 100 Instructions from your teacher:
Write a function called "getAverageOfElementsAtProperty".
Given an object and a key, "getAverageOfElementsAtProperty" returns the average of all the elements in the array located at the given key. 
Notes:
* If the array at the given key is empty, it should return 0.
* If the property at the given key is not an array, it should return 0.
* If there is no property at the given key, it should return 0.*/

//Inputs:  Object, key
//Outputs: the avarage of all elements at given key

function getAverageOfElementsAtProperty(obj, key) {
  var total = 0;
  if (obj[key] === undefined || Array.isArray(obj[key]) === false || obj[key].length === 0) {
    return 0;
  } else {
    obj[key].forEach(function(element) {
      total += element;
    });
  }
  return total/obj[key].length;
}

var myPeeps = {
  names: "Bernard",
  ages: [29,34,36,39,40],
  nums: []
};

getAverageOfElementsAtProperty(myPeeps, "ages");


/* 65 Instructions from your teacher:
Write a function called "removeFromBack".
Given an array, "removeFromBack" returns the given array with its last element removed.
Notes:
* You should be familiar with the method 'pop'.*/

//Input:  An array
//Output: return given array with last element removed

function removeFromBack(arr) {
  arr.pop();
  return arr;
}

removeFromBack([1,2,3,4,5,6,9]);


/*144 Instructions from your teacher:
Write a function called "multiplyBetween".
Given 2 integers, "multiplyBetween" returns the product between the two given integers, beginning at num1, and excluding num2.
Notes:
* The product between 1 and 4 is 1 * 2 * 3 = 6.
* If num2 is not greater than num1, it should return 0*/

//Input:  2 integers
//Output: product between the numbers

function multiplyBetween(num1, num2) {
  var product = 1;
  if (num2 < num1) {
    return 0;
  } else {
    for (var i = 0; i < num2-1; i++) {
      product*= num1;
      num1++;
    }
  }
  return product;
}

multiplyBetween(1,5);


/* 92 Instructions from your teacher:
Write a function called "getElementsGreaterThan10AtProperty".
Given an object and a key, "getElementsGreaterThan10AtProperty" returns an array containing the elements within the array, located at the given key, that are greater than 10.
Notes:
* If the array is empty, it should return an empty array.
* If the array contains no elements greater than 10, it should return an empty array.
* If the property at the given key is not an array, it should return an empty array.
* If there is no property at the key, it should return an empty array. */

//Input:  Obj,key
//Output: an array containing elements greater than 10

function getElementsGreaterThan10AtProperty(obj, key) {
  var elementsGreaterThanTen = [];
  if (obj[key] === undefined || Array.isArray(obj[key]) === false || obj[key].length === 0) {
    return 0;
  } else {
    obj[key].forEach(function(element){
      if (element > 10) {
        elementsGreaterThanTen.push(element);
      }
    });
  }
  return elementsGreaterThanTen;
}

var numberObject = {
  nums: [1,4,8,12,29,2,-3],
  empty: [],
  notArray: "this"
};

getElementsGreaterThan10AtProperty(numberObject, "nums");


/* 89 Instructions from your teacher:
Write a function called "select".
Given an array and an object, "select" returns a new object whose properties are those in the given object AND whose keys are present in the given array. 
Notes:
* If keys are present in the given array, but are not in the given object, it should ignore them. 
* It does not modify the passed in object.
var arr = ['a', 'c', 'e'];
var obj = {
  a: 1,
  b: 2,
  c: 3,
  d: 4
};
var output = select(arr, obj);
console.log(output); // --> { a: 1, c: 3 }
*/

//Inputs:  array and object
//Outputs:  new object with keys as values in array

//1.  need a new object 
//2.  if the value of the element in the arr === obj[key] 

function select(arr, obj) {
  var newObj = {};
  for (var key in obj) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === key) {
        newObj[arr[i]] === obj[key];
      }
    }
  }
  
}


/* 122 Instructions from your teacher:
Write a function called "getElementOfArrayProperty".

Given an object, a key, and a numerical index, "getElementOfArrayProperty" returns the value of the element at the given index of the array located within the given object at the given key.

Notes:
* If the array is empty, it should return undefined.
* If the given index is out of range of the array located at the given key, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined. */


/* 95 Instructions from your teacher:
Write a function called "getNthElementOfProperty".
Given an object and a key, "getNthElementOfProperty" returns the nth element of an array located at the given key.
Notes:
* If the array is empty, it should return undefined.
* If n is out of range, it should return undefined.
* If the property at the given key is not an array, it should return undefined.
* If there is no property at the key, it should return undefined.*/












