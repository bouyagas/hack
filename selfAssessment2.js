
var salesTeam = [{name: {first: 'Aleen', last: 'Atkins'}, age: 26, sales: '$2314'},
    {name: {first: 'Alvaro', last: 'Angelos'}, age: 55, sales: '$1668'},
    {name: {first: 'Denese', last: 'Dossett'}, age: 29, sales: '$9248'},
    {name: {first: 'Douglas', last: 'Denney'}, age: 53, sales: '$5058'},
    {name: {first: 'Earline', last: 'Erickson'}, age: 19, sales: '$18876'},
    {name: {first: 'Herman', last: 'Hazell'}, age: 25, sales: '$2746'},
    {name: {first: 'Homer', last: 'Hirth'}, age: 26, sales: '$474'},
    {name: {first: 'Hwa', last: 'Heidt'}, age: 53, sales: '$9607'},
    {name: {first: 'Hyon', last: 'Hampshire'}, age: 46, sales: '$13598'},
    {name: {first: 'Issac', last: 'Ingerson'}, age: 45, sales: '$5225'},
    {name: {first: 'Jeraldine', last: 'Joplin'}, age: 39, sales: '$2891'},
    {name: {first: 'Jin', last: 'Jeffrey'}, age: 17, sales: '$14402'},
    {name: {first: 'Joleen', last: 'Jolin'}, age: 45, sales: '$15736'},
    {name: {first: 'Jude', last: 'Jarrett'}, age: 53, sales: '$7557'},
    {name: {first: 'Magda', last: 'Mireles'}, age: 18, sales: '$1498'},
    {name: {first: 'Mistie', last: 'Montealegre'}, age: 31, sales: '$6920'},
    {name: {first: 'Nancy', last: 'Napoli'}, age: 49, sales: '$5255'},
    {name: {first: 'Regine', last: 'Rohrbaugh'}, age: 33, sales: '$7881'},
    {name: {first: 'Rolando', last: 'Riebel'}, age: 35, sales: '$8573'},
    {name: {first: 'Scarlett', last: 'Stagg'}, age: 36, sales: '$7126'},
    {name: {first: 'Sherron', last: 'Strawn'}, age: 36, sales: '$8848'},
    {name: {first: 'Susan', last: 'Shilling'}, age: 29, sales: '$8542'},
    {name: {first: 'Tama', last: 'Tworek'}, age: 16, sales: '$9200'},
    {name: {first: 'Tonisha', last: 'Taunton'}, age: 41, sales: '$5219'},
    {name: {first: 'Vergie', last: 'Villescas'}, age: 25, sales: '$8712'}
  ];

function assertObjectsEqual(actual, expected, testName) {
  if (JSON.stringify(actual) === JSON.stringify(expected)) {
    console.log('Test passed');
  } else {
    console.log('Test ['+testName+'] failed: expected ', expected, ' but got, ', actual );
    }
}

function isTeenager(salesTeam) {
  var teenager = [];
  salesTeam.forEach(function(teen) {
    if(teen.age < 20) {
      teenager.push(`${teen.name.first} ${teen.name.last}`);
    }
  });
  return teenager;
}

function oldest(salesTeam) {
  var old = salesTeam[0];
  salesTeam.forEach(function(num) {
    if (num.age > old.age) {
       old = num;
    }
  });
  return `The oldest student is  ${old.name.first} ${old.name.last}`;
}



 assertObjectsEqual(isTeenager(salesTeam), ["Earline Erickson", "Jin Jeffrey", "Magda Mireles", "Tama Tworek"], "Should return a list of all teenagers on the Sales Team");
 assertObjectsEqual(oldest(salesTeam), 'The oldest student is Alvaro Angelos', 'Should return the name  oldest student in the salesTeam' )
