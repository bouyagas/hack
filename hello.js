
// Object Creation pattern
// factory Pattern


var personFactory = function (name, age, state) {
  var temp = {};
  temp.name = name;
  temp.age = age;
  temp.state = state;

  temp.printPerson = function() {
    console.log(this.name + " " + this.age + " " + this.state);
  }
  return temp;
};


var me = personFactory("Kaky", 27, "NYC");
    me.printPerson();


// constructor pattern


var peopleConstructor = function (name, age, state) {
  this.name  = name;
  this.age = age;
  this.state = state;

  this.printPerson = function() {
    console.log(this.name + " " + this.age + " " + this.state);
  };
};

var person1 = new peopleConstructor("john", 23, "CA");

var person1 = new peopleConstructor("ki", 32, "VA");

person1.printPerson();

person1.printPerson();


// Prototype Pattern

var peoplePropto = function(){

};
peoplePropto.prototype.name = 'no name';
peoplePropto.prototype.age = 0;
peoplePropto.prototype.state = 'no city';

peoplePropto.prototype.printPerson = function() {
  console.log(this.name + " , " + this.age + " , " + this.state);
}

var person2 = new peoplePropto();
    person2.name = 'Bouya';
    person2.age = 23;
    person2.state = 'FL';

    person2.printPerson()

// Dynamic Prototype Pattern

var peopleDynamiPropto = function(name, age, state){
   this.name  = name;
   this.age = age;
   this.state = state;

   if(typeof this.printPerson !== 'function'){
     peopleDynamiPropto.prototype.printPerson = function(){
      console.log(this.name + " , " + this.age + " , " + this.state);
     };
   }
};

var person3 = new peopleDynamiPropto("ki", 32, "VA");
    person3.printPerson();


// Clusures are nothing but function with preserve date;

// var passed = 3;

// var addTo = function () {
//     var inner = 2;
//     return passed + inner;
// }

// console.log(addTo());

var addTo = function (passed) {

  var add = function (inner) {
    return passed + inner;
  };

  return add;

};

var addThree = new addTo(3);
    console.log(addThree(2))

// call, apply, bind

// call
var obj = { num: 5 };

var addToThis = function (a) {
  return this.num + a;
};

console.log(addToThis.call(obj , 9)) // functionname.call(obj, functionargument)

// apply
var obj1 = { num: 2 };

var addToThis = function (a, b, c) {
  return this.num + a + b + c;
};

var arr = [1, 2, 3];

console.log(addToThis.apply(obj1 , arr)) // functionname.call(obj, arrayargument)

// bind
var obj2 = { num: 2 };

var addToThis = function (a, b, c) {
  return this.num + a + b + c;
};

var bond = addToThis.bind(obj2)
console.log(bond(1, 2, 3))


// in summary

// var obj = {num: 2};

// var functionName = function(arg1, arg2, arg3) {

// };


// functionName.call(obj, arg1, arg2, arg3)


// functionName.apply(obj, [arg1, arg2, arg3])


// var bound = functionName.bind(obj);
// bound(arg1, arg2, arg3);
