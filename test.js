function countWords(str) {
  // your code here
  var word = str.split(' ');

  var obj = {};
  for(var i = 0; i < word.length; i++ ){
   obj[word[i]] = (obj[word[i]] || 0) + 1
  }
  return obj;
}

var text = 'For years, Mr. Netanyahu has sought to recalibrate relations with Sunni Arab nations in a mutual bid to counter the Shiite-led Iran, while subordinating the Palestinian dispute as a secondary issue. But as Mr. Trump arrived in Jerusalem after meetings in Saudi Arabia, the president indicated that he and those Arab states see an agreement with the Palestinians as integral to that new regional alignment. On those issues, there is a strong consensus among the nations of the world — including many in the Muslim world,” Mr. Trump said. “I was deeply encouraged by my conversations with Muslim world leaders in Saudi Arabia, including King Salman, who I spoke to at great length. King Salman feels very strongly and, I can tell you, would love to see peace with Israel and the Palestinians.Mr. Trump added that line to the remarks prepared for him, in effect tying the future of the anti-Iran coalition to the Palestinian issue despite Mr. Netanyahu’s longtime efforts to unlink the two. “There is a growing realization among your Arab neighbors that they have common cause with you in the threat posed by Iran, and it is indeed a threat, there’s no question about that,” Mr. Trump said.'
var output = countWords(text);
console.log(output);
console.log('There are ' + text.length + ' letter!');
console.log('There are ' + text.split(" ").length + ' word!')

//.......................................................................

function countLetters(str) {
  // your code here
  var word = str.split('');
  var obj = {};
  for(var i = 0; i < word.length; i++ ){
   obj[word[i]] = (obj[word[i]] || 0) + 1
  }
  return obj;
}

var text = 'For years, Mr. Netanyahu has sought to recalibrate relations with Sunni Arab nations in a mutual bid to counter the Shiite-led Iran, while subordinating the Palestinian dispute as a secondary issue. But as Mr. Trump arrived in Jerusalem after meetings in Saudi Arabia, the president indicated that he and those Arab states see an agreement with the Palestinians as integral to that new regional alignment. On those issues, there is a strong consensus among the nations of the world — including many in the Muslim world,” Mr. Trump said. “I was deeply encouraged by my conversations with Muslim world leaders in Saudi Arabia, including King Salman, who I spoke to at great length. King Salman feels very strongly and, I can tell you, would love to see peace with Israel and the Palestinians.Mr. Trump added that line to the remarks prepared for him, in effect tying the future of the anti-Iran coalition to the Palestinian issue despite Mr. Netanyahu’s longtime efforts to unlink the two. “There is a growing realization among your Arab neighbors that they have common cause with you in the threat posed by Iran, and it is indeed a threat, there’s no question about that,” Mr. Trump said.'
var output = countWords(text);
console.log(output);

//.......................................................................

function removeNumbersLargerThan(num, obj) {
  // your code here
   for (var key in obj) {
    if(!isNaN(obj[key]) && obj[key] > num)
      delete obj[key];
  }
}


var obj = {
  a: 8,
  b: 2,
  c: 'montana',
  d: 45
}
removeNumbersLargerThan(5, obj);
console.log(obj);


var titles = ['kaky', 'bouya', 'he']

function arrTitle(arr, target){
for (var i = 0; i < arr.length; i++) {
   if (arr[i] === target) {
    console.log(true);
   }else{
   console.log(false);
   }
  }
}


//=====================================================

const titles = ['kaky', 'bouya', 'he']

const titleInsideArray = (arr, target) => {
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === target){
         return true;
      }
    }
    return false;
};

titleInsideArray(titles, 'he');



var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
const titleInsideObject = (obj, target) => {
for(var x in languages) {
  if(languages[x] === target) {
    return true;
  }
 }
 return false;
}
 titleInsideObject(languages, 'Hola!')
//=======================================================
const verifiedSubstring = (subS, target) =>{
  let veri = subS.substring(0, 10)
  for (var i = 0; i < veri.length; i++){
    if(veri[i] === target){
      return 'This is string has a `' + target + '` in it!'
    }
  }
   return 'This is string does not has a `' + target + '` in it!'
}


lengthOfSubstring('Mohamed gassama' , 'z')




//[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]
var userChoice = prompt("Do you choose rock, paper or scissors?");

var computerChoice = Math.random();

if (computerChoice < 0.34) {
  computerChoice = "rock";
} else if(computerChoice <= 0.67) {
  computerChoice = "paper";
} else {
  computerChoice = "scissors";
} console.log("Computer: " + computerChoice);

var compare = function(choice1, choice2){
    if (choice1 === choice2){
    return "The result is a tie!"
    }

    else if (choice1 ==="rock"){
        if(choice2 === "scissors"){
            return "rock wins";
            }
        else{
            return "scissors wins"
            }
        }

        else if (choice1 === "paper"){
            if (choice2 === "rock"){
                return "paper wins"
                }
            else {
                return "scissors wins"
                }
            }

       else if (choice1 === "scissors"){
           if(choice2 === "rock"){
               return "rock wins"
               }
           else {
               return "scissors wins"
               }
           }
    };


    var myGame = compare(userChoice, computerChoice);
    console.log(myGame);



    myText = `Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric`;
var myName = "Eric";

const addArray = (text, name) => {
  var hits = [];
  // Look for "E" in the text
  for(var i = 0; i < text.length; i++) {
    if (text[i] === "E") {
      // If we find it, add characters up to
      // the length of my name to the array
      for(var j = i; j < (name.length + i); j++) {
        hits.push(text[j]);
      }
    }
  }



  if (hits.length === 0) {
    console.log("Your name wasn't found!");
  } else {
    console.log(hits);
  }
}

addArray(myText, myName);


// ,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,

function build(){
    var troll = prompt("You're walking through the forest, minding your own business, and you run into a troll! Do you FIGHT him, PAY him, or RUN?").toUpperCase();

    switch(troll) {
      case 'FIGHT':
        var strong = prompt("How courageous! Are you strong (YES or NO)?").toUpperCase();
        var smart = prompt("Are you smart?").toUpperCase();
        if(strong === 'YES' || smart === 'YES') {
          console.log("You only need one of the two! You beat the troll--nice work!");
        } else {
          console.log("You're not strong OR smart? Well, if you were smarter, you probably wouldn't have tried to fight a troll. You lose!");
        }
        break;
      case 'PAY':
        var money = prompt("All right, we'll pay the troll. Do you have any money (YES or NO)?").toUpperCase();
        var dollars = prompt("Is your money in Troll Dollars?").toUpperCase();
        if(money === 'YES' && dollars === 'YES') {
          console.log("Great! You pay the troll and continue on your merry way.");
        } else {
          console.log("Dang! This troll only takes Troll Dollars. You get whomped!");
        }
        break;
      case 'RUN':
        var fast = prompt("Let's book it! Are you fast (YES or NO)?").toUpperCase();
        var headStart = prompt("Did you get a head start?").toUpperCase();
        if(fast === 'YES' || headStart === 'YES') {
          console.log("You got away--barely! You live to stroll through the forest another day.");
        } else {
          console.log("You're not fast and you didn't get a head start? You never had a chance! The troll eats you.");
        }
        break;
      default:
        console.log("I didn't understand your choice. Hit Run and try again, this time picking FIGHT, PAY, or RUN!");
    }
}

build()









// .............................................................


function program(){
  var user = prompt("Hey my name is Mr Javascript. what is your favorite programming language other then me RUBY, PHYTHON, PHP?", "Type you answer here!").toUpperCase();

  switch(user){
    case 'RUBY':
      var rails = prompt("Is rails your favoite in ruby language yes or no ?").toUpperCase();
      var sinatra = prompt("Is sinatra powerful than rails ?").toUpperCase();

        if((rails || sinatra) === "no" ){
          console.log("That is a nice remark because rails is  more is use in tech startups sinatra is mainly when creating DSL or API");
          }else{
          console.log("I don't know what you're saying" );
                  }
               break;

          case 'PYTHON':
          var djago = prompt("Python is consider to be the must power because of it's framework djago is that's true yes or no").toUpperCase();
          var jpython = prompt("Is jpython is great idea ")
          if(djago === "yes" && jpython === "no"){
              console.log("You're a great python programmer");
              }else{
                  console.log("Good for you");
              }
          break;

          case 'PHP':
          var ans = prompt("Does Mark Zurkerburg built the first version of Facbook in PHP ? YES or NO").toUpperCase();

            if(ans === "yes"){
              console.log("You are the best");
              }else{
                  console.log("Your don't know it");
              }
              break;

               default:
               console.log("Mr Javascipt is the must web programming language use I'm everywhere in the web!!!");
               }
             }




//..........................................................



var friends = {};
friends.bill = {
  firstName: "Bill",
  lastName: "Gates",
  number: "(206) 555-5555",
  address: ['One Microsoft Way','Redmond','WA','98052']
};
friends.steve = {
  firstName: "Steve",
  lastName: "Jobs",
  number: "(408) 555-5555",
  address: ['1 Infinite Loop','Cupertino','CA','95014']
};

var list = function(obj) {
  for(var prop in obj) {
    console.log(prop);
  }
};

var search = function(name) {
  for(var prop in friends) {
    if(friends[prop].firstName === name) {
      console.log(friends[prop]);
      return friends[prop];
    }
  }
};

list(friends);
search("Steve");


//.........



// Our person constructor
function Person (name, age) {
    this.name = name;
    this.age = age;
}

// Now we can make an array of people
var family = [];
family[0] = new Person("alice", 40);
family[1] = new Person("bob", 42);
family[2] = new Person("michelle", 8);
family[3] = new Person('timmy', 6);


for(var i = 0; i < family.length; i++){
    console.log(family[i]);
}


//  Game of FizzBuzz.
// const fizzBuzz = () => {
//   for(var i = 1; i <= 20; i++) {
//     if( i%3 === 0 ) {
//       if( i%5 === 0) {
//         console.log("FizzBuzz");
//       }else if(i%3===0) {
//         console.log("Fizz");
//       }
//     }else if( i%5===0 ) {
//       console.log("Buzz");
//     }else console.log(i);
//   }
// };


const fizzBuzz = () => {
  for(var i = 1; i <= 20; i++) {
    if( i%3 === 0  && i%5 === 0) {
        console.log("FizzBuzz");
      }else if (i%3===0){

        console.log("Fizz");
      }
    else if( i%5===0 ) {
      console.log("Buzz");
    }else console.log(i);
  }
};

fizzBuzz();

// address book

var bob = {
    firstName: "Bob",
    lastName: "Jones",
    phoneNumber: "(650) 777-7777",
    email: "bob.jones@example.com"
};

var mary = {
    firstName: "Mary",
    lastName: "Johnson",
    phoneNumber: "(650) 888-8888",
    email: "mary.johnson@example.com"
};

var contacts = [bob, mary];

function printPerson(person) {
    console.log(person.firstName + " " + person.lastName);
}

function list() {
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        printPerson(contacts[i]);
    }
}

function search(lastName){
    var contactsLength = contacts.length;
    for (var i = 0; i < contactsLength; i++) {
        if (contacts[i].lastName == lastName){
            printPerson(contacts[i]);
        }
    }
}

function add (firstName, lastName, phoneNumber, email) {
    var contactSize = contacts.length;
    var Person = new Object();
    Person.firstName = prompt("First Name");
    Person.lastName = prompt("Last Name");
    Person.phoneNumber= prompt("Phone No.");
    Person.email = prompt("Email");
    contacts[contactSize] = Person;
};

add();
list();

//..............................


// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name) {
    this.name = name;
    this.numLegs = 2;
}

// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal();

var penguin = new Penguin("Bob");

penguin.sayName();

// ===============================================

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;

   this.askTeller = function(pass) {
     if (pass == 1234) return bankBalance;
     else return "Wrong password.";
   };
}

var john = new Person('John','Smith',30);
/* the variable myBalance should access askTeller()
   with a password as an argument  */
  var myBalance = john.askTeller(1234);

//==========================================

var languages = {
    english: "Hello!",
    french: "Bonjour!",
    notALanguage: 4,
    spanish: "Hola!"
};

// print hello in the 3 different languages
for(var x in languages) {
  if(typeof(languages[x]) === 'string') {
    console.log(languages[x]);
  }
}
// =======================================

function StudentReport() {
    var grade1 = 4;
    var grade2 = 2;
    var grade3 = 1;
    this.getGPA = function() {
        return (grade1 + grade2 + grade3) / 3;
    };
}

var myStudentReport = new StudentReport();

for(var x in myStudentReport) {
    if(typeof myStudentReport[x] !== "function") {
        console.log("Muahaha! " + myStudentReport[x]);
    }
}

console.log("Your overall GPA is " + myStudentReport.getGPA());


//=====================================================

function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember("Mohamed", 20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here

    applyStaffDiscount: function(employee){
       this.total -= this.total * (employee.discountPercent / 100);
    }
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me);

// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));
// =================================

var calculatorOn = false;
function pressPowerButton() {
  if (calculatorOn) {
    console.log('Calculator turning off.');
    calculatorOn = false;
  } else {
    console.log('Calculator turning on.');
    calculatorOn = true;
  }
}

pressPowerButton();
// Output: Calculator

pressPowerButton();




//==============================================

var orderCount =+ 0;
function takeOrder(topping, crustType) {
  orderCount = orderCount + 1;
  console.log('Order: ' + crustType + ' crust topped with ' + topping);
}
function getSubTotal(itemCount){
  return itemCount * 7.5;
}
takeOrder('bacon', 'thin');
takeOrder('pepperoni', 'regular');
takeOrder('pesto', 'thin');

console.log(getSubTotal( orderCount));

function getTax(){
  return getSubTotal(orderCount)*0.06;
}

function getTotal() {
  return getSubTotal(orderCount) + getTax();
}

console.log(getTotal());


  var vacationSpots = ["NYC", "CA", "VA"];

const loopOverAnArray = (arr) => {
  for(var i = 0; i < arr.length; i++){
   console.log('I would love to visit ' + arr[i]);;
  }
};

loopOverAnArray(vacationSpots);

  var vacationSpots = ["NYC", "CA", "VA"];
const reverseLoopOverAnArray = (arr) => {
  for(var i = arr.length-1; i >= 0; i--){
  console.log('I would love to visit ' + arr[i]);
  }
};

reverseLoopOverAnArray(vacationSpots);
//...............................................................
    var myPlaces = ["London", "Paris", "Berlin", "NYC", "Montreal", "Lyon", "Monaco"];
    var friendPlaces = ["Lyon", "Monaco", "Toronto", "Mexico City", "London", "Paris"];

const matchItemInTwoArrays = (place1, place2) => {
    for(var i = 0; i < place1.length; i++){
      for (var j = 0; j < place2.length; j++ ){
    if (place1[i] === place2[j]) {
        console.log('Match: ' + place1[i]);
      }
    }
  }
}

matchItemInTwoArrays(myPlaces, friendPlaces);

//......................................................................

const gameUsingWhileLoop = () => {
  var cards = ['Diamond', 'Spade', 'Heart', 'Club'];
  var currentCard = 'Heart';

  while (currentCard !== 'Spade') {
    console.log(currentCard);
    var randomNumber = Math.floor(Math.random() * 4);
     currentCard = cards[randomNumber];
   }
    console.log('Found a Spade!');
};

/*

This unit introduced you to scope.

Scope is the idea in programming that some variables are acessible/inaccessible from other parts of the program.

Global Scope refers to variables that are accessible to every part of the program.

Functional Scope refers to variables created inside functions, which are not accessible outside of its block.

for loops allow us to repeat a block of code a known amount of times.

We can use a for loop inside another for loop to compare two lists.

while loops are for looping over a code block an unknown amount of times.


The Document Object Model, commonly referred to as the DOM', is the term for elements in an HTML file.
 Elements are any HTML code denoted by HTML tags, like <div>, <a>, or <p>.
 Let's use JavaScript to interact with the DOM.
*/


function tra(arr){
   let obj = {}
   obj[arr[0]] = arr[arr.length-1]
   return obj;
}





// ''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
 var myPlaces = ["London", "Paris", "Berlin", "NYC", "Montreal", "Lyon", "Monaco"];
 var friendPlaces = ["Lyon", "Monaco", "Toronto", "Mexico City", "London", "Paris"];

const findMatchInAnArray = (arr1, arr2) => {
  for(let i = 0; i < arr1.length; i++) {
    for(let j = arr2.length-1; j >= 0; j--) {
     if(arr1[i] === arr2[j]) {
        console.log('Match: ' + arr1[i]);
     }
    }
  }
};

const MyArray = (target1, target2) => {
  return findMatchInAnArray(target1, target2);
}

MyArray(myPlaces, friendPlaces);

// '''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

// h r technical interview

// first  interview
const titles = ['kaky', 'bouya', 'he']

function titleInsideArray(arr, target) => {
    for (var i = 0; i < arr.length; i++) {
      if(arr[i] === target){
         return true;
      }
    }
    return false;
}

titleInsideArray(titles, 'he');


// second interview
function assert(expectedBehavior, messageThatNeedtoOutPut){
  if(!expectedBehavior){
    console.log(messageThatNeedtoOutPut)
  }else{
    console.log('test passe')
  }
}



function testArrayCompare(array1, array2) {
if(array1.length !== array2.length)
    return false;
for(var i = 0; i < array1.length; i++;) {
    if(array1[i] !== array2[i])
        return false;
  }
  return true;
}


var first = [1, 2, 3, 4, 5];
var second = [1, 2, 3, 4, 5];
var third = [1, 9, 3, 4, 5];
var fourth = [1, 2, 3, 4, 5, 6];



assert(testArrayCompare(first, second) === true, 'it could be equivalent');
assert(testArrayCompare(second, third) === false, 'it could be equivalent');
assert(testArrayCompare(first, fourth) === false, 'it could be equivalent');

var x;

assert(x === 12, 'x should eqaul to 12');

// ----------------------------------------------------------------


// functional pattern
var carLike = function(obj, loc) {
  obj.loc = loc;
  obj.move = function() {
    obj.loc++;
  }
  return obj;
}

// class the first way of writing a class new Car to initiate an object
// prototypal pattern
var Car  = function(loc) {
  var obj = Object.create(Car.prototype)
  obj.loc = loc;
  return obj;
};

 Car.prototype = {
    move: function() {
      this.loc++;
  },

    on: function() {
      /*
       Your code
      */
  },

  off: function() {
    /*
      Your code
    */
  }

};



// class call first way

var amy2 = new Car(1)
    amy2.move();

//........................................................................


// class the second way of writing a  class new Car to initiate an object

var Car = function(loc) {
  this = Object.create(Car.prototype)
  this.loc = loc;
  return this;
};

Car.prototype = {
  move: function() {
    this.loc++
  },
  on: function(){
    /*
     Your code
    */
  },
  off: function() {
    /*
     Your code
    */
  }
};



// Second way of calling class

var ben = Car(9);
    ben.move()

//''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

// pseudo-classical pattern
var Car  = function(loc) {
  this.loc = loc;
};

 Car.prototype.move: function() {
    this.loc++;
}


// run.js
// obj call
var carLike = require(/* ./libery.js */);

var amy1 = carLike({}, 1); // {loc: 1}
    amy1.move(); // {loc: += 1}
var ben1 = carLike({}, 9); // {loc: 9}
    ben1.move(); // {loc: loc + 9}

//]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]]

// SuperClass
var Car = function() {
  var obj = { loc: loc };
  obj.move = function() {
    obj.loc++;
  }
  return obj;
}

// Classes that in
var Van = function() {
  var obj = Car(loc);
  obj.grab = function(){
    /* Your code*/
  };
  return obj;
}


var Cop = function() {
  var obj = Car(loc);
  obj.call = function(){
    /* Your code*/
  };
  return obj;
}

//////////////////////////////////////////////////////////////

// pseudo-classical SuperClass Pattern

var Car = function(loc) {
  this.loc = loc;
};

Car.prototype.move = function() {
  this.loc++;
};


var Van = function(loc) {
  Call(this, loc);
};

Van.prototype = Object.create(Car.prototype);
Van.prototype.constructor = Van;
Van.prototype.grap = function() {
  /* */
}





var zed = new Car(1);
    zed.move()
var amy  = new Van(9);
    amy.move();
    amy.grap();
// ========================================================


function findAndComputerGreaterArray(arr) {
  var greatArr = 0;
  for (var i = 0; i < arr.length; i++) {
    if(arr[i] >= 10){
    greatArr++;
   }
  }
  console.log("this is " + greatArr + " in the array");
}

var myArr = [94,494, 4,43,5,7,877,65,40,2,34,5,6,7,10, 29];

findAndComputerGreaterArray(myArr);








/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
var balance = 325.00;
var checkBalance = true;
var isActive = false;

// your code goes here

if (checkBalance) {
    if (isActive && balance > 0) {
        console.log(`Your balance is $${balance}.`);
    } else if (!isActive) {
        console.log("Your account is no longer active.");
    } else if (balance === 0) {
        console.log("Your account is empty.");
    } else {
        console.log("Your balance is negative. Please contact bank.");
    }
} else {
    console.log("Thank you. Have a nice day!");
}






/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 *
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 *
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
var flavor = "strawberry";
var vessel = "cone";
var toppings = "cookies";

// Add your code here
if ((flavor === "vanilla" || flavor === "chocolate") &&
    (vessel === "cone" || vessel === "bowl") &&
    (toppings === "sprinkles" || toppings === "peanuts")) {
        console.log(`I'd like two scoops of ${flavor} ice cream ` +
                    `in a ${vessel} with ${toppings}.`);
    }








/*
 * Programming Quiz: What do I Wear? (3-7)
 */

// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
var shirtWidth = 23;
var shirtLength = 30;
var shirtSleeve = 8.71;

// your code goes here
if ((shirtWidth >= 18 && shirtWidth < 20) && (shirtLength >= 28 && shirtLength < 29) && (shirtSleeve >= 8.13 && shirtSleeve < 8.38)) {
    console.log("S");
} else if ((shirtWidth >= 20 && shirtWidth < 22) && (shirtLength >= 29 && shirtLength < 30) && (shirtSleeve >= 8.38 && shirtSleeve < 8.63)) {
    console.log("M");
} else if ((shirtWidth >= 22 && shirtWidth < 24) && (shirtLength >= 30 && shirtLength < 31) && (shirtSleeve >= 8.63 && shirtSleeve < 8.88)) {
    console.log("L");
} else if ((shirtWidth >= 24 && shirtWidth < 26) && (shirtLength >= 31 && shirtLength < 33) && (shirtSleeve >= 8.88 && shirtSleeve < 9.63)) {
    console.log("XL");
} else if ((shirtWidth >= 26 && shirtWidth < 28) && (shirtLength >= 33 && shirtLength < 34) && (shirtSleeve >= 9.63 && shirtSleeve < 10.13)) {
    console.log("2XL");
} else if (shirtWidth >= 28  && shirtLength >= 34 && shirtSleeve >= 10.13) {
    console.log("3XL");
} else {
    console.log("N/A");
}


// What will be printed to the console if the following code is run?

var adult = true;
var preorder = true;

console.log("It costs $" + (adult ? "40.00" : "20.00") + " to attend the concert. Pick up your tickets at the " + (preorder ? "will call" : "the gate") + ".");







/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

var category = eatsPlants && eatsAnimals ? "omnivore" :
               eatsPlants ? "herbivore" :
               eatsAnimals ? "carnivore" : undefined;

console.log(category);






/*
 * Programming Quiz: Back to School (3-9)
 */

// change the value of `education` to test your code
var education = "no high school diploma";

// set the value of this based on a person's education
var salary;

// your code goes here
/*
 * Programming Quiz: Back to School (3-9)
 */

// change the value of `education` to test your code
var education = "no high school diploma";

// set the value of this based on a person's education
var salary;

// your code goes here
switch (education) {
    case "a high school diploma":
       salary = 35256;
    break;
    case "an Associate's degree":
      salary = 41496;
    break;
    case "a Bachelor's degree":
       salary = 59124;
    break;
    case "a Master's degree":
       salary = 69732;
    break;
    case "a Professional degree":
        salary = 89960;
    break;
    case "a Doctoral degree":
        salary = 84396;
    break;
    default: salary = 25636;
}

console.log(`In 2015, a person with ${education} earned ` +
    `an average of $${salary.toLocaleString("en-US")}/year.`);




/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

var num = 99;
var bottles = `${num} bottle${num === 1 ? "" : "s"} of juice`;
var bottles1;

while (num >= 1) {
    bottles1 = `${num-1} bottle${num-1 === 1 ? "" : "s"} of juice`;
    console.log(`${bottles} on the wall! ${bottles}! `
        + `Take one down, pass it around... ${bottles1} on the wall!`);
    bottles = bottles1;
    num--;
}




/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 *
 * Using a while loop, print out the countdown output above.
 */

// your code goes here


var t = 60;

while (t >= 0) {
 if (t === 50) {
    console.log("Orbiter transfers from ground to internal power");
    } else if (t === 31) {
      console.log("Ground launch sequencer is go for auto sequence start");
    } else if (t === 16) {
      console.log("Activate launch pad sound suppression system");
    } else if (t === 10) {
       console.log("Activate main engine hydrogen burnoff system");
    } else if (t === 6) {
        console.log("Main engine start");
    } else if (t === 0) {
        console.log("Solid rocket booster ignition and liftoff!");break;
    } else {
        console.log("T-"+t+" seconds");
  }
  t = t-1;
}



/*
 * Programming Quiz: Factorials (4-7)
 */

// your code goes here
var solution = 1
for(var i = 12; i >= 1; i--){
    solution = solution * i;
}

console.log(solution);


/*
 * Programming Quiz: Find my Seat (4-8)
 *
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0
 * The last row-seat combination will be 25-99
 *
 * Things to note:
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

// Write your code here
 for(var row = 0; row < 26; row = row + 1) {
     for(var seat = 0; seat <  100; seat = seat + 1) {
         console.log(`row number ${row} and seat number ${seat}`);
     }
 }

/*
 * Programming Quiz: Find my Seat (4-8)
 *
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0
 * The last row-seat combination will be 25-99
 *
 * Things to note:
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */

// Write your code here
 for(var row = 0; row < 26; row = row + 1) {
     for(var seat = 0; seat <  100; seat = seat + 1) {
         console.log(`row number ${row} and seat number ${seat}`);
     }
 }



//  A function that reserve a strings
   function stringReverse(reverseMe) {
     var reverseStr = "";
     for (var i = reverseMe.length - 1; i >= 0; i--) {
           reverseStr = reverseStr + reverseMe[i]
     }
     return reverseStr;
   }

   console.log(stringReverse('Mohamed'));


   // A function that check if numbre is a prime

  function isPrime(int) {
    for (var x = 2; x < int; x++) {
      if(int % x === 0){
        console.log(int + " is divisible by " + x );
        return false;
      }
    }
    return true;
  }


  isPrime(12)




  // returns the sum of two numbers
function add(x, y) {
  return x + y;
}


// returns the value of a number divided by 2
function divideByTwo(num) {
  return num / 2;
}


var sum = add(5, 7); // call the "add" function and store the returned value in the "sum" variable
var average = divideByTwo(sum); // call the "divideByTwo" function and store the returned value in the "average" variable






var superHeroes = [];

var batman = {
  secretIdentity : "Bruce Wayne",
  superPowers : null,
  money : 10000000000000
};

var spiderman = {
  secretIdentity : "Peter Parker"
};
var onePunchMan = {
  name : "Saitama"
};
var starLord = {
  name : "Peter Quill",
  teamMembers : ["Rocket", "Groot", "Dave Bautista", "Gamora"]
};

var wonderWoman = {
  name : "Diana Prince",
  superPowers : "a lot"
};

superHeroes.push(batman, spiderman, onePunchMan, starLord, wonderWoman, spiderman);

//superHeroes array

// var gamora = superHeroes[2].teamMembers[teamMembers.length - 1];
// var gamora = superHeroes[2].teamMembers[3];

// console.log(superHeroes[superHeroes.length - 1].superPowers); //undefined

var wonderWomanPowers = superHeroes[3].superPowers;





var someArray = [];
var anInnerArray = [true, false, "hello"];
var anEvenMoreNestedArray = [null, 0, false];

anInnerArray.push(anEvenMoreNestedArray);

anInnerArray; //[true, false, "hello", [null, 0, false]];
someArray.push(anInnerArray);

someArray; // [[true, false, "hello", [null, 0, false]]];

console.log("what is that? " + someArray[0][2]);

for (var i = 0; i < someArray[0][2].length; i+=1) {
  //[true, false, "hello", [null, 0, false]]
}











// variable shadowing is overrides the global variable by the local variable
// if they have the same varible name. to Avoid it you should have to declare the local variable also.

var x = 1;
function addTwo() {
  x = x + 2; // x = 1 + 2;
}

addTwo(); // x = 3;
x = x + 1; // overrides the variable x = 3 + 1;
console.log(x);  // x = 4;
// the result will be 4




var x = 1;

function addTwo() {
  var x = x + 2; // x = 1 + 2;
}

addTwo(); // x = 3
x = x + 1; // x = 1 + 1;
console.log(x);  // x = 2







// We've given you one function makeLine() to start with.
// The function takes in a line length, and builds a line of asterisks and
// returns the line with a newline character.

function makeLine(length) {
  var line = "";
  for (var j = 1; j <= length; j++) {
    line += "* "
  }
  return line + "\n";
}










/*
 * Programming Quiz: Build A Triangle (5-3)
 */

// creates a line of * for a given length
function makeLine(length) {
    var line = "";
    for (var j = 1; j <= length; j++) {
        line += "* ";
    }
    return line + "\n";
}

// your code goes here.  Make sure you call makeLine() in your own code.
function buildTriangle(row){
var lineString = '';
for(var i=1; i<=row; i++){
lineString += makeLine(i);
}
return lineString;
}

console.log(buildTriangle(10));






// callback function

// function expression catSays
var catSays = function(max) {
  var catMessage = "";
  for (var i = 0; i < max; i++) {
    catMessage += "meow ";
  }
  return catMessage;
};
// function declaration helloCat accepting a callback
function helloCat(callbackFunc) {
  return "Hello " + callbackFunc(3);
}
// pass in catSays as a callback function
helloCat(catSays);



// name function expresssion
var myFavoriteMovie = function movie() {
  return "batman";
};
myFavoriteMovie();




// Function expression that assigns the function displayFavorite
// to the variable favoriteMovie
var favoriteMovie = function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");



// Function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// Call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");



// anonymous function expression
var doSomething = function(y) {
  return y + 1;
};



// named function expression
var doSomething = function addOne(y) {
  return y + 1;
};


// for either of the definitions above, call the function like this:
doSomething(5);



// function declaration that takes in two arguments: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
  messageFunction(name);
}

// call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
  console.log("My favorite movie is " + movieName);
}, "Finding Nemo");



var laugh = function(lol){
  var str = "";
 for (var i = 0; i < lol; i++){
   str += "ha";
  }
  return (str + "!");
}

console.log(laugh(10));




/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}
// your code goes here
// call the emotions function here and pass in an
// inline function expression
emotions("happy", function(n) { return new Array(n+1).join("ha") + "!"; });






/*
 * Programming Quiz: Inline Functions (5-6)
 */

// don't change this code
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

// your code goes here
// call the emotions function here and pass in an
// inline function expression
emotions("happy",function(lol){
  var str = "";
 for (var i = 0; i < lol; i++){
   str += "ha";
  }
  return (str + "!");
});



var donuts = ["jelly donut", "chocolate donut", "glazed donut"];

donuts.forEach(function(donut) {
  donut += " hole";
  donut = donut.toUpperCase();
  console.log(donut);
});
for (var i = 0; i < donuts.length; i++) {
  donuts[i] += " hole";
  donuts[i] = donuts[i].toUpperCase();
  console.log(donuts[i]);
}





/*
 * Programming Quiz: Another Type of Loop (6-8)
 *
 * Use the existing `test` variable and write a `forEach` loop
 * that adds 100 to each number that is divisible by 3.
 *
 * Things to note:
 *  - you must use an `if` statement to verify code is divisible by 3
 *  - you can use `console.log` to verify the `test` variable when you're finished looping
 */

var test = [12, 929, 11, 3, 199, 1000, 7, 1, 24, 37, 4,
    19, 300, 3775, 299, 36, 209, 148, 169, 299,
    6, 109, 20, 58, 139, 59, 3, 1, 139
];

// Write your code here
test.forEach(function(currentValue, index, array) {
    if (currentValue % 3 === 0)
        array[index] += 100;
});
console.log(test);

/*
 * Programming Quiz: I Got Bills (6-9)
 */

var bills = [50.23, 19.12, 34.01, 100.11, 12.15, 9.90,
29.11, 12.99, 10.00, 99.22, 102.20, 100.10, 6.77, 2.22];

// your code goes here

var totals = bills.map(function(bill) {
    return Number((bill * 1.15).toFixed(2));
});
console.log(totals);


// Since each row is an array of donuts,
//  you next need to set up an inner-loop to
//   loop over each cell in the arrays.
for (var row = 0; row < donutBox.length; row++) {
  // here, donutBox[row].length refers to the length of the donut array currently being looped over
  for (var column = 0; column < donutBox[row].length; column++) {
    console.log(donutBox[row][column]);
  }
}

// Prints:
// JELLY DONUT HOLE
// CHOCOLATE DONUT HOLE
// GLAZED DONUT HOLE









/*
 * Programming Quiz: Nested Numbers (6-10)
 *
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */

var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here

for(var i = 0; i < numbers.length; i++){
    for(var j = 0; j < numbers[i].length; j++) {
      console.log(numbers[i][j] = numbers[i][j] % 2 === 0 ? "even" : "odd");
    }
}




/*
 * Programming Quiz: Umbrella (7-1)
 */

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    // your code goes here
    close: function() {
        if(umbrella.inOpen === false){
          return "The umbrella is already closed!";
        } else {
            umbrella.isOpen = false;
            return "Julia closes the umbrella!";
        }
    }
};

console.log(umbrella.close());







/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
           this.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            this.balance -= amount;
        }
    },
    // your code goes here
    printAccountSummary: function avaibleMoney(){
        return `Welcome!\nYour balance is currently $${this.balance} ` +
            `and your interest rate is ${this.interestRatePercent}%.`;
    }
};

console.log(savingsAccount.printAccountSummary());



/*
 * Programming Quiz: Facebook Friends (7-5)
 */

// your code goes here
var facebookProfile = {
    name: "Mohamed Gassama",
    friends: 10,
    messages: ["hello", "hey", "waassup bro"],

    postMessage: function(message) {
      this.messages.push(message);
      return this.messages;
    },
    deleteMessage: function(index) {
       this.messages.splice(index, 1);
       return this.messages;
    },

    addFriend: function() {
      this.friends ++;
      return this.friends;
    },

    removeFriend: function(){
      this.friends --;
      return this.friends;
    }
}

console.log(facebookProfile.postMessage('hola'));
console.log(facebookProfile.deleteMessage(3));
console.log(facebookProfile.addFriend());
console.log(facebookProfile.friends);
console.log(facebookProfile.messages);




/*
 * Programming Quiz: Donuts Revisited (7-6)
 */

var donuts = [
    { type: "Jelly", cost: 1.22 },
    { type: "Chocolate", cost: 2.45 },
    { type: "Cider", cost: 1.59 },
    { type: "Boston Cream", cost: 5.99 }
];

// your code goes here
donuts.forEach(function(donut) {
    var str = `${donut.type} donuts cost $${donut.cost} each`;
    console.log(str);
});


const double = function(x) {
  return 2 * x;
};

const myFavaoriteNumber = 5;

const doSomethingToSomeNumber = function(number, func) {
  return func(number);
};

doSomethingToSomeNumber(myFavaoriteNumber, double);

const numbers = [1, 9, 27, 5, 10, 3];

const each = (array, func) => {
  for (let i = 0; i < array.length; i++) {
   return func(array[i], i);
  }
};

// const addSum = (number) => {
//  let sum = 0;
//  return sum = sum + number
// };

each(numbers, (number, maximum = numbers[0]) => {
  if (number > maximum) {
   maximum = number;
  }
});

each(numbers, (number, product = 1) => {
 return product = product * number;
});

each(numbers, (number, sum = 0) => {
 return sum = sum + number
});


// ----------------------------------------

const add = (x) => {
  return (y) => {
  return x + y;
  }
}

// const result = add(1);
// result(1);

const result = add(1)(1);
result

// 2

// ============================================
const double = (x) => {
  return 2 * x;
};

const myNumber = 10

const doSomethingToNumber = (number, func) => {
    return func(number);
};


// doSomethingToNumber(10, (x) => {
//    return 2 * x;
// });

// or

doSomethingToNumber(myNumber, double);

// 20




const sumArray = (sum, array) => {
 array.forEach((num) => {
    sum += num;
  })
 return sum;
};

sumArray(0, [1, 2, 3, 4]); // 10
sumArray('', [1, 2, 3, 4]); // '1234'
sumArray('', ['array', 'object', 'function']); // 'arrayobjectfunction'




var arr = [1,23,4,5,5,6,6,7];
var str =['kaky','62118'];
var arrayStr = ((array) => {
  return array.reduce((accum, num) => {
    // return accum += num;
    return accum.concat(num);
  }, '');
});

arrayStr(str);



var arr = [1,23,4,5,5,6,6,7];
var arrayNum = ((num) => {
  return arr.reduce((accum, num) => {
    return accum += num;
  });
}, 0);

arrayNum(arr);


