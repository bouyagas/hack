function square(n){
  return n*n;
}
var output = square(5);
console.log(output);

// get length of word

function getLengthOfWord(word) {
  var w = word.split(' ');
  var longer = 0;
  for(var i = 0; i < w.length; i++){
    if(w[i].length > longer){
        longer = w[i].length;
    }
  }
  return longer;
}
var output = getLengthOfWord('some');
console.log(output);

// compute area of rectangle

function computeAreaOfARectangle(length, width) {
  return length * width; 
}
var output = computeAreaOfARectangle(4, 8);
console.log(output);

// compute perimeter of rectangle

function computePerimeterOfARectangle(length, width) {
  return (length * 2) + (width * 2);
}
var output = computePerimeterOfARectangle(5, 2);
console.log(output);

// compute perimeter of triangle

function computePerimeterOfATriangle(side1, side2, side3) {
  return side1 + side2 + side3;
}
var output = computePerimeterOfATriangle(6, 4, 10);
console.log(output);

// cube

function cube(num) {
  return num * num * num;
}
var output = cube(3);
console.log(output);

// get length of two words

function getLengthOfTwoWords(word1, word2) {
  var str1 = word1.length;
  var str2 = word2.length;
  return str1 + str2;
}
var output = getLengthOfTwoWords('some', 'words');
console.log(output);

// compute area of a triangle

function computeAreaOfATriangle(base, height) {
  return (base * height) / 2;
}
var output = computeAreaOfATriangle(4, 6);
console.log(output);

// average

function average(num1, num2) {
  return (num1 + num2) / 2;
}
var output = average(4, 6);
console.log(output);

// get full name

function getFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}
var output = getFullName('Joe', 'Smith');
console.log(output);

// get length of three words

function getLengthOfThreeWords(word1, word2, word3) {
  return word1.length + word2.length + word3.length;
}
var output = getLengthOfThreeWords('some', 'other', 'words');
console.log(output);

// compute square root

function computeSquareRoot(num) {
  return Math.sqrt(num);
}
var output = computeSquareRoot(9);
console.log(output);

// compute average length of words

function computeAverageLengthOfWords(word1, word2) {
  return (word1.length + word2.length) / 2;
}
var output = computeAverageLengthOfWords('code', 'programs');
console.log(output);

// double square root of num

function doubleSquareRootOf(num) {
  return Math.sqrt(num) * 2;
}
var output = doubleSquareRootOf(121);
console.log(output);

// compute tripled area of a rectangle

function computeTripledAreaOfARectangle(length, width) {
  var hyp = (length + width) / 2;
  var per = length * width * hyp;
  return per;
}
var output = computeTripledAreaOfARectangle(2, 4);
console.log(output);

// area of a triangle times 3

function computeTripledAreaOfARectangle(length, width) {
  return length * width * 3;
}
var output = computeTripledAreaOfARectangle(2, 4);
console.log(output);

// compute perimeter of a circle

function computePerimeterOfACircle(radius) {
  return 2 * Math.PI * radius;
}
var output = computePerimeterOfACircle(4);
console.log(output);

// compute area of a circle

function computeAreaOfACircle(radius) {
  var area = 2 *(( radius * 2) * Math.PI);
  return area;
}
var output = computeAreaOfACircle(4);
console.log(output); 

// compute power

function computePower(num, exponent) {
  return Math.pow(num, exponent);
}
var output = computePower(2, 3);
console.log(output);

// calculate bill total

function calculateBillTotal(preTaxAndTipAmount) {
  var tip = ((15 / 100) * preTaxAndTipAmount);
  var salesTax = ((9.5 / 100) * preTaxAndTipAmount);
  return preTaxAndTipAmount + tip + salesTax;
}
var output = calculateBillTotal(20);
console.log(output); 

// compute compound interest

function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears){
    var initialPrincipal = principal;
    var p = principal;
    var finalP = principal;
    var n = 0;
    var x = 0;
    var finalInt = 0;
    var sum = 0;
    p = (interestRate / compoundingFrequency) + 1;
    n = compoundingFrequency * timeInYears;
    x = Math.pow(p, n)
    finalInt = finalP * x - initialPrincipal;
    return finalInt;
}
var output = computeCompoundInterest(1500, .043, 4, 6);
console.log(output);

// is greater than ten

function isGreaterThanTen(num) {
  if(num > 10){
      return true;
  }
  return false;
}
var output = isGreaterThanTen(11);
console.log(output);

// is less than 30

function isLessThan30(num) {
  if(num < 30){
      return true;
  }
  return false;
}
var output = isLessThan30(9);
console.log(output);

// equals ten

function equalsTen(num) {
  if(num === 10){
      return true;
  }
  return false;
}
var output = equalsTen(9);
console.log(output);

// is less than

function isLessThan(num1, num2) {
  if(num2 < num1){
      return true;
  }
  return false;
}
var output = isLessThan(9, 4);
console.log(output);

// is greater than

function isGreaterThan(num1, num2) {
  if(num2 > num1){
      return true;
  }
  return false;
}
var output = isGreaterThan(11, 10);
console.log(output);

// is equal to

function isEqualTo(num1, num2) {
  if(num1 === num2){
      return true;
  }
  return false;
}
var output = isEqualTo(11, 10);
console.log(output);

// is even

function isEven(num) {
  if(num % 2 === 0){
      return true;
  }
  return false;
}
var output = isEven(11);
console.log(output);

// is odd

function isOdd(num) {
  if(num % 2 !== 0){
      return true;
  }
  return false;
}
var output = isOdd(9);
console.log(output);

// is even length

function isEvenLength(word) {
  if(word.length % 2 === 0){
      return true;
  }
  return false;
}
var output = isEvenLength('wow');
console.log(output);

// is odd length

function isOddLength(word) {
  if(word.length % 2 !== 0){
      return true;
  }
  return false;
}
var output = isOddLength('special');
console.log(output);

// is same length

function isSameLength(word1, word2) {
  if(word1.length === word2.length){
      return true;
  }
  return false;
}
var output = isSameLength('words', 'super');
console.log(output);

// is even and greater than ten

function isEvenAndGreaterThanTen(num) {
  if(num > 10 && num % 2 === 0){
      return true;
  }
  return false;
}
var output = isEvenAndGreaterThanTen(13);
console.log(output);

// are both odd

function areBothOdd(num1, num2) {
  if(num1 % 2 !== 0 && num2 % 2 !== 0){
      return true;
  }
  return false;
}
var output = areBothOdd(1, 3);
console.log(output);

// is either even

function isEitherEven(num1, num2) {
  if(num1 % 2 === 0 || num2 % 2 === 0){
      return true;
  }
  return false;
}
var output = isEitherEven(1, 4);
console.log(output);

// is either even and less than 9

function isEitherEvenAndLessThan9(num1, num2) {
  if((num1 % 2 === 0)  + 1 && num1 >= 9 || (num2 % 2 === 0) + 1 && num2 >= 9){
      return false;
   }else if((num1 % 2 === 0)  + 1 && num1 >= 9 && (num2 % 2 === 0) + 1 && num2 >= 9){
      return false;
   }else if(num1 % 2 === 0 + 1 && num2 % 2 === 0 + 1){
      return false;
   }
  return true;
}
var output = isEitherEvenAndLessThan9(2, 4);
console.log(output);
var output = isEitherEvenAndLessThan9(72, 2);
console.log(output);

// is either even or are both 7

// is old enough to drink

function isOldEnoughToDrink(age) {
  if(age >= 21){
      return true;
  }
  return false;
}
var output = isOldEnoughToDrink(22);
console.log(output);

// is old enough to vote

function isOldEnoughToVote(age) {
  if(age >= 18){
      return true;
  }
  return false;
}
var output = isOldEnoughToVote(22);
console.log(output);

// is old enough to drive

function isOldEnoughToDrive(age) {
  if(age >= 16){
      return true;
  }
  return false;
}
var output = isOldEnoughToDrive(22);
console.log(output);

// is old enough to drink and drive

function isOldEnoughToDrinkAndDrive(age) {
  if(age === -1){
      return true;
  }
  return false;
}
var output = isOldEnoughToDrinkAndDrive(22);
console.log(output);

// Or

function or(expression1, expression2) {
  if(expression1 === true && expression2 !== true){
      return true;
  }else if(expression1 !== true && expression2 === true){
      return true;
  }else if(expression1 === true && expression2 === true){
      return true;
  }else{
      return false;   
  }
}
var output = or(true, false);
console.log(output);

// check age

function checkAge(name, age) {
  if(age < 21){
      return 'Go home, ' + name + '!';
  }
  return 'Welcome, ' + name + '!';
}
var output = checkAge('Adrian', 22);
console.log(output);

// findMaxLengthOfThreeWords

function findMaxLengthOfThreeWords(word1, word2, word3) {
  var acc = [];
  var arr1 = [];
  var arr2 = [];
  var arr3 = [];
  var temp = [];
  var longest = 0;
  arr1.push(word1);
  arr2.push(word2);
  arr3.push(word3);
  temp = arr1.concat(arr2, arr3);
  for(var i = 0; i < temp.length; i++){
    if(temp[i].length > longest){
      longest = temp[i].length;
    }
  }
  return longest;
}
var output = findMaxLengthOfThreeWords('a', 'be', 'see');
console.log(output);

findMinLengthOfThreeWords

findShortestOfThreeWords

// areValidCredentials
function areValidCredentials(name, password) {
  if(name.length > 3 && password.length > 8){
      return true;
  }
  return false;
}
var output = areValidCredentials('Ritu', 'mylongpassword');
console.log(output);

// convertScoreToGrade

function convertScoreToGrade(score) {
  if(score <= 100 && score >= 90){
      return 'A';
  }else if(score < 90 && score >= 80){
      return 'B';
  }else if(score < 80 && score >= 70){
      return 'C';
  }else if(score < 70 && score >= 60){
      return 'D';
  }else if(score < 60 && score >= 0){
      return 'F';
  }else if(score < 0 || score > 100){
      return 'INVALID SCORE';
  }
}
var output = convertScoreToGrade(91);
console.log(output);

convertScoreToGradeWithPlusAndMinus

// computeSummationToN

function computeSummationToN(n) {
  if(n === 0){
      return 0;
  }
  return n + computeSummationToN(n - 1);
}
var output = computeSummationToN(6);
console.log(output);

// repeatString

function repeatString(string, num) {
  if(num === 0){
      return '';
  }
  return string + repeatString(string, num - 1);
}
var output = repeatString('code', 3);
console.log(output);

// computeFactorialOfN

function computeFactorialOfN(n) {
  if(n === 0){
      return 1;
  }
  return n * computeFactorialOfN(n - 1);
}
var output = computeFactorialOfN(3);
console.log(output);
var output = computeFactorialOfN(4);
console.log(output);

// computeSumBetween

function computeSumBetween(num1, num2) {
  if(num1 >= num2){
      return 0;
  }
  return num1 + computeSumBetween(num1 + 1, num2);
}
var output = computeSumBetween(2, 5);
console.log(output);

multiplyBetween

// isEvenWithoutModulo

function isEvenWithoutModulo(num) {
  if(num / 2 === Math.floor(num / 2)){
      return true;
  }
  return false;
}
var output = isEvenWithoutModulo(8);
console.log(output);

// isOddWithoutModulo

function isOddWithoutModulo(num) {
  if (num / 2 !==  Math.floor(num / 2)) {
    return true;
  }
  return false;
}
var output = isOddWithoutModulo(17);
console.log(output);

multiply

modulo

// countAllCharacters

function countCharacter(str, char) {
  var s = str.slice('');
  var charSum = [];
  var charLength = 0;
  for(var i = 0; i < str.length; i++){
    if(s[i] === char){
      charSum += s[i] ;
      charLength = charSum.length;
    }
  }
  return charLength;
}
var output = countCharacter('I am a hacker', 'a');
console.log(output);

getStringLength
—

getIndexOf

sumDigits

// getFirstElement

function getFirstElement(array) {
  if(array[0] === 0){
      return undefined;
  }
  return array[0];
}
var output = getFirstElement([1, 2, 3, 4, 5]);
console.log(output);

// getLastElement

function getLastElement(array) {
  if(array.length === 0){
      return undefined;
  }
  return array.pop();
}
var output = getLastElement([1, 2, 3, 4]);
console.log(output);

// addToBack

function addToBack(arr, element) {
  arr.push(element);
  return arr;
}
var output = addToBack([1, 2], 3);
console.log(output);

// addToFront

function addToFront(arr, element) {
  arr.unshift(element);
  return arr;
}
var output = addToFront([1, 2], 3);
console.log(output);

// removeFromBack

function removeFromBack(arr) {
  arr.pop();
  return arr;
}
var output = removeFromBack([1, 2, 3]);
console.log(output);

// getAllElementsButFirst

function getAllElementsButFirst(array) {
  array.shift();
  return array;
}
var input = [1, 2, 3, 4];
var output = getAllElementsButFirst(input);
console.log(output);

// getElementsUpTo

function getElementsUpTo(array, n) {
  var arr = array.slice(0, n);
  return arr;
}
var output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3); 
console.log(output);

// getElementsAfter

function getElementsAfter(array, n) {
  var arr = array.slice(n + 1);
  return arr;
}
var output = getElementsAfter(['a', 'b', 'c', 'd', 'e'], 2); 
console.log(output);

// getNthElement

function getNthElement(array, n) {
  var arr = array[n];
  return arr;
}
var output = getNthElement([1, 3, 5], 1);
console.log(output);

// joinArrays

function joinArrays(arr1, arr2) {
  var newArr = arr1.concat(arr2);
  return newArr;
}
var output = joinArrays([1, 2], [3, 4]);
console.log(output);

// getAllElementsButLast

function getAllElementsButLast(array) {
  var acc = [];
  for(var i = 0; i < array.length - 1; i++){
      acc.push(array[i]);
  }
  return acc;
}
var input = [1, 2, 3, 4];
var output = getAllElementsButLast(input);
console.log(output); 

// removeFromFront

function removeFromFront(arr) {
  var acc = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] > arr[0]){
        acc.push(arr[i]);
    }
  }
  return acc;
}
var output = removeFromFront([1, 2, 3]);
console.log(output);

// joinArrayOfArrays

function joinArrayOfArrays(arr) {
  var acc = [];
  for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
      acc.push(arr[i][j]);
    }
  }
  return acc;
}
var output = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output);

// getAllElementsButNth

function getAllElementsButNth(array, n) {
  var acc = [];
  for(var i = 0; i < array.length; i++){
      if(array[i] !== array[n]){
        acc.push(array[i]);
      }
  }
  return acc;
}
var output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output);

// addToBackOfNew

function addToBackOfNew(arr, element) {
  var arr2 = [element];
  return arr.concat(arr2);
}
var input = [1, 2];
var output = addToBackOfNew(input, 3);
console.log(input); // --> [1, 2]
console.log(output);

// addToFrontOfNew

function addToFrontOfNew(arr, element) {
  var arr2 = [element];
  return arr2.concat(arr);
}
var input = [1, 2];
var output = addToFrontOfNew(input, 3);
console.log(output); // --> [3, 1, 2];
console.log(input); // --> [1, 2]

// removeFromBackOfNew

function removeFromBackOfNew(arr) {
  var newArr = [];
  for(var i = 0; i < arr.length - 1; i++){
      newArr.push(arr[i]);
  }
  return newArr;
}
var arr = [1, 2, 3];
var output = removeFromBackOfNew(arr);
console.log(output); // --> [1, 2]
console.log(arr); // --> [1, 2, 3]

// computeSumOfAllElements

function computeSumOfAllElements(arr) {
  var acc = 0;
  for(var i = 0; i < arr.length; i++){
    acc += arr[i] ;
  }
  return acc;
}
var output = computeSumOfAllElements([1, 2, 3]);
console.log(output); // --> 6

// joinThreeArrays

function joinThreeArrays(arr1, arr2, arr3) {
  var newArr = arr1.concat(arr2);
  var finalArr = newArr.concat(arr3);
  return finalArr;
}
var output = joinThreeArrays([1, 2], [3, 4], [5, 6]);
console.log(output); // --> [1, 2, 3, 4, 5, 6]

// getLargestElement

function getLargestElement(arr) {
  var result = 0;
  var max = arr[0];
  for(var i = 0; i < arr.length; i++){
      if(arr[i] > max){
        max = arr[i];
      }
  }
  return max;
}
var output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;

findShortestElement
—
Oct.13.2016
No progress

// removeFromFrontOfNew

function removeFromFrontOfNew(arr) {
  var acc = [];
  for(var i = 0; i < arr.length; i++){
      if(arr[i] > arr[0]){
         acc.push(arr[i]);
      }
  }
  return acc;
}
var arr = [1, 2, 3];
var output = removeFromFrontOfNew(arr);
console.log(output); // --> [2, 3]
console.log(arr); // --> [1, 2, 3]

// findSmallestElement

function findSmallestElement(arr) {
  var min = arr[0];
  for(var i = 1; i < arr.length; i++){
    if(arr[i] < min){
        min = arr[i];
    }
  }
  return min;
}
var output = findSmallestElement([4, 1, 9, 10]);
console.log(output);

getLongestElement
—
Oct.13.2016
No progress
// getLengthOfShortestElement

function getLengthOfShortestElement(arr) {
  var shorter = arr;
  for(var i = 0; i < arr.length; i++){
    if(arr[i].length < arr[0].length){
        shorter = arr[i];
    }
  }
  return shorter.length;
}
var output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3

// filterEvenElements

function filterEvenElements(arr) {
  var evens = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0){
      evens.push(arr[i]);
    }
  }
  return evens;
}
var output = filterEvenElements([2, 3, 4, 5, 6]);
console.log(output); // --> [2, 4, 6]

computeProductOfAllElements
—
Oct.13.2016
No progress
// filterOddElements

function filterOddElements(arr) {
  var odds = [];
  for(var i = 0; i < arr.length; i++){
    if(arr[i] % 2 === 0 + 1){
      odds.push(arr[i]);
    }
  }
  return odds;
}
var output = filterOddElements([1, 2, 3, 4, 5]);
console.log(output); // --> [1, 3, 5]

// squareElements

function squareElements(arr) {
  var acc = [];
  for(var i = 0; i < arr.length; i++){
    acc.push((arr[i]) * (arr[i]));
  }
  return acc;
}
var output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]

// filterEvenLengthWords

function filterEvenLengthWords(words) {
  var evens = [];
  for(var i = 0; i < words.length; i++){
    if(words[i].length % 2 === 0){
      evens.push(words[i]);
    }
  }
  return evens;
}
var output = filterEvenLengthWords(['word', 'words', 'word', 'words']);
console.log(output); // --> ['word', 'word']

// getLengthOfLongestElement

function getLengthOfLongestElement(arr) {
  var longer = arr;
  for(var i = 0; i < arr.length; i++){
    if(longer[i].length > arr[0].length){
      longer = arr[i];
    }
  }
  return longer.length;
}
var output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5

getLargestNumberAmongMixedElements
—
Oct.13.2016
No progress

// filterOddLengthWords

function filterOddLengthWords(words) {
  var odds = [];
  for(var i = 0; i < words.length; i++){
    if(words[i].length % 2 === 0 + 1){
      odds.push(words[i]);
    }
  }
  return odds;
}
var output = filterOddLengthWords(['there', 'it', 'is', 'now']);
console.log(output); // --> ['there', "now']

getLongestWordOfMixedElements
—
Oct.13.2016
No progress
findSmallestNumberAmongMixedElements
—
Oct.13.2016
No progress

// computeAverageOfNumbers

function computeAverageOfNumbers(nums) {
  var avg = 0;
  var sum = 0;
  for(var i = 0; i < nums.length; i++){
    sum += nums[i];
    avg = sum / nums.length;
  }
  return avg;
}
var input = [1,2,3,4,5];
var output = computeAverageOfNumbers(input);
console.log(output); // --> 3

findShortestWordAmongMixedElements
—
Oct.13.2016
No progress
// keep

function keep(array, keeper) {
  var acc = [];
  for(var i = 0; i < array.length; i++){
    if(array[i] === keeper){
      acc.push(array[i]);
    }
  }
  return acc;
}
var output = keep([1, 2, 3, 2, 1], 2); 
console.log(output); // --> [2, 2]

// removeElement

function removeElement(array, discarder) {
  var acc = [];
  for(var i = 0; i < array.length; i++){
    if(array[i] !== discarder){
      acc.push(array[i]);
    }
  }
  return acc;
}
var output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]

// countCharacter

function countCharacter(str, char) {
  var counter = [];
  var s = str.split('');
  for(var i = 0; i < str.length; i++){
    if(s[i] === char){
      counter += s[i];
    }
  }
  return counter.length;
}
var output = countCharacter('I am a hacker', 'a');
console.log(output); // --> 3

// getAllLetters

function getAllLetters(str) {
  var s = str.split('');
  var acc = [];
  for(var i = 0; i < str.length; i++){
    acc.push(s[i]);
  }
  return acc;
}
var output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']

// getAllWords

function getAllWords(str) {
  var words = str.split(' ');
  var acc = [];
  for(var i = 0; i < str.length; i++){
    acc = words; 
  }
  return acc;
}
var output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']

// convertDoubleSpaceToSingle

function convertDoubleSpaceToSingle(str) {
  return str.replace(/\s+/g, ' ');
}
var output = convertDoubleSpaceToSingle("string  with  double  spaces");
console.log(output); // --> "string with double spaces"

// addProperty

function addProperty(obj, key) {
  obj[key] = true;
}
var myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty); // --> true

// removeProperty

function removeProperty(obj, key) {
  obj[key] = undefined;
}
var obj = {
  name: 'Sam',
  age: 20
};
removeProperty(obj, 'name');
console.log(obj.name); // --> undefined

// addArrayProperty

function addArrayProperty(obj, key, arr) {
  obj[key] = arr;
}
var myObj = {};
var myArray = [1, 3];
addArrayProperty(myObj, 'myProperty', myArray);
console.log(myObj.myProperty); // --> [1, 3]

// addObjectProperty

function addObjectProperty(obj1, key, obj2) {
  obj1[key] = obj2;
}
var person1 = {
  name: 'Joe Blow',
  role: 'schlub'
};
var person2 = {
  name: 'Mr. Burns',
  role: 'supervisor'
};
addObjectProperty(person1, 'manager', person2);
console.log(person1.manager); // --> { name: 'Mr. Burns', role: 'supervisor' }

// getProperty

function getProperty(obj, key) {
  return obj[key];
}
var obj = {
  key: 'value'
};
var output = getProperty(obj, 'key');
console.log(output); // --> 'value'

getElementOfArrayProperty
—
Oct.14.2016
No progress
// isPersonOldEnoughToDrink

function isPersonOldEnoughToDrink(person) {
  if(person.age < 21){
      return false;
  }
  return true;
}

var obj = {
  age: 16
};
var output = isPersonOldEnoughToDrink(obj);
console.log(output); // --> false

var obj = {
  age: 45
};
function isPersonOldEnoughToDrinkAndDrive(person) {
  if(person > 0){
      return false;
  }
  return false;
}
var output = isPersonOldEnoughToDrinkAndDrive(obj);
console.log(output); // --> false

removeStringValues
—
Oct.14.2016
No progress
isPersonOldEnoughToVote
—
Oct.14.2016
No progress
removeNumberValues
—
Oct.14.2016
No progress
removeArrayValues
—
Oct.14.2016
No progress
removeOddValues
—
Oct.14.2016
No progress
isPersonOldEnoughToDrive
—
Oct.14.2016
No progress
countNumberOfKeys
—
Oct.14.2016
No progress
removeEvenValues
—
Oct.14.2016
No progress
removeStringValuesLongerThan
—
Oct.14.2016
No progress
addFullNameProperty
—
Oct.14.2016
No progress
removeNumbersLargerThan
—
Oct.14.2016
No progress
removeNumbersLessThan
—
Oct.14.2016
No progress
getFirstElementOfProperty
—
Oct.14.2016
No progress
getLastElementOfProperty
—
Oct.14.2016
No progress
getNthElementOfProperty
—
Oct.14.2016
No progress
getAllButLastElementOfProperty
—
Oct.14.2016
No progress
getSumOfAllElementsAtProperty
—
Oct.14.2016
No progress
getProductOfAllElementsAtProperty
—
Oct.14.2016
No progress
getLargestElementAtProperty
—
Oct.14.2016
No progress
getSmallestElementAtProperty
—
Oct.14.2016
No progress
getEvenElementsAtProperty
—
Oct.14.2016
No progress
getOddElementsAtProperty
—
Oct.14.2016
No progress
getSquaredElementsAtProperty
—
Oct.14.2016
No progress
getEvenLengthWordsAtProperty
—
Oct.14.2016
No progress
getOddLengthWordsAtProperty
—
Oct.14.2016
No progress
getAverageOfElementsAtProperty
—
Oct.14.2016
No progress
getElementsGreaterThan10AtProperty
—
Oct.14.2016
No progress
getElementsLessThan100AtProperty
—
Oct.14.2016
No progress
getElementsThatEqual10AtProperty
—
Oct.14.2016
No progress
isPersonOldEnoughToDrinkAndDrive
—
Oct.14.2016
No progress
countWords
—
Oct.14.2016
No progress
countAllCharacters
—
Oct.14.2016
No progress
select
—
Oct.14.2016
No progress
extend
—
Oct.14.2016
No progress

// Answers

// Write a function called "getLargestNumberAmongMixedElements". 

// Given any array, "getLargestNumberAmongMixedElements" returns the largest number in the given array.

// Notes:
// * The array might contain values of a type other than numbers.
// * If the array is empty, it should return 0.
// * If the array contains no numbers, it should return 0.

function getLargestNumberAmongMixedElements(arr) {
  // your code here
  //var largestNumber = arrNums[0]; 
  var arrNums = []
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number"){
      arrNums.push(arr[i]); 
    }
  }
  var largestNumber = arrNums[0]; 
  if (arr.length === 0) { //check if array is empty
      return 0; 
  }
  else if (arrNums.length === 0) {
    return 0; //check if arrayNums is empty
  }
  else {
      arrNums.forEach(function(element){
          if (element > largestNumber){
              largestNumber = element; 
          }
      });
      return largestNumber
  //create new array consisting of numbers
  //if such an array is empty return 0 
  }
}
var output = getLargestNumberAmongMixedElements(["name", -4, -1, -11]);
//console.log(output);

//recursive multiply
function multiply(num1, num2) {
  // your code here
  if (num2 === 0) {
      return 0; 
  }
  if (num2 < 0) {
      return num1 + multiply(num1, num2 + 1); 
  }
  return num1 + multiply(num1, num2 - 1); 
}
var output = multiply(-5, -6);
//console.log(output);


// Write a function called "getEvenLengthWordsAtProperty".

// Given an object and a key, "getEvenLengthWordsAtProperty" returns an array containing all the even length word elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If it contains no even length elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the key, it should return an empty array.

// var obj = {
//   key: ['a', 'long', 'game']
// };
// var output = getEvenLengthWordsAtProperty(obj, 'key');
// console.log(output); // --> ['long', 'game']

function getEvenLengthWordsAtProperty(obj, key) {
  // your code here
  var property = obj[key];
  var evenWords = []; 
  if (!property) {
      return []; 
  }
  else if (!Array.isArray(property)) {
      return []; 
  }
  else if (property.length === 0) {
      return property; 
  }
  for (var i = 0; i < property.length; i++) {
          if (property[i].length % 2 === 0) {
              evenWords.push(property[i]); 
          }
  }
  return evenWords; 
}

var obj = {
  key: ['a', 'long', 'game']
};
var output = getEvenLengthWordsAtProperty(obj, 'key');
//console.log(output); // --> ['long', 'game']

// Write a function called "getEvenElementsAtProperty".

// Given an object and a key, "getEvenElementsAtProperty" returns an array containing all the even elements of the array located at the given key.

// Notes:
// * If the array is empty, it should return an empty array.
// * If the array contains no even elements, it should return an empty array.
// * If the property at the given key is not an array, it should return an empty array.
// * If there is no property at the given key, it should return an empty array.

function getEvenElementsAtProperty(obj, key) {
  // your code here
  var property = obj[key]; 
  var evenElements = []; 
  if (!property){
      return []; 
  }
  else if (property.length === 0){
      return []; 
  }
  else if (!Array.isArray(property)) {
      return []; 
  }
  for (var i = 0; i < property.length; i++) {
      if (property[i] % 2 === 0) {
          evenElements.push(property[i]); 
      } 
  }
  if (evenElements.length === 0) {
      return []; 
  }
  else {
      return evenElements; 
  }
}
var obj = {
  key: [1000, 11, 50, 17]
};
var output = getEvenElementsAtProperty(obj, 'key');
//console.log(output);

function getElementOfArrayProperty(obj, key, index) {
  // your code here
  var property = obj[key]; 
  //console.log(property); 
  if (!property) {
      return undefined;
  }
  else if (property.length === 0) {
      return undefined; 
  }
  else if (!Array.isArray(property)) {
      return undefined; 
  }
  else if (property[index] === "undefined") {
      return undefined; 
  }
    return property[index]; 
}
var obj = {
 key: ['Jamil', 'Albrey']
};
var output = getElementOfArrayProperty(obj, 'key', 0); 
//console.log(output); // --> 'Jamil'

function multiply(num1, num2) {
  // your code here
 var total = 0; 
if (num1 > 0 && num2 > 0) {
    for (; num2 > 0; num2 = num2 - 1) {
        total = total + num1; 
    }
    return total; 
  }
else if (num1 === 0 || num2 === 0) {
  return total; 
  }
else if (num1 < 0 && num2 < 0) {
  for (; num2 < 0; num2 = num2 + 1) {
    total = total + num1; 
  }
  return -total; 
}
else if (num1 > 0 && num2 < 0) {
    for(; num2 < 0; num2 = num2 + 1) {
      total = total - num1
    }
    return total; 
  }
else if (num1 < 0 && num2 > 0) {
  for(; num2 > 0; num2 = num2 - 1) {
      total = total + num1
    }
    return total; 
}
} 
var output = multiply(-2, -2);
//console.log(output); // --> 28

// Write a function called "getStringLength".

// Given a string, "getStringLength" returns the length of the given string.

// Notes:
// * Do NOT use any native 'length' methods.
// * You might consider using 'substring' or 'slice' as alternatives.

function getStringLength(string) {
  // your code here
  //have a temp thing/
  //keep changing it until temp thing is zero
  var temp
  var count = 0
  var n = 1; 
  while (string !== "") {
      string = string.substring(1); 
      count = count + 1; 
  }
  return count; 
}

function myLength(s){
 return s.split('').reduce(function(prevVal, currElement){
  //inside the iterative function block
  return prevVal + 1;
 }, 0);  //need to have the very first 'prevVal' to work with on the 1st 
         //iteration only
}

//reference: https://danmartensen.svbtle.com/javascripts-map-reduce-and-filter

var output = getStringLength('hello');

//console.log(output); // --> 5

function findShortestWordAmongMixedElements(arr) {
  // your code here
  if (arr.length === 0) {
      return "";
  }
  var arrStr = []; 
  for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") {
          arrStr.push(arr[i]); 
      }
  }
  if (arrStr.length === 0) {
      return ""; 
  }
  var shortestWord = arrStr[0]; 
  for (var k = 0; k < arrStr.length; k++) {
      if (arrStr[k].length < shortestWord.length) {
          shortestWord = arrStr[k]; 
      }
      else if (shortestWord.length = arrStr[k].length) {
          shortestWord; 
      }
  }
  return shortestWord; 
}
var output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'