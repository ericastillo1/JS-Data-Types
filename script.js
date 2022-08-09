console.log("hello world")

const number = 9

console.log(number)

// --- Strings --- 

/* // Concatenation//
let helloWorld = "Hello" + "World"

console.log(helloWorld) */

// Interpolation //
let hello = "Hello"
let helloWorld = `${hello} world`

console.log(helloWorld)

// --- String Escape Sequences --- 

/* "\n" = new line
    "\t" = tab 
    \"air quotes"\ */

let string = "Hello \n Goodbye"
let newString = "Once upon \t a time"
let finalString = "What's with this dude's \"air quotes\"? He's insane"

console.log(string)
console.log(newString)
console.log(finalString)

// --- Numbers --- //
const addition = 10 + 2
const subtraction = 10 - 2
const multiplication = 20 * 3
const division = 20 / 4
const exponents = 10 ** 2

console.log(addition)
console.log(subtraction)
console.log(multiplication)
console.log(division)
console.log(exponents)

// --- Modulus --- 
// The modulus operator returns the remainder of a division operation

const mods = 12 % 5
const secondmods = 4 % 2
const thirdmods = 5 % 2

console.log(mods)
console.log(secondmods)
console.log(thirdmods)

// --- Booleans
/*  == - equal (in value)
    === - equal (in value and data type)
    != - not equal (in value)
    !== - not equal (in value and data type)
    < - less than
    > - greater than
    <= - less than or equal to
    >= - greater than or equal to */
const equal = 1 == 1;
const notequal = 5 == 6;
const bothvalues = 9 === 9;
const converted = 12 == "12";
const bothdatas = 3 === "3";


console.log(equal);
console.log(notequal);
console.log(bothvalues);
console.log(converted);
console.log(bothdatas);

// --- Variables --- 
const myVar = 42;
console.log(myVar);

const sum = myVar + 8;
console.log(sum);

let doublesSum = 2 * sum;
console.log(doublesSum);

let myFavoriteNumber = 3;
console.log(myFavoriteNumber);

myFavoriteNumber = "three";
console.log(myFavoriteNumber);

// --- Null + Underfined + Nan
let testnumber = null;
console.log(testnumber);

let testType = "hello";
console.log(typeof testType);

let numberValue = 5;
console.log(typeof numberValue);


// You can test whether a value is a valid number using the isNaN() function. The method will return false if the argument passed into it is a valid number.
let btsFavoriteNumber = 7;
console.log(isNaN( btsFavoriteNumber ));

let myUnrealNumber = 0 / 0;
console.log(isNaN( myUnrealNumber ));

// --- Type Conversion ---

console.log(typeof 15); //number
console.log(typeof 5.5); //number
console.log(typeof NaN); //number
console.log(typeof "hello"); //string
console.log(typeof true); // boolean
console.log(typeof (1 != 2)); // boolean
console.log("hamburger" + "s"); //hamburgers concatentation
console.log("hamburger" - "s"); //Nan
console.log("1" + "3"); //13
console.log("1" - "3"); //-2
console.log("johnny" + 5); //johnny5
console.log("johnny" - 5); //NaN
console.log(99 * "luftbaloons"); //NaN

// When in doubt, convert data types that should be numbers using parseInt()
let stringToNumber = parseInt("3");
console.log(typeof stringToNumber); //number

let numberToString = 5.5;
let testingString = numberToString.toString()

console.log(typeof numberToString); //number
console.log(typeof testingString); //string

// --- Arrays ---
// Arrays are an ordered collection of related data and are organized by index.

const mountRushmore = ["Washington", "Jefferson", "Roosevelt"];

console.log(mountRushmore);
console.log(mountRushmore[0]); // Washington

mountRushmore.push("Lincoln"); //added Lincoln to the end of the array
console.log(mountRushmore[3]); // Lincoln

mountRushmore[4] = "Erica"; // added Erica to end of the array
console.log(mountRushmore[4]); // Erica

mountRushmore.splice(1, 0, "BTS"); // added BTS in iddex 1
console.log(mountRushmore);

const president = "Washington";
const presString = president.slice(0, 5); 
console.log(presString); // Washi

// You can also place arrays within arrays.

const letters = [
    ["a", "b", "c"],
    ["d", "e", "f"],
    ["g", "h", "i"]
];
console.log(letters[1][2]); //f
console.log(letters.length); //3


// Arrays can also contain any type of data, not just primitives. Arrays can contain functions and objects!
const students = {
    names: [ "Erica", "Jimin", "Namjoon"],
    cirriculum: {
        hard: true,
        valueable: "Absolutely"
    }

};

console.log(students.names);
console.log(students.cirriculum.hard); //true
console.log(students.names[2]); //Namjoon

// --- Data Type Methods
//hehehehehehehehehehehehehehehehehheheheheheheheheehheeh

// .subst()
let greetings = "Hi there friend";
let buddy = greetings.substr(9, 6);
console.log(buddy); //friend

// .concat()
let congreeting = "Hello";
let place = "Las Vegas";

console.log(congreeting.concat(" ", place)); // Hello Las Vegas

// .indexOf()
let nooo = "Luke I am your father";

console.log(nooo.indexOf("father")); //15

// .split()
let phrase = "Rubber baby buggy bumpers is a hard one";
let result = phrase.split(" ");

console.log(result); //["Rubber", "baby", "buggy", "bumpers", "is", "a", "hard", "one"]

// .toString
let makeMeAString = 420;
let nowImAString = makeMeAString.toString();

console.log(nowImAString); //420
// .toFixed()
let makeMeFixed = 58320.73642;
let fixed = makeMeFixed.toFixed(2);

console.log(fixed); //580320.74

// --- Array Methods ---
const mountRushmoreTesting = ["Washington", "Jefferson", "Roosevelt"];

//mountRushmoreTesting.push("Abraham"); // ADD END added Abraham to end of array
//mountRushmoreTesting.pop(); //REMOVED ENDremoves last item
//mountRushmoreTesting.unshift("lincoln"); //ADD BEGINNING added to beginning of array 
//mountRushmoreTesting.shift(); // REMOVED BEGINNING removed Washington

let numbers = [10, 5, 93, 5, 29, 5, 1]

console.log(mountRushmoreTesting.length); //3
console.log(mountRushmoreTesting); 
console.log(mountRushmoreTesting.indexOf("Jefferson")); //1

// .reverse()
console.log(numbers.reverse()); // 1, 5, 29, 5, 93, 5, 10
console.log(mountRushmoreTesting.reverse()); // Roosevelt , Jefferson, Washington

// .concat()
console.log(mountRushmoreTesting.concat( numbers )); // put 2 arrays together
 
// .join() turns it into a string
 let members = ["Namjoon", "Jin", "Suga"];

console.log( members.join() ); // Namjoon,Jin,Suga
console.log(typeof members.join()); //string
console.log(members.join("")); //"" quotes take away commas NamjoonJinSuga
console.log(members.join(" ")); // empty space addes a space Namjoon Jin Suga
console.log(members.join("-")); //addes hyphen Namjoon-Jin-Suga

// .sort() puts them in alphabetical/numerical order
let books = ["Haryy Potter", "Percy Jackson", "Gatsby"];

console.log(books.sort()); // Gatsby, Haryy Potter, Percy Jackson

let orderNumbers = [ 25, 1, 3, 69, 10, 36, 42];

console.log(orderNumbers.sort(function(a, b)
{return a-b })); // shows number in numerical order



// Practice
/* Write an array that contains the names of celebritites
Get the index of one name in that array (using an array method).
Add another person in the front of the array (using an array method).
Combine two arrays  */

const musicians = ["Shawn Mendes", "Billie Eilish", "Conan Gray", "Olivia Rodgrigo", "BTS"];

console.log(musicians.indexOf("Conan Gray")); //2

musicians.unshift("Khalid");
console.log(musicians); // added Khalid to beginning of array


const actors = ["Zendaya", "Angelina Jolie", "Sandra Oh", "Noah Schnapp"];

console.log(musicians.concat(actors)); // combined 2 arrays




