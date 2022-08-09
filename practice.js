// Prompt 1
var myFavoriteNumber;
myFavoriteNumber = 3;
console.log(myFavoriteNumber);

//Prompt 2
const dogsName = "Joker";
let favoriteDessert = "Brownie";
var math = "Numbers";

console.log(dogsName);
console.log(favoriteDessert);
console.log(math);

// Prompt 3
let gas = 4;

console.log(gas + 3);
console.log(gas - 2);
console.log(gas * 3);
console.log(gas / 7);
console.log(gas % 2);

// Prompt 4
const firstName = "Erica";
const lastName = "Castillo";
const fullName = firstName.concat(" ",lastName);

console.log(fullName);

// Promt 5
let hello = "hello";
let world = "world";
let message = `${hello} ${world}`;

console.log(message);

// Prompt 6
let isItEqual = 10 == 5;
let valueAndDataType = "3" === "3";
let unequal = 10 !== 5;
let lessThan = 100 < 90;
let greaterThan = 1 > 2;
let lessOrEqual = 25 <= 30;
let greaterOrEqual = 18 >= 20;

console.log(isItEqual); // false
console.log(valueAndDataType); //true
console.log(typeof valueAndDataType); //boolean
console.log(unequal); // true
console.log(lessThan); //false
console.log(greaterThan); // false
console.log(lessOrEqual); // true
console.log(greaterOrEqual); //false

// Prompt 7
let a = 4;
let b = 53;
let c = 57;
let d = 16;
let e = 'Kevin';

console.log(a != b);
console.log(c > d);
console.log("Kevin" == "Kevin");
console.log(a < b < c);
console.log(a == a !== d);
console.log(e === "Kevin");
console.log(48 !== "48");

//Prompt 8
a = 6;
b = 100;
c = -5;
d = 3000;
e = 'Jelly Bean';

console.log(a > b);
console.log(c === d);
console.log("Peanut" !== "Peanut");
console.log(a == b <= c);
console.log(a > a >= d);
console.log(e != "Jelly Bean");
console.log(48 > "48");


// Prompt 9
const array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
const array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
];
const array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];

console.log(array1[2]);
console.log(array2[1][1]);
console.log(array3[1][1][1][0]);

// Prompt 10
const array4 = ['a', 'b', 'c', 'd', 'e'];

console.log(array4[3])

// Prompt 11
const thom = ['Thom', 1000, 'Christchurch'];
const karolin = ['Karolin', 16, 'New York'];
const kristyn = ['Kristyn', 5, 'Pittsburgh'];
const cathleen = ['Cathleen', 186, 'New York'];

thom.shift();
thom.unshift("Gameboy");
console.log(thom);

karolin[1] = 17;
console.log(karolin);

cathleen[2] = "Gotham City";
console.log(cathleen);

kristyn.pop();
kristyn.push("Oakland");
console.log(kristyn);