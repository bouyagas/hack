// Testing
function assertion(actual, expected, testName) {
  if (actual === expected) {
    console.log('Test Passed');
  } else {
    console.log(`Failed ${textName}: Expected to be ${expected} but got ${actual}`);
  }
}

function assertObjectsEqual(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected ' + expected + ', but got ' + actual);
  }
}
// loop HOF
function each(coll, func) {
  if(Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      func(coll[i], i);
    }
  } else {
    for(var key in coll) {
      func(coll[key], key);
    }
  }
}
// 1 Write a function called average that takes an array
// of numbers as a parameter and returns the average
// of those numbers.
function average(numbers) {
  var sum = 0;
  each(numbers, function(elem, i) {
    sum += elem;
  });
  return sum / numbers.length;
  console.log(sum);
}
average([50, 25, 75, 10]); //40
average([4, 12]); //8
average([19, 23, 41, 99, 13]) //39

// After you write your function, you can test it using the
// above inputs to make sure that it behaves correctly.

//2 Write a function called min that finds the smallest
// number in an array of numbers.

function min(numbers) {
  var myMin = numbers[0];
  each(numbers, function(elem, i) {
    if (elem < myMin) {
      myMin = elem;
    }
  });
  return myMin;
}
min([1, 20, 44, 64, 28]); //1
min([400, 23, 87, 94, 21, 40]); //21
min([10]); //10

// After you write your function, you can test it using the
// above inputs to make sure that it behaves correctly.

// Write a function shortestWord which returns the first shortest
// word from the input string.
function shortestWord(string) {
  var arrayOfString = string.split(' ');
  var myMin = arrayOfString[0];
  each(arrayOfString, function(elem, i) {
    if (elem.length < myMin.length) {
      myMin = elem;
    }
  });
  return myMin;
}
shortestWord('the wheels on the bus'); //'on'
shortestWord('she sells sea shells'); //'she'
shortestWord('one string to rule them all'); //'to'

// After you write your function, you can test it using
// the above inputs to make sure that it behaves correctly.

// 4 Write a function countCharacters that, when given a string
// as an argument, returns an object containing counts of the occurrences
// of each character in the string.


function countCharacters(s) {
  var obj = {};
  var arrayStr = s.split('');
  each(arrayStr, function(elem, i) {
    if( typeof obj[elem] !== 'undefined') {
      obj[elem] += 1;
    } else {
      obj[elem] = 1;
    }
  });
  return obj;
}
countCharacters("hello"); // => {"h": 1, "e": 1, "l": 2, "o": 1}

// HINT: You will want to make use of the string method split.
// Try \"hello".split("") at a console to see how it works.

// After you write your function, you can test it using the
// above inputs to make sure that it behaves correctly.

// 5 Write a function select that accepts two arguments:
// an object and an array. The array should contain names
// of keys that will be selected from the object:

function select(obj, arr) {
  var myObj = {};
  each(arr, function(elem, i) {
    if(elem !== 'undefined') {
      myObj[elem] = obj[elem];
    }
  });
  return myObj;
}
select({a: 1, b: 2, c: 3}, ["a"]); // => {a: 1}
select({a: 1, b: 2, c: 3}, ["a", "c"]); // => {a: 1, c: 3}
select({a: 1, b: 2, c: 3}, ["a", "c", "d"]); // => {a: 1, c: 3}

// After you write your function, you can test it using the
// above inputs to make sure that it behaves correctly.

// 6 Write a function called squareNumericValues that takes an object
// as a parameter and returns an object with all of the numeric values
// in the object squared, e.g.
function squared (x) {
  return x * x;
}

function squareNumericValues(obj) {
  var myObj = {};
  each(obj, function(values, keys) {
    if (typeof values === 'number' ) {
       myObj[keys] = squared(values);
    } else {
       myObj[keys] = values;
    }
  });
  return myObj;
}
squareNumericValues({a: 4, b: 7, c: 2}); // => {a: 16, b: 49, c: 4}
squareNumericValues({name: "Phuong", age: 25}); // => {name: "Phuong", age: 625}

// One observation to make when writing this function is
// that you'll need to only square the values that are actually
// numbers -- notice how in the second example invocation above
// (squareNumericValues({name: "Phuong", age: 25})) the value
// "Phuong" is unchanged because its value is a string.

// To handle this, you will need to use the typeof operator
// to determine each value's type.
// Enter the following into a console to get an
// idea of how typeof works:

typeof 1; // => "number"
typeof "hello"; // => "string"
typeof true; // => "boolean"

// After you write your function, you can test it
// using the above inputs to make sure that it behaves correctly.

function assertEqual(actual, expected, testName) {
  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] Expected \"' + expected + '\", but got \"' + actual + '\"');
  }
}


// Kayleigh Foley
function square(n) {
  return n * n;
}

function testSquare_5(func) {
  return assertEqual(square(5), 25, 'should return the square of 5');
}
function testSquare_negative(func) {
  return assertEqual(square(-5), 25, 'should return a positive number from a negative input');
}
function testSquare_decimal(func) {
  return assertEqual(square(0.5), 0.25, 'should return a smaller number from a decimal input');
}
function testSquare_0(func) {
  return assertEqual(square(0), 0, 'should return 0 from input of 0');
}

function runAllTests() {
  testSquare_5(square);
  testSquare_negative(square);
  testSquare_decimal(square);
  testSquare_0(square);
}
