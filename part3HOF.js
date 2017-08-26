// Exercises - Map

  function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function map(array, f) {
  var acc = [];
  each(array, function(element, i) {
    acc.push(f(element, i));
  });
  return acc;
}
// Basic Requirements

// We can rewrite the ages function from the warmup using map like this:

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function ages(people) {
  return map(people, function(person) {
    return person.age;
  });
}
ages(people);

// 1 Rewrite the functions firstNames,
// lastNames and fullNames using map as shown above.
function firstName(people) {
  return map(people, function(person){
    return `${person.name.first}`;
  });
}
firstName(people);

function lastNames(people) {
  return map(people, function(person) {
    return `${person.name.last}`;
  });
}
lastNames(people);

function firstName(people) {
  return map(people, function(person) {
    return `${person.name.first} ${person.name.last}`;
  });
}

firstName(people);
// 2 Given the function abs that computes the absolute value,
// finish the invocation of map that should compute the
// absolute value of each number in its array argument.

function abs(x) {
  if (x >= 0) {
    return x;
  }
  return -x;
}

map([1, -2, 37, -100, -8, 5], abs);
// => [1, 2, 37, 100, 8, 5]
//
// HINT: To test this, it may be easiest to paste all of
// the above into a console.

// 3 We're going to write a function maximums that,
// given an array of arrays of numbers as an argument,
// returns a new array containing the maximum number of
// each inner array. That's a bit of a mouthful, so let's
// break it down:
function maximums(numbers) {
   return map(numbers, function(element, i){
    return max(element);
   });
}

// our argument would look like this:
var sampleInput = [ // it's an array
  [1, 3, 2],  // of arrays of numbers
  [4, 23, 100],
  [7, 6, 3, -2]
];

var sampleInput = [
  [1, 3, 2],
  [4, 23, 100],
  [7, 6, 3, -2]
  ]
// and we want to be able to use maximums to do this:
maximums(sampleInput); // => [3, 100, 7]

// Part One: Let's start by writing a function max that,
// when given an array of numbers computes the maximum number
// in that array. You will want to use each for this.

function max(numbers) {
  var max = numbers[0];
  each(numbers, function(num){
    if(num > max) {
      max = num;
    }
  });
  return max;
}
max([1, 3, 2]); // => 3
max([4, 23, 100]); // => 100

// Part Two: Now that you have a function that computes
// the the maximum number in an array of numbers, use map to
// transform each array in the sampleInput into its maximum by
// completing the maximums function:
//
function maximums(arrays) {
  return map(arrays, function(element, i){
    return max(element);
  });
}

// More Practice

//1 Complete the function exponentials that accepts an array
// of numbers as a parameter, and raises each number n
// to the nth power, e.g:

var  power = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
};

function exponentials(numbers) {
  return map(numbers, function(element, i) {
    return power(element, element);
  });
}
exponentials([1, 2, 3, 4]); // => [1, 2*2, 3*3*3, 4*4*4*4] => [1, 4, 27, 256]
exponentials([3, 2, 5]); // => [27, 4, 3125]

// 2 First, write a function reverse that accepts a string as
// a parameter and returns a reversed version of that string
// (you'll want to use a for loop for this).
// Then, use reverse to write a function called
// reverseWords that accepts a string as an argument,
// and returns a string with all of its words reversed.
// You'll want to use split and join in both of these functions.

function reverse(word) {
  var reversed = '';
  for(var i = word.length - 1; i >= 0; i--) {
    reversed += word[i];
  }
  return reversed;
}

function reverseWords(strings) {
  return map(strings.split(' '), function(element, i) {
    return reverse(element);
  }).join(' ');
}
"hello".split(""); // => ["h", "e", "l", "l", "o"]
["h", "e", "l", "l", "o"].join(""); // => "hello"

"hello world".split(" "); // => ["hello", "world"]
["hello", "world"].join(" "); // => "hello world"

reverseWords("hello world"); // => "olleh dlrow"

// Note that reverseWords should reverse each word individually,
// not the entire string.

// 3 We often want to transform an array of objects by looking
// up the value found under a specific key in each object;
// for instance, consider the problem of finding the ages of
// all the people in the people array like we did in the
// first exercise:

var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

function ages(people) {
  return map(people, function(person) {
    return person.age;
  });
}

// Write a function called pluck that takes an array of objects
// and a string representing a key as parameters,
// and returns an array of all the values found
// under each object using the key, e.g.:
function pluck(array, string) {
  var newArr = [];
  each(array, function(element, index) {
    each(element, function(values, keys) {
       if(keys === string) {
        newArr.push(values);
       }
    });
  });
  return newArr;
}
pluck(people, "age"); // => [26, 34, 40, 45, 21]

// Your implementation should use map.

//4 Let's say that we have a string representing a CSV
// (comma-separated values) file that looks like this:

  "Alyssa,P.,Hacker,26\nBen,,Bitdiddle,34\nEva,Lu,Ator,40\nLem,E.,Tweakit,45\nLouis,,Reasoner,21";

// And we want to parse it into an array people
// objects like we showed in the warmup, e.g.:
var people = [
  {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
  {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
  {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
  {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
  {name: {first: "Louis", last: "Reasoner"}, age: 21}
];

// Using map and split, write a function parseCSV that accepts a
// CSV string as a parameter and outputs an array of people
// objects with the exact format as shown above.
//
function person(element) {
  var obj = {};
  obj.name = {};
  obj.name.first = element[0];
  if (element.length === 4) {
    obj.name.middle = element[1];
  }
  obj.age = element[element.length - 1];
  obj.name.last = element[element.length - 2];
  return obj;
}

function parseCSV (longString){
  var array = longString.split('/n') ;
  return map(array , function(element, index){
    var x = element.split(',') ;
    return person(x);
  });
}



var personsat = 'Grace,B.,Hopper,85/nAdele,Goldstine,43/nAda,Lovelace,36/nHedy,E.,Lamarr,85/nRuchi,Sanghvi,34' ;
parseCSV (personsat);

// Advanced

// 1 Disclaimer: This problem is very difficult!
// Write a function called map2 that accepts two arrays and a
// function as arguments, and constructs a new array by invoking
// its function argument on the elements of both arrays, e.g.:
function map2(array1, array2, func) {
  var newArr = [];
  each(array1, function(element, index) {
    each(array2, function(elem, ind) {
      if(ind === index) {
        newArr.push(func(elem, element));
      }
    });
  });
  return newArr;
}

map2([1, 2, 3], [4, 5, 6], function(a, b) {
  return a * b;
});
// => [4, 10, 18]

// Now, write a function called mapN that accepts an arbitrary number of arrays
// and a n-ary function as arguments, and constructs a new array
// by combining the elements of all the arrays, e.g.:

mapN([1, 2, 3], [4, 5, 6], [2, 2, 2], function(a, b, c) {
  return (a * b) + c;
});
// => [6, 12, 20]

mapN([1, 2, 3], function(x) { return x * x; }) // => [1, 4, 9]

// You'll need to read about the arguments keyword
//  and apply to complete this function.

// Exercises - Map Objects
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

function map(coll, f) {
  var acc = [];
  if (!Array.isArray(coll)) {
    acc = {};
  }
  each(coll, function(element, key) {
    acc[key] = f(element, key);
  });
  return acc;
}

// Basic Requirements

//1 The incrementValues function from yesterday can be
// written much more elegantly using map.
// Rewrite that function using our new and
// improved version of map.

// For convenience, the prompt is reproduced below:

// Write a function called incrementValues that accepts an
// object as a parameter, and outputs an object with all of
// its numeric values incremented by one. You'll want to use
// the updated version of map for this, and you will need to
// check the type of each value to determine whether or not it
// should be incremented.

//3 Write a function called uppercaseValues that, given an object as a parameter,
// returns a new object with all of its string values converted to
// uppercase. You'll want to make use of .toUpperCase() for this:

"hello".toUpperCase(); // => "HELLO"

// Also, ensure that you only attempt to convert strings to uppercase
// -- you may want to use typeof for this.

//3 Write a function called countNestedKeys that, given an object
// where all values are also objects, returns an object that
// contains the count of keys in each nested object, e.g.

function countNestedKeys(object) {
  // TODO: Your code here
}
countNestedKeys({a: {b: 1, c: 7}, f: {h: 22, g: 12, i: 24}});
// => {a: 2, b: 3}
