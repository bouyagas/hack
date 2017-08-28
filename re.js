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







function each (coll , func){
  if ( Array.isArray(coll)){
    for (var i=0 ; i < coll.length ;i++){
      func(coll[i],i);
    }
  } else {
    for (var key in coll){
      func(coll[key],key);
    }
  }
}


function squares (nums){
  var newArray = [] ;
  each(nums, function(num , ind){
    newArray.push ( num*num );
  });
  return newArray ;
}

var nums = [1,2,3,4] ;
//console.log(squares(nums));

var obj = {a:1 , b:2 , c:3} ;
//console.log(squares(obj));
obj;

squares(obj);
function  keysLongerThan ( obj  , num ){
  var newObj = {};


      each(obj , function (value , label){
        if (label.length > num){
          newObj[label] =  value;
        }

      });

  return newObj ;

}

keysLongerThan({name: 'Annyeong', age: 25, favoriteColor: 'blue'}, 3);
 // => {name: 'Annyeong', favoriteColor: 'blue'}

 keysLongerThan({name: 'Annyeong', age: 25, favoriteColor: 'blue'}, 4);
 // => {favoriteColor: 'blue'}

 /*
 Write a function called incrementValues that accepts an object as a parameter, and outputs an object with all of its numeric values incremented by one. You'll want to use the updated version of each for this, and you will need to check the type of each value to determine whether or not it should be incremented. HINT: Try entering the following expressions in to your console:
 */




 function incrementValues (obj){
 var newObj = {};


 each (obj , function (ele , key){
   if (typeof  ele === 'number') {
   newObj[key]= ele + 1;
   }
 } ) ;

 return newObj;
 }



 typeof 'hello'; // => 'string'
 typeof 1;       // => 'number'
 typeof true;    // => 'boolean'
 typeof [];    // => 'object'
typeof {};    // => 'object'

incrementValues (obj);


/*
Write a function called objectToArrayOrArrayToObject that takes an array or an object and transforms any array or object within the array or object into an object or array.
*/

 function objectToArrayOrArrayToObject(collection) {

function changer (collection ){

   if (Array.isArray(collection)) {
     var newObj = {};
          each( collection , function ( ele , ind ){
            newObj[ind]   =  changer(ele) ;
          });
     return newObj;
   } else if (typeof collection === "object" ) {
       var newArray= [];
       each (collection, function(value,key){
        newArray.push(changer(value));
       });

       return newArray;
  }
     return collection ;
}


each(collection , function(ele ,ind){
    collection[ind] = changer(ele);
});
return collection ;

 }
 var ex = {ages: [23, 44, {min: 1, max: 2}], people: {height: 'tall', eye_color: 'brown'}};
 objectToArrayOrArrayToObject(ex);
 // {ages: {0: 23, 1: 44, 2: [1, 2]} people: ['tall', 'brown']}
/*
.Write a function called oddEvenArray that accepts an object
 as parameter and return array of numbers of the key values
 of the object ( you need to arrange the new array,
  odd numbers will be at the beginning of the array,
   then the even numbers will be at the end of the array)
*/
 function oddEvenArray(object){
    let odd = [];
    let even = [];
    each (object, function(value, key){
      if (value % 2 !== 0 ) {
        odd.push(value);
      } else {
        even.push(value);
      }
    });
    odd.sort(function(a,b){return a-b});
    even.sort(function(a,b){return b-a});
    return odd.concat(even);
 }
 oddEvenArray({a:3,b:5 ,c: 4 ,d: 1, e:10, f:12 ,g:56 ,h:44 ,i:32}); // ==> [3,5,1,4,10,12,56,44,32]
  //return the odd numbers ordered Ascending and the even numbers descending
 oddEvenArray({a:3,b:5 ,c: 4 ,d: 1, e:10, f:12 ,g:56 ,h:44 ,i:32}); // ==> [1,3,5,56,44,32,12,10,4]


/*
Write a function called isPrimeArray that accepts an object
as parameter and return array of prime numbers in the
object
*/
 function isPrime(object){
      var array = [];
      each ( object  , function(value , key){
        var Prime = true ;
        for (var i = 2 ; i < value; i++) {
          if (value%i === 0){
            Prime = false ;
            break;
           }
          }
        if (Prime) {
          array.push(value) ;
        }
      } );
     return array;
}
 isPrime({a:3,b:5 ,c: 4 ,d: 1, e:10, f:12 ,g:56 ,h:44 ,i:32}); // ==> [3,5,1]





var people = [{
  name: {
    first: 'Majd',
    middle: 'Eddin',
  },
  age: 30
}, {
  name: {
    first: 'Fatima',
    last: 'Himmamy'
  },
  age: 26
}, {
  name: {
    first: 'Sahar',
    middle: 'MHD'
  },
  age: 27
}, {
  name: {
    first: 'Nour',
    middle: 'Eddin',
  },
  age: 15
}, {
  name: {
    first: 'Ahmad',
    last: 'Awad'
  },
  age: 33
}];
function converter (person){
  var edited = person;
  edited.age = (edited.age * 365*24*60) + ' minutes' ;
  return edited;
}

function agesToMinutes(people){
  return map( people , function ( person  , ind ){
    return converter (person);
  } );
}



function passwordHealth(password) {
  var criteria = {} ;

  criteria.smalls = /[a-z]/.test(password);
  criteria.capitsls = /[A-Z]/.test(password);
  criteria.numbers = /[\d]/.test(password);
  criteria.symbols = /\W/.test(password);

  var checks = 0;
  each(criteria, function(value){
    if(value === true) checks++;
  });

  if(checks === 4){
    return 'strong';
  }else if(checks >= 2){
    return 'normal';
  }else{
    return 'weak';
  }
}

function needFlag (password){
  if (password.length >= 8){
    return true;
  }
  return false ;
}


function securityCheck (array) {
  return map(array,function( account ,  ind ){
    account.user['flag'] = needFlag(account.user.password);
    account.user.passwordHealth = passwordHealth(account.user.password);
    return account;
  });
}

 var usersData = [
       { user: {email: 'majd@rbk.org', password: '_majd(2017)'}},
       { user: {email: 'fatema@rbk.org', password: '12345'}},
       { user: {email: 'maher@rbk.org', password: 'M@her2017'}},
       { user: {email: 'sahar@rbk.org', password: 'saher2017'}}
 ];

function filter(coll, condition){
  var output = {};
  if(typeof coll === 'object'){
    if(Array.isArray(coll)){
      output = [];
      each(coll, function(element, index){
        if(condition(element, index)){
          output.push(element);
        }
      });
    }else{
      each(coll, function(element, key){
        if(condition(element, key)){
          output[key] = element;
        }
      });
    }
    return output;
  }
  return coll;
}



function evens(arr){
  function isEven(num){
    return num % 2 === 0;
  }
  return filter(arr, isEven);
}

function multipliesOfThree(arr){
  function isDivisableBy3(num){
    return num % 3 === 0;
  }
  return filter(arr, isDivisableBy3);
}

function positives (arr){
  return filter (arr,function(num){
    return num >=0 ;
  });
}

function evenLength (arr){
  return filter (arr,function(str){
    return !(str.length %2)  ;
  });
}

function odds(arr){
  return filter(arr, function(num){ return num % 2 });
}

function negatives (arr){
  return filter (arr,function(num){
    return num < 0 ;
  });
}

function largerThanSix (arr){
  return filter (arr,function(num){
    return num > 6;
  });
}


function startsWithChar (arr, char){
  return filter(arr,function(ele){
    return (new RegExp ('^' + char , 'i')).test(ele) ;
  });
}

function evenIndexedEvenLengths(arr){
  return filter(arr, function(element, index){
    return (element.length % 2 === 0) && (index % 2 === 0) ;
  });
}
//maram_alquraan  solution for ex 5 at filter lecture ,

var newarray=[2,0,3,0,40,3,6,0,10,11];

function moveZero(array){
     var arr1=[];
     var arr2=[];
     arr1= filter2(array,function(element,i){
             return element===0;
     });
     arr2= filter2(array,function(element,i){
             return element!==0;
     });
           return arr2.concat(arr1);
}

function moveZero(arr){
  var zeroCounter = 0;
  var output = filter(arr, function(num, i){
    if(num !== 0){
      return true
    }
    zeroCounter++;
    return false;
  });
  for(var i = 0 ; i < zeroCounter ; i++){
    output.push(0);
  }
  return output;
}
 var usersData = [
       { user: {email: 'majd@rbk.org', password: '_Majd(2017)'}},
       { user: {email: 'fatema@rbk.org', password: '12345'}},
       { user: {email: 'maher@rbk.org', password: 'M@her2017'}},
       { user: {email: 'sahar@rbk.org', password: 'saher2017'}}
 ];


 function strongPasswords(array){
       return filter(array , function( account ){
          return needFlag(account.user.password) && (passwordHealth(account.user.password) === 'strong');
       });
 }








