const square = (x) => {
  return  x * x;
};

const EqualAssertion = (actual, expected, testName) => {
   if (actual === expected) {
    console.log('Test Passed');
   } else {
    console.log(`Failed ${testName}: Expected ${expected}, but got ${actual}`);
   }
};

EqualAssertion(square(5), 25, 'It should squared the number to 25');
EqualAssertion(Number(square(5)), Number(25), 'It should be a type of number');

