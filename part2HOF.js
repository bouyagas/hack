  // Exercises - Each Indices

 function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i], i);
  }
}
// Basic Requirements

//1 Using our new version of each, write a function called
// indexedExponentials that, when given an array of
// numbers as an argument, returns a new array of numbers
// where each number has been raised to the
// power of its index, e.g.:

var  power = function(base, exp) {
  if (exp === 0) {
    return 1;
  }
  return base * power(base, exp - 1);
};

function indexedExponentials(numbers) {
  var nums = [];
  each(numbers, function(num, i) {
   nums.push(power(num, i));
  });
  return nums;
}
indexedExponentials([2, 5, 7, 4]); // => [2^0, 5^1, 7^2, 4^3] => [1, 5, 49, 64]

//2 Write a function called evenIndexedOddNumbers that,
// when given an array of numbers as an argument,
// returns an array of only the odd numbers
// with even indices.

function evenIndexedOddNumbers(numbers) {
  var nums = [];
  each(numbers, function(num, i){
    if(num % 2 !== 0 && i % 2 === 0) {
      nums.push(num);
    }
  });
  return nums;
}
evenIndexedOddNumbers([1, 3, 3, 4, 7, 10]); // => [1, 3, 7]

//3 Write a function called evenIndexedEvenLengths
// (yeah, a bit of a mouthful) that accepts an array
// of strings as a parameter, and returns only the strings
// that are found at an even index that also have an even length, e.g.:

function evenIndexedEvenLengths(strings) {
   var str = [];
   each(strings, function(string, i) {
     if(string.length % 2 === 0 && i % 2 === 0) {
      str.push(string);
     }
   });
  return str;
}
evenIndexedEvenLengths(["lion", "monkey", "aardvaark", "cat", "doge"]);
// => ["lion", "doge"]
evenIndexedEvenLengths(["red", "green", "purple", "blue", "yellow"]);
// => ["purple", "yellow"]

// Exercises - Each Objects

      function each(coll, func) {
        if (Array.isArray(coll)) {
          for (var i = 0; i < coll.length; i++) {
            func(coll[i], i);
          }
        } else {
          for (var key in coll) {
            func(coll[key], key);
          }
        }
      }
// Basic Requirements

//1 Using our updated version of each, write the following functions:

// values: accepts an object as a parameter,
// and outputs an array of the object's values.
function objectValues(obj) {
  var arr = [];
  each(obj, function(values, keys) {
      arr.push(values);
  });
  return arr;
}
var myObject = {
  a:"duck",
  b:"swan",
  c:"goose",
  d:"gull"
};

objectValues(myObject);

// keys: accepts an object as a parameter,
// and outputs an array of the object's keys.
function objectKeys(object) {
  var arr = [];
  each(obj, function(values, keys) {
    arr.push(keys);
  })
  return arr;
}
var myObject = {
  a:"duck",
  b:"swan",
  c:"goose",
  d:"gull"
};

objectKeys(myObject);

//2 Write a function called keysLongerThan that accepts two parameters
//  -- an object and a number -- and returns a new object
//  with only the key/value pairs in the input object
//  whose keys are longer than the numeric argument, e.g.:
function keysLongerThan (object, number) {
  var obj = {};
  each(object, function(values, keys) {
    if(keys.length > number) {
     obj[keys] = values;
    }
  });
  return obj;
}

keysLongerThan({name: "Annyeong", age: 25, favoriteColor: "blue"}, 3);
// => {name: "Annyeong", favoriteColor: "blue"}

keysLongerThan({name: "Annyeong", age: 25, favoriteColor: "blue"}, 4);
// => {favoriteColor: "blue"}

// Make sure to use the new version of each for this.

// Write a function called incrementValues that accepts an
// object as a parameter, and outputs an object with all of its numeric
// values incremented by one. You'll want to use the updated version
// of each for this, and you will need to check the type of each value
// to determine whether or not it should be incremented.
function incrementValues (object) {
   var obj = {};
   each(object, function(values, keys) {
    if(typeof values === 'number') {
      obj[keys] = values + 1;
    }
   });
   return obj;
}
 var newObj = {a: "derp", b: 1, c: 10};
 incrementValues(newObj);
// HINT: Try entering the following expressions in to your console:

console.log(typeof "hello"); // => "string"
console.log(typeof 1); // => "number"
console.log(typeof true); // => "boolean"

// Exercises - Filter
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

function filter(array, predicate) {
  var acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}




// Basic Requirements

// Use filter to write the following functions:

// 1 Write a function called evens that takes an array of numbers
//  as a parameter, and returns an array of only the even numbers
//  in the parameter.
function evens(numbers) {
  return filter(numbers, function(num) {
    return num % 2 === 0;
  });
}
evens([1, 3, 3, 4, 7, 10]);

// 2 Write a function called multiplesOfThree that takes an array of
// numbers as a parameter, and returns an array of only the numbers
// that are multiples of three.
function multiplesOfThree(numbers) {
  return filter(numbers, function(num) {
    return num % 3 === 0;
  });
}
multiplesOfThree([1, 3, 3, 4, 7, 10]);

// 3 Write a function called positives that takes an array of numbers
//  as a parameter, and returns an array of only the
//  numbers that are positive.
function positives(numbers) {
  return filter(numbers, function(num) {
    return num > 0;
  });
}
positives([-18, -913, -3 -4, 0,1, 3, 3, 4, 7, 10]);

// 4 Write a function called evenLength that takes an
//  array of strings and returns an array of only the strings
//  with an even length.
function evenLength(strings) {
  return filter(strings, function(str) {
    return str.length % 2 === 0;
  });
}
evenLength(['kaky', 'bye', 'by', 'car', 'heys']);

// More Practice

// 1 Use filter to write the following functions:

// odds: Accepts an array of numbers, and returns the odd ones.
function odds(numbers) {
  return filter(numbers, function(num) {
    return num % 2 !== 0;
  });
}
odds([1, 3, 3, 4, 7, 10]);
// negatives: Like positives, but with negatives!
function negatives(numbers) {
  return filter(numbers, function(num) {
    return num < 0;
  });
}
negatives([-18, -913, -3 -4, 0,1, 3, 3, 4, 7, 10]);
// largerThanSix: given an array of numbers, returns those larger than 6.
function largerThanSix(numbers) {
  return filter(numbers, function(num) {
    return num > 6;
  });
}
largerThanSix([-18, -913, -3 -4, 0,1, 3, 3, 4, 7, 10]);

//2 Using filter, write a function startsWithChar that accepts two parameters:
// an array of strings, and a character (e.g. "a"),
// and returns an array of only the strings that
// start with that character:

function startsWithChar(strings, character) {
  return filter(strings, function(char) {
    return char.startsWith(character);
  });
}
var words = "the quick brown fox jumps over the lazy dog".split(" ");
startsWithChar(words, "q"); // => ["quick"]
startsWithChar(words, "t"); // => ["the", "the"]

//3 Extend the filter function to pass the index of each
//  element to the predicate; then, complete the following:

//4 Write a function called evenIndexedEvenLengths
// (yeah, a bit of a mouthful) that accepts an array of strings
// as a parameter, and returns only the strings that are
// found at an even index that also have an even length, e.g.:

function evenIndexedEvenLengths(strings) {
   return filter(strings, function(str, i) {
    if(str.length % 2 === 0 && i % 2 === 0) {
      return str;
   }
  });
}
evenIndexedEvenLengths(["lion", "monkey", "aardvaark", "cat", "doge"]);
// => ["lion", "doge"]
evenIndexedEvenLengths(["red", "green", "purple", "blue", "yellow"]);
// => ["purple", "yellow"]

// HINT: You'll need to ensure that your version of filter
//  also passes each elements' index (or key in the case of objects)
//  to the predicate.

// 4 Write a version of filter that works on arrays and objects;
//  then, use your updated version of filter to filter an object
//  with values of mixed types to an object with only numeric values.
//  You should be able to use your modified version of filter as follows:
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

function filter (collection, test) {
  if(Array.isArray(collection)){
    var acc = [];
    each(collection, function(element, i) {
      if (test(element, i)) {
        acc.push(element);
      }
    });
    return acc;

  } else {

    var obj = {};
    each(collection, function(element, key) {
      if (test(element, key)) {
        obj[key] = element;
      }
    });
    return obj;
  }
}

filter({a: 1, b: "dog", c: true}, function(value) {
  return typeof value === "number";
});
// => {a: 1}
//
