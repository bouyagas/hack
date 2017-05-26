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
    return true;
   }else{
    return false;
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
 titleInsideObject(languages, 'Hola')
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



    myText = "Blah blah blah blah blah blah Eric \
blah blah blah Eric blah blah Eric blah blah \
blah blah blah blah blah Eric";
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

for(var i = 1; i <= 20; i++) {
  if( i%3 === 0 ) {
    if( i%5 === 0) {
      console.log("FizzBuzz");
    }else if(i%3===0) {
      console.log("Fizz");
    }
  }else if( i%5===0 ) {
    console.log("Buzz");
  }else console.log(i);
}


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
