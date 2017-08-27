function average(numbers) {
  var average = 0;
  var sum = 0;

  if (!numbers.length) {
    return average;
  }

  for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  average = sum / numbers.length;
  return average;
}

assertObjectEquals(average([1, 2, 3]), 2, 'should return average of array');
assertObjectEquals(average([]), 0, 'should return average of array');

function min(numbers) {
  var smallest = Infinity;
  var foundNum = false;

  for (var i = 0; i < numbers.length; i++) {
    if (typeof numbers[i] === 'number') {
      if (numbers[i] < smallest) {
        smallest = numbers[i];
        foundNum = true;
      }
    }
  }

  if (!foundNum) {
    return undefined;
  }

  return smallest;
}

assertObjectEquals(min([4, 3, 1, 6]), 1, 'should return smallest num of an array');
assertObjectEquals(min([]), undefined, 'should return undef if no numbers provided');
assertObjectEquals(min(['string']), undefined, 'should return 0 if no numbers provided');

function shortestWord(string) {
  var words = string.split(' ');
  var shortest = words[0];

  for (var i = 0; i < words.length; i++) {
    if (words[i].length < shortest.length) {
      shortest = words[i];
    }
  }

  return shortest;
}

assertObjectEquals(shortestWord('I\'m a little teapot'), 'a', 'should return shortest word in string');

function countCharacters(string) {
  var chars = string.split(' ').join('').split('');
  var count = {};

  for (var i = 0; i < chars.length; i++) {
    if (count[chars[i]]) {
      count[chars[i]]++;
    } else {
      count[chars[i]] = 1;
    }
  }
  return count;
}

assertObjectEquals(countCharacters('hello'), {'h': 1, 'e': 1, 'l': 2, 'o': 1}, 'should return object containing occurances of char in string');

function select(obj, arr) {
  var newObj = {};

  for (var i = 0; i < arr.length; i++) {
    if (obj.hasOwnProperty(arr[i])) {
      newObj[arr[i]] = obj[arr[i]];
    }
  }

  return newObj;
}

assertObjectEquals(select({a: 1, b: 2, c: 3}, ["a"]), {'a': 1}, 'should return properties within an object based on array elements');
assertObjectEquals(select({a: 1, b: 2, c: 3}, ["a", "c"]), {a: 1, c: 3}, 'should return prop withing an obj based on arr el');
assertObjectEquals(select({a: 1, b: 2, c: 3}, ["a", "c", "d"]), {a: 1, c: 3}, 'should return prop inside obj based on arr el');

function range(start, end) {
  var numbers = [];

  for (var i = start; i < end; i++) {
    numbers.push(i);
  }

  return numbers;
}

assertObjectEquals(range(0, 4), [0, 1, 2, 3], 'should return range');
assertObjectEquals(range(2, 7),[2, 3, 4, 5, 6], 'should return range');
assertObjectEquals(range(10, 10), [], 'should return empty arr');
assertObjectEquals(range(10, 2), [], 'should return empty arr');

function squareNumber(number) {
  return Math.pow(number, 2);
}

function squareNumericValues(obj) {
  for (var key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] = squareNumber(obj[key]);
    }
  }
  return obj;
}

assertObjectEquals(squareNumericValues({a: 4, b: 7, c: 2}), {a: 16, b: 49, c: 4}, 'should return obj w/ squared numbers');
assertObjectEquals(squareNumericValues({name: "Phuong", age: 25}), {name: "Phuong", age: 625}, 'should return obj w/ squared numbers');

var people = [
      {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26},
      {name: {first: "Ben", last: "Bitdiddle"}, age: 34},
      {name: {first: "Eva", middle: "Lu", last: "Ator"}, age: 40},
      {name: {first: "Lem", middle: "E.", last: "Tweakit"}, age: 45},
      {name: {first: "Louis", last: "Reasoner"}, age: 21}
    ];

function fullName(person) {
  var middleName = '';
  if (person.name.middle) {
    middleName = person.name.middle;
  }
  return person.name.first + middleName + person.name.last;
}

function longestName(people) {
  var longestNamePerson = people[0];
  for (var i = 0; i < people.length; i++) {
    if (fullName(people[i]).length > fullName(longestNamePerson).length) {
      longestNamePerson = people[i];
    }
  }

  return longestNamePerson;
}

assertObjectEquals(longestName(people), {name: {first: "Alyssa", middle: "P.", last: "Hacker"}, age: 26}, 'should return person with longest name');

function assertObjectEquals(actual, expected, testName) {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);

  if (actual === expected) {
    console.log('passed');
  } else {
    console.log('FAILED [' + testName + '] expected: "' + expected + '", but got "' + actual + '".');
  }
}
