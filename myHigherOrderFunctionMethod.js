// each
function each(array, func) {
  for (var i = 0; i < array.length; i++) {
    func(array[i]);
  }
}

// filter
function filter(array, f) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
    if(f(array[i])) {
     arr.push(array[i]);
    }
  }
  return arr;
}
// map
function map(array, f) {
  var arr = [];
  for (var i = 0; i < array.length; i++) {
     arr.push(f(array[i]));
  }
  return arr;
}

// =================================================================
// looping over arrays and objects
function each(coll, f) {
  if (Array.isArray(coll)) {
    for (var i = 0; i < coll.length; i++) {
      f(coll[i], i);
    }
  } else {
    for (var key in coll) {
      f(coll[key], key);
    }
  }
}

// filtering over arrays and objectjs
var filter = function(collection, func) {
  if(Array.isArray(collection)){
    var acc = [];
    for (var i = 0; i < collection.length; i++) {
      if (func(collection[i], i)) {
        acc.push(collection[i]);
      }
    }
    return acc;
  } else {
    var obj = {};
    for (var key in collection) {
      if (func(collection[key], key)) {
      obj[key] = collection[key];
    }
  }
  return obj;
 }
};


// =====================================================================
 function filter (collection, test) {
  if(Array.isArray(collection)){
    var acc = [];
    each(collection, function(element, i) {
      if (test(element, i)) {
        acc.push(element);
      }
    });
    return acc;
  } else {
   var obj = {};
    each(collection, function(element, key) {
      if (test(element, key)) {
        obj[key] = element;
      }
    });
    return obj;
  }
}


// ===============================================================
function filter (collection, func) {
  var acc = [];
  each(collection, function(element, i) {
    if (func(element, i)) {
      acc.push(element);
    }
  });
  return acc;
}


function map(collection, func) {
  var arr = [];
  each(collection, function(element, i) {
    arr.push(func(element, i));
  });
  return arr;
}

function map2(array1, array2, func) {
  var newArr = [];
  each(array1, function(element, index) {
    each(array2, function(elem, ind) {
      if(ind === index) {
        newArr.push(func(elem, element));
      }
    });
  });
  return newArr;
}

function map(coll, f) {
  var acc = [];
  if (!Array.isArray(coll)) {
    acc = {};
  }
  each(coll, function(element, key) {
    acc[key] = f(element, key);
  });
  return acc;
}

function reduce(array, f, start) {
  var acc = start;
  each(array, function(element) {
    acc = f(acc, element);
  });
  return acc;
}

function sumBy(numbers, f) {
  var sum = 0;
  each(numbers, function(number) {
    sum = sum + f(number);
  });
  return sum;
}
