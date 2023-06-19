// Madison DeGrezia Assignment #2

// array for questions 1-9
let myArr = [1, 2, 5, 7, 8, 9];

// #1 myEach function
function myEach(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    cb(arr[i], i, arr);
  }
}

function multiplyTwo(num) {
  console.log(num * 2);
}

console.log("#1: MyEach function");
myEach(myArr, multiplyTwo);

// #2 myMap function
function myMap(arr, cb) {
  mapArr = [];
  for (let i = 0; i < arr.length; i++) {
    mapArr[i] = cb(arr[i], i, arr);
  }
  return mapArr;
}

function addTwo(num) {
  return num + 2;
}

console.log("\n#2: MyMap function");
console.log(myMap(myArr, addTwo));

// #3 myFilter function
function myFilter(arr, cb) {
  // creates new array
  filterArr = [];
  // traverses the array
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      filterArr.push(arr[i]);
    }
  }
  return filterArr;
}

function greaterThanFive(num) {
  return num > 5;
}

console.log("\n#3: MyFilter function");
console.log(myFilter(myArr, greaterThanFive));

// #4 mySome function
function mySome(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}

function greaterThanEight(num) {
  return num > 8;
}

console.log("\n#4: MySome function");
console.log(mySome(myArr, greaterThanEight));

// #5 myEvery function
function myEvery(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    // if all values are not > 4, it will return false
    if (!cb(arr[i], i, arr)) {
      return false;
    }
    return true;
  }
}

function greaterThanFour(num) {
  return num > 4;
}

console.log("\n#5: MyEvery function");
console.log(myEvery(myArr, greaterThanFour));

// #6 myReduce function
// ****** GO OVER THIS ******
function myReduce(arr, cb) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    result = cb(result, arr[i]);
  }
  return result;
}

function sum(a, b) {
  return a + b;
}

console.log("\n#6: MyReduce function");
console.log(myReduce(myArr, sum));

// #7 myIncludes function
function myIncludes(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    // if target is found return true
    if (arr[i] === target) {
      return true;
    }
  }
  return false;
}

console.log("\n#7: MyIncludes function");
console.log(myIncludes(myArr, 9));

// #8 myIndexOf function
function myIndexOf(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    // if target is found return the index
    if (arr[i] === target) {
      return i;
    }
  }
  return -1;
}

console.log("\n#8: MyIndexOf function");
console.log(myIndexOf(myArr, 7));

// #9 myPush function
function myPush(arr, elementToAdd) {
  // adds new element to the end of the array
  arr[arr.length] = elementToAdd;
  // outputs the new array
  return arr;
}

console.log("\n#9: MyPush function");
console.log(myPush(myArr, 10));

// #10 myUnshift function
let lastIndexArr = [1, 2, 5, 7, 5, 8];
function myUnshift(arr, target) {
  // default index value which does not exist
  let index = -1;
  for (let i = 0; i < arr.length; i++) {
    // if target is found, index value is updated
    if (arr[i] === target) {
      index = i;
    }
  }
  // return index of target
  return index;
}

console.log("\n#10: MyUnshift function");
console.log(myUnshift(lastIndexArr, 5));

// #11 grabKeys function
let obj = {
  season1: "winter",
  season2: "spring",
  season3: "summer",
  season4: "fall",
};

// must do this because grabKeys is not a function thats defined
Object.prototype.grabKeys = function () {
  let keyArr = [];
  for (element in this) {
    if (this.hasOwnProperty(element)) {
      // adds each key to the array
      keyArr.push(element);
    }
  }
  // returns of array of just keys
  return keyArr;
};

console.log("\n#11: grabKeys function");
console.log(obj.grabKeys());

// #12 grabValues function
Object.prototype.grabValues = function () {
  let valArr = [];
  for (element in this) {
    if (this.hasOwnProperty(element)) {
      // adds each value to the array
      valArr.push(this[element]);
    }
  }
  // returns of array of just the object values
  return valArr;
};

console.log("\n#12: grabValues function");
console.log(obj.grabValues());

// miscellaneous problem #1
function moveZeros(nums) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    // checks if element is not 0
    if (nums[i] != 0) {
      // nonzero elements are now at the front of the array
      nums[count++] = nums[i];
    }
  }
  //console.log(nums);

  // the rest of the elements in the array are now changed to zeroes
  while (count < nums.length) {
    //console.log(nums);
    nums[count++] = 0;
  }
  return nums;
}
let arr = [0, 1, 0, 3, 12];
console.log("\nMiscellaneous #1: moveZeros function");
console.log(moveZeros(arr));

// miscellaneous problem #2
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total;
}

/* function range(start, end) {
  let resultArr = [];
  let arrSize = end - start + 1;
  for (let i = 0; i < arrSize; i++) {
    resultArr.push(start);
    start++;
  }
  return resultArr;
} */

function range(start, end, increment) {
  let resultArr = [];

  if (increment == undefined) {
    increment = 1;
  }
  let arrSize = Math.abs(Math.floor((end - start) / increment)) + 1;
  for (let i = 0; i < arrSize; i++) {
    resultArr.push(start);
    start += increment;
  }
  console.log(resultArr);
  return resultArr;
}

let sampleArr = [3, 4, 5, 10];
console.log("\nMiscellaneous #2: Sum of a range function");
console.log("Sum: " + sum(range(1, 10, 2)));

// miscellaneous problem #3
let initialArr = [2, 4, 6, 8];
function reverseArray(arr) {
  let reverseArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reverseArr.push(arr[i]);
  }
  return reverseArr;
}
console.log("\nMiscellaneous #3: reverseArray function");
console.log(reverseArray(initialArr));

function reverseArrayInPlace(arr) {
  // instatiate temp variable
  let temp = 0;
  // traverses the first half of the array
  for (let i = 0; i < arr.length / 2; i++) {
    // sets that first element of array to temp variable
    temp = arr[i];
    arr[i] = arr[arr.length - (i + 1)];
    arr[arr.length - (i + 1)] = temp;
  }
  // returns the reversed array
  return arr;
}
console.log("\nMiscellaneous #3: reverseArrayInPlace function");
console.log(reverseArrayInPlace(initialArr));

// miscellaneous problem #4
function arrayToList(arr) {
  let list = null;
  for (let i = arr.length - 1; i >= 0; i--) {
    list = { value: arr[i], rest: list };
  }
  return list;
}

console.log("\nMiscellaneous #4: arrayToList function");
console.log(arrayToList([10, 20]));

function listToArray(list) {
  let arr = [];
  for (let node = list; node; node = node.rest) {
    // pushes the value into the array
    arr.push(node.value);
  }
  return arr;
}

console.log("\nMiscellaneous #4: listToArray function");
console.log(listToArray(arrayToList([10, 20, 30])));

function prepend(value, rest) {
  let list = {
    value: value,
    rest: rest,
  };
  return list;
}

console.log("\nMiscellaneous #4: prepend function");
console.log(prepend(10, prepend(20, null)));

function nth(list, num) {
  if (num === 0) {
    return list.value;
  } else {
    return nth(list.rest, num - 1);
  }
}

console.log("\nMiscellaneous #4: nth function");
console.log(nth(arrayToList([10, 20, 30]), 1));

// miscellaneous problem #5
function deepEqual(x, y) {
  // check X is Simple and Y is Simple
  if (!isReal(x) && !isReal(y)) {
    return x === y;
  }

  // check X is Complex and Y is Simple
  if (isReal(x) && !isReal(y)) {
    return false;
  }

  // check X is Simple and Y is Complex
  if (!isReal(x) && isReal(y)) {
    return false;
  }

  let count = 0;
  Object.keys(x).forEach((keyName) => {
    let result = deepEqual(x[keyName], y[keyName]);
    if (!result) count++;
  });

  return count == 0;
}

function isReal(x) {
  return typeof x == "object" && x != null;
}
function numProperties(x) {
  return Object.keys(x).length;
}
function propertyKeysEqual(X, Y) {
  let count = 0;
  Object.keys(X).forEach((keyName) => {
    result = Y.hasOwnProperty(keyName);
    if (!result) {
      // does not have it
      count++;
    }
  });
  return count == 0;
}

console.log("\nMiscellaneous #5: deepEqual function");

let obj2 = { here: { is: "an" }, object: 2 };
console.log("-------CASE1-------");
console.log(deepEqual(obj2, obj2));
console.log("-------CASE2-------");
console.log(deepEqual(obj2, { here: 1, object: 2 }));
console.log("-------CASE3-------");
console.log(deepEqual(obj2, { here: { is: "an" }, object: 2 }));
