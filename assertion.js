const equalAssertion = (actual, expected, testName) => {
   if (actual === expected) {
    console.log('Test Passed');
   } else {
    console.log(`Failed ${testName}: Expect to be ${expected}, but got ${actual}`);
   }
};

const assertObjectsEqual = (actual, expected, testName) => {
  actual = JSON.stringify(actual);
  expected = JSON.stringify(expected);
  if (actual === expected) {
    console.log('Test Passed');
  } else {
    console.log(`Failed ${testName}: Expect to be ${expected}, but got ${actual}`);
  }
};

const each = (coll, func) => {
  if(Array.isArray(coll)) {
    for (let i = 0; i < coll.length; i++) {
      func(coll[i], i);
    }
  } else {
    for(let key in coll) {
      func(coll[key], key);
    }
  }
};

const square = (x) => {
  return  x * x;
};

equalAssertion(square(5), 25, 'It should squared the number to 25');


const average = (numbers) => {
  let sum = 0;
  each(numbers, (elem, i) => {
    sum += elem;
  });
  return sum / numbers.length;
};

equalAssertion(average([50, 25, 75, 10]), 40, 'It should return the average of an array');
equalAssertion(average([4, 12]), 8, 'It should return the average of an array');
equalAssertion(average([19, 23, 41, 99, 13]), 39, 'It should return the average of an array');


const min = (numbers) => {
  let myMin = numbers[0];
  each(numbers, (elem, i) => {
    if (elem < myMin) {
      myMin = elem;
    }
  });
  return myMin;
};

equalAssertion(min([1, 20, 44, 64, 28]), 1, 'It should return the minimum of an array');
equalAssertion(min([400, 23, 87, 94, 21, 40]), 21, 'It should return the minimum of an array');
equalAssertion(min([10]), 10, 'It should return the minimum of an array');


const countCharacters = (s) => {
  let obj = {};
  let arrayStr = s.split('');
  each(arrayStr, (elem, i) => {
    if( typeof obj[elem] !== 'undefined') {
      obj[elem] += 1;
    } else {
      obj[elem] = 1;
    }
  });
  return obj;
};

assertObjectsEqual(countCharacters("hello"), {"h": 1, "e": 1, "l": 2, "o": 1}, 'it should return an object containing a numbers of characters');
assertObjectsEqual(countCharacters('worlds'), { w: 1, o: 1, r: 1, l: 1, d: 1, s: 1 }, 'it should return an object containing a numbers of characters');



const squareNumericValues = (obj) => {
  let myObj = {};
  each(obj, (values, keys) => {
    if (typeof values === 'number') {
     myObj[keys] = square(values);
    } else {
      myObj[keys] = values;
    }
  });
  return myObj;
};

assertObjectsEqual(squareNumericValues({a: 4, b: 7, c: 2}), { a: 16, b: 49, c: 4 }, 'it should return obj with squared numbers');
assertObjectsEqual(squareNumericValues({name: "Phuong", age: 25}), {name: "Phuong", age: 625}, 'it should return obj with squared numbers');



const select = (obj, arr) => {
  let myObj = {};
  each(arr, function(elem, i) {
    if(elem !== 'undefined') {
      myObj[elem] = obj[elem];
    }
  });
  return myObj;
};

assertObjectsEqual(select({a: 1, b: 2, c: 3}, ["a"]), {a: 1}, 'should return properties within an object based on array elements');
assertObjectsEqual(select({a: 1, b: 2, c: 3}, ["a", "c"]), {a: 1, c: 3}, 'should return properties within an object based on array elements');
assertObjectsEqual(select({a: 1, b: 2, c: 3}, ["a", "c", "d"]), {a: 1, c: 3}, 'should return properties within an object based on array elements');


