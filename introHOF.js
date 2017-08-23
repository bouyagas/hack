// Exercises

// Basic Requirements
// Rewrite Functions

// We have two ways of writing a function. The function declaration
// is what we've used so far, and the function expression is new to us.
// Rewrite the following function declarations using a function expression:

 // function declaration
// function square(x) {
//   return x * x;
// }


// function expression
var square = function(x) {
  return x * x;
};

var cube = function(x) {
  return x * x * x;
};

var fullname = function(first, last) {
  return first + " " + last;
};

var  power = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
};

var sumCubes = function(numbers) {
  var total = 0;
  for (var i = 0; i < numbers.length; i++) {
    total = total + cube(numbers[i]);
  }
  return total;
};

// Iterating Over Arrays Using each

// 1 Write each as seen below in your main.js file.
function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

// 2 Finish the implementation of sumSquares below (using each):
 function sumSquares(sumArray) {
  var sum = 0;
  each(sumArray, function(element) {
    // sum +=  element * element;
   sum += power(element, 2);
  });
  return sum;
}
sumSquares(numbers);

// 3 Rewrite sumCubes using each:

function sumCubes(numbers) {
  var total = 0;
  each(numbers, function(element) {
    // total += element * element * element;
    total += cube(element);
  });
  return total;
}
sumCubes(numbers);

//4 Write a function called product that calculates the
// product of an array of numbers using a for loop; then,
// refactor it to use each.
// function products(numbers) {
//   var total = 1;
//   for(var i = 0; i < numbers; i++) {
//     total *= number[i];
//   }
//   return total;
// }

function products(productArray) {
  var product = 1;
  each(productArray, function(element) {
    product *= element;
  });
  return product;
}
products(numbers);

//5 Write a function called cubeAll that cubes
// each number in an array, and returns an array of
// all the numbers cubed using a for loop;
// then, refactor it to use each.

// function cubeAll(numbers) {
//   var cube = [];
//   for(var i = 0; i < numbers.length; i++) {
//     cube.push(Math.pow(numbers[i], 3));
//   }
//   return cube;
// }

function cubeAll(numbers) {
  var cube = [];
  each(numbers, function(element) {
    cube.push(cube(element, 3));
});
  return cube;
}
cubeAll(numbers);

// 6 Write a function called odds that accepts an
// array as a parameter and returns an array of
// just the odd numbers. If you wrote it using each,
// great! If you used anything else,
// refactor it to use a for loop.

// function odds(numbers) {
//   var odd = [];
//   for (var i = 0; i < numbers.length; i++) {
//     if (numbers[i] % 2 !== 0) {
//       add.push(numbers[i]);
//     }
//   }
//   return odd;
// }

function odds(numbers) {
  var odd = [];
  each(numbers, function(element) {
   if (element % 2 !== 0) {
    odd.push(element);
  }
});
  return odd;
}
odds(numbers);

// More Practice
// Summations

//1 Write a function sumByAllElementsMultipliedByFour
// that takes an array as an argument and returns the sum of
// sall elements multiplied by four.
// function sumByAllElementsMultipliedByFour(array) {
//   var sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     sum += array[i] * 4;
//   }
//   return sum;
// }

function sumByAllElementsMultipliedByFour(array) {
  var sum = 0;
  each(array, function(element){
    sum += element * 4;
  });
  return sum;
}

sumByAllElementsMultipliedByFour(numbers);

//2 Observe that sumByAllElementsMultipliedByFour
// is a terrible name for a function – you should also notice that
// sumByAllElementsMultipliedByFour looks a lot like sumCubes
// and sumSquares.

// Write a function sumBy that accepts two arguments:
// an array of numbers and a function.
// The function will be invoked upon each element in the array,
// and its result will be used to compute the sum.


function sumBy(numbers, f) {
  var sum = 0;
  each(numbers, function(num) {
    sum += f(num);
  });
  return sum;
}

var numbers = [1, 2, 3, 4];
sumBy(numbers, square); // => 30
sumBy(numbers, cube); // => 100
sumBy(numbers, function(number) {
  return number * 4;
});
// => 40

//3 How can you use sumBy to compute the sum of an array
//  of numbers (just the plain sum)?

//4 Write a function productBy that works like sumBy, but for products.

function productBy(numbers, f) {
  var total = 1;
  each(numbers, function(product){
   total *= f(product);
  });
  return total;
}

productBy(numbers, function(num){
   return num * 1;
});

// Refactoring
// As an extended exercise, run back through your data
// modeling code from the past few days and look for opportunities
// to refactor your use of for loops using each, map and filter.


// Advanced
// Finding Patterns: Mapping

//1 Write a function doubleAll that takes an array of numbers as
// a parameter and returns an array of all of those numbers doubled:

function doubleAll(numbers) {
  var arr = [];
  each(numbers, function(num) {
   arr.push(num * 2);
  });
  return arr;
}
doubleAll([1, 3, 10, 4, 7]); // => [2, 6, 20, 8, 14]

//2 Write a function halveAll that takes an array
//of numbers as a parameter and returns an array of
//all of those numbers halved (divided by two).

function halveAll(numbers) {
 var arr = [];
 each(numbers, function(num){
   arr.push(num / 2);
 });
 return arr;
}
halveAll(numbers);


//3 Write a function uppercaseAll that takes an array of strings
// as a parameter
//, and returns an array of all of those strings,
// but transformed to upper case. You can use toUpperCase
//  to convert a string to upper case.
var x = ['mohamed', 'gassama', 'bouyagui', 'kaky'];
function uppercaseAll(strings) {
  var str = [];
  each(strings, function(trans) {
    str.push(trans.toUpperCase());
  });
  return str;
}
uppercaseAll(x);
//   1│"hello, world".toUpperCase(); // => "HELLO, WORLD"

//1 You should at this point notice a similarity between all of the above
//functions, as well as the cubeAll function from the warmup.
//These functions all define what we call mappings; that is,
//they map from one value to another.

// doubleAll maps from an array of numbers to an array of doubled numbers
// [1, 2, 3, 4] => [2, 4, 6, 8]
// halveAll maps from an array of numbers to an array of halved numbers
// [1, 2, 3, 4] => [0.5, 1, 1.5, 2]

//2 Write a function map that takes two parameters: an array and a
// function that, when applied to a single element,
// produces a new element. map should return an array of all elements
//  in the input array transformed using the input function. Your function should work like this:

function map(array, f) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
     arr.push(f(array[i]));
  }
  return arr;
}

map([1, 2, 3, 4], function(x) {
  return x * 2;
});
// => [2, 4, 6, 8]

//3 Complete the invocations of map below to produce
// the desired output (you'll need to replace ??? with a function):

map(["hello", "world"], function(str) {
  return str.toUpperCase();
}); // => ["HELLO", "WORLD"]

map(["HelLo", "WorLD"], function(str) {
  return str.toLowerCase();
}); // => ["hello", "world"]

map(["the", "quick", "brown", "fox", "jumped"], function(str) {
  return str.length;
}); // => [3, 5, 5, 3, 6]

var people = [
  {name: "Alyssa P. Hacker", age: 26},
  {name: "Ben Bitdiddle", age: 34},
  {name: "Eva Lu Ator", age: 19},
  {name: "Lem E. Tweakit", age: 40}
];

map(people, function(obj) {
  return obj.name;
}); // => ["Alyssa P. Hacker", "Ben Bitdiddle", "Eva Lu Ator", "Lem E. Tweakit"]

map(people, function(obj) {
  return `${obj.name} is ${obj.age}`;
});// => ["Alyssa P. Hacker is 26", "Ben Bitdiddle is 34", "Eva Lu Ator is 19", "Lem E. Tweakit is 40"]

// Finding Patterns: Filtering

//1 Write a function called evens that takes an array of numbers as a parameter,
// and returns an array of only the even numbers in the parameter.

function even(numbers) {
 var arr = [];
 each(numbers, function(num) {
   if(num % 2 === 0) {
     arr.push(num);
   }
 });
  return arr;
}
even(numbers);

//2 Write a function called multiplesOfThree that takes an array of numbers as a parameter,
// and returns an array of only the numbers that are multiples of three.

function multiplesOfThree (numbers) {
  var arr = [];
  each(numbers, function(num) {
    if(num % 3 === 0) {
       arr.push(num);
    }
  });
  return arr;
}
multiplesOfThree(numbers);
//3 Write a function called positives that takes an array of numbers as a parameter,
// and returns an array of only the numbers that are positive.
function positives(numbers) {
  var arr = [];
  each(numbers, function(num) {
    if (num > 0) {
      arr.push(num)
    }
  });
  return arr;
}
positives([-1, -24, 45, 4, -9, 5, -89, -4]);
//4 Write a function called evenLength that takes an array of strings
// and returns an array of only the strings with an even length.
function evenLength(strings) {
  var str = [];
  each(strings, function(string) {
    if(string.length % 2 === 0) {
      str.push(string);
    }
  })
  return str;
}

evenLength(["red", "green", "yellow", "blabla", "arrayjs"]);

//5 At this point, you should notice a pattern;
//write a function called filter that takes two parameters:
// an array and a function that, when invoked with an argument,
// will return true or false. filter should return a new array
// of only the elements for which the function returns true:

function filter(array, f) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if(f(array[i])) {
     arr.push(array[i]);
    }
  }
  return arr;
}

filter([1, 2, 3, 4], function(x) {
  return x % 2 === 0; // x is even?
}); // => [2, 4]


//6 Use filter to write/rewrite:
// odds
var numbers = [1, 2, 3, 4];
function odds(numbers) {
  return filter(numbers, function(element) {
    return element % 2 !== 0;
  });
}
odds(numbers);

// positives
function positives(numbers) {
  return filter(numbers, function(num) {
    return num > 0;
  });
}

positives([-1, -24, 45, 4, -9, 5, -89, -4]);
// negatives
function negatives(numbers) {
  return filter(numbers, function(num) {
    return num < 0;
  });
}

negatives([-1, -24, 45, 4, -9, 5, -89, -4]);
// evenLength
function evenLength(numbers) {
  return filter(numbers, function(str) {
    return str.length % 2 === 0;
  });
}

evenLength(["red", "green", "yellow", "blabla", "arrayjs"]);

// largerThanSix (given an array of numbers, returns those larger than 6)
function largerThanSix(number) {
  return filter(numbers, function(num) {
    return num > 6;
  })
}
largerThanSix([1, 24, 45, 4, 9, 5, 89, 4]);
//7 Using filter, write a function startsWithChar that accepts
//two parameters: an array of strings, and a character (e.g. "a"),
//and returns an array of only the strings that start with that character:

function startsWithChar(strings, character) {
 return filter(strings, function(char) {
  return char.startsWith(character);
 });
}
var words = "the quick brown fox jumps over the lazy dog".split(" ");
startsWithChar(words, "q"); // => ["quick"]
startsWithChar(words, "t"); // => ["the", "the"]
