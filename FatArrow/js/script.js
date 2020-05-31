//javascript or es5

var product = function(){
    var a=9
    var b=7
    return a*b
}
console.log(product())

// es6

let a = 5
let sum = (b) => {
    return a+b
}
console.log(sum(5))

//es6 speciality for one line function
let diff = (b,c) => c-b
console.log(diff(5,10))

//ES5
var phraseSplitterEs5 = function phraseSplitter(phrase) {
  return phrase.split(' ');
};

//ES6
const phraseSplitterEs6 = phrase => phrase.split(" ");

console.log(phraseSplitterEs6("ES6 Awesomeness"));  // ["ES6", "Awesomeness"]

//Object Literals
//ES5
var setNameIdsEs5 = function setNameIds(id, name) {
  return {
    id: id,
    name: name
  };
};

// ES6
var setNameIdsEs6 = (id, name) => ({ id: id, name: name });

console.log(setNameIdsEs6 (4, "Kyle"));   // Object {id: 4, name: "Kyle"}

//USE CASES
//Array mapping

const smartPhones = [
  { name:'iphone', price:649 },
  { name:'Galaxy S6', price:576 },
  { name:'Galaxy Note 5', price:489 }
];

// ES5
var prices = smartPhones.map(function(smartPhone) {
  return smartPhone.price;
});

console.log(prices); // [649, 576, 489]

// ES6
const pricess = smartPhones.map(smartPhone => smartPhone.price);
console.log(pricess); // [649, 576, 489]

//ARRAY FILTER

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

// ES5
var divisibleByThrreeES5 = array.filter(function (v){
  return v % 3 === 0;
});

// ES6
const divisibleByThrreeES6 = array.filter(v => v % 3 === 0);

console.log(divisibleByThrreeES6); // [3, 6, 9, 12, 15]
