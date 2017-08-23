// Array propriety and method


// Array constructor
var arr1 = new Array;
var arr2 = [];

var aString = ['Array', 'Normal', 'Cowoy', 'Go', 'query', 'world', 'ho'];
var myArr = [1,3,4,5,6,7,8];
var myArr1 = [1,90,3,13,4,5,46,37,80, 0, 90, 38, 88, 77];
var myArr2 = ['one', 'two', 'three', 'four', 'five', 'six']

// To verified if an object is an Array
var isAnArray = Array.isArray(arr2);
console.log(isAnArray);

// To find the length of an Array
var ArrayLen = myArr.length;
    console.log(ArrayLen);


// Show the position or the index of an element in the array if is no in the array it's return -1
var arrIndex = myArr.indexOf(9)
    console.log(arrIndex);



// Show the position or the index of an element in the array in reserve order if is no in the array it's return -1
var arrLastindex = myArr.lastIndexOf(3)
    console.log(arrLastindex);


// Push or add an element in at the end of the array
    myArr.push(9);
    console.log(myArr);

// Pop or remove an element in at the end of the array
    myArr.pop();
    console.log(myArr);


// unshift or add an element in at the begining of the array
   myArr.unshift('Kaby');
   console.log(myArr);

// Pop or remove an element in at the end of the array
   myArr.shift()
   console.log(myArr);

// concatining or adding two arrays together
var concatArr = myArr.concat(myArr1);
    console.log(concatArr);

// include or checking if element contain in an element or not
var elemIncludeInArray = myArr.includes(3)
    console.log(elemIncludeInArray);

// change an array to a string
var changeArrToStr  = myArr1.toString();
    console.log(changeArrToStr);

// reverse the element inside the array
// var change = myArr.reverse();
//     console.log(change);
// sort the element inside the array

var order = myArr1.sort();
    console.log(order. join(' / '));

// slice return new array of the selected element

var sli = myArr.slice(1);
    console.log(sli);

var sli2 = myArr.slice(0, 3);
    console.log(sli2);

// splice delete an element and replace it

var spl = myArr.splice(1, 2);
   console.log(spl);

  myArr.splice(2, 3, 'kaky');
   console.log(myArr);
// filter return an array if all the condition is met in the function
function fil() {
  var words = ["spray", "limit", "elite", "exuberant", "destruction", "present"];
  return words.filter(function(word){
    return word.length > 6;
  })
}

console.log(fil());


var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

var invalidEntries = 0;

function isNumber(obj) {
  return obj!== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterByID(item) {
  if (isNumber(item.id)) {
    return true;
  }
  invalidEntries++;
  return false;
}

var arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 0 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries);
// Number of Invalid Entries = 4

// map

function mapArray() {
  return myArr.map(function(elem) {
    return elem * 2;
  })
}

console.log(mapArray());

function checkArr(arr , target) {
  return arr.map(function(elem) {
    if ( target === elem) {
      return true;
    }
    return false;
  })
}

console.log(checkArr(myArr2, 'one'));


// Custom higher order function for loop over an array
const _arrayEach = (array, iterator) => {
  for(let i = 0; i < array.length; i++) {
     iterator(array[i], i);
  }
};

// Custom higher order function for loop over an object
const _objectEach = (obj, iterator) => {
  for (let key in obj) {
    func(obj[key], key);
  }
};

// Custom higher order function for loop over an array and object
const _bothEach = (coll, func) => {
  if (Array.isArray(coll)) {
    for (let i = 0; i < coll.length; i++) {
      func(coll[i]);
    }
  } else {
    for (let key in coll) {
      func(coll[ke], key);
    }
  }
};

// Custom higher order function for filtering over an array
const _filter = (array, predicate) => {
  let acc = [];
  each(array, function(element, i) {
    if (predicate(element, i)) {
      acc.push(element);
    }
  });
  return acc;
};


const indexedExponent = (num) => {
  let result = [];
  each(num, (val, index) => {
   result.push(Math.pow(val, index));
  });
  return result;
};

myNum([1,2,3]);






// const _arrayEach = (array, iterator) => {
//   for(let i = 0; i < array.length; i++) {
//      iterator(array[i], i);
//   }
// };
// const indexedExponent = (num) => {
//   let result = [];
//   _arrayEach(num, (val, index) => {
//     if(val % 2 === 0) {
//    result.push(val);
//   }
//   });
//   return result;
// };
// indexedExponent([1,2,3]);
