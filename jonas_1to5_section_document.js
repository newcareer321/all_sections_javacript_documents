// Types of operators in javascript:

// match operators: + Addition, - subtraction,* multiplication, / devision, etc.....
// Assignment operators: x + x * x++  x-- etc........
//comparision operators: >  <  >=  <=
// Equality operators: ==  ===	!=	!==	  >  <	etc....
//Logical operators : AND OR NOT......

//switch statement

// ----------challange 1-----------------
//This challange is based on match operators like addition multipliaction etc...

// const massMark = 78;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJhon = 1.95;

// const BMIMark = massMark / (heightMark ** 2);
// const BMIJhon = massJohn / (heightJhon * heightJhon);

// const markHeigherBMI = BMIMark > BMIJhon;

// console.log(BMIMark);
// console.log(BMIJhon);
// console.log(markHeigherBMI);

//practice about match operator:

// const firstName = 'mujeeb';
// const job = 'coder';
// const birthYear = 1991;
// const year = 2019;

// const mujeeb = "I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
// console.log(mujeeb);

// const mujeebNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(mujeebNew);
// console.log(`just a regular string...`);
// console.log('string with \n\multiple \n\lines');

// ----------if else statment--------------

// const age = 15;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//     console.log('Mujeeb can start driving license 🚗');
// } else {
//     const yearsLeft = 18 - age;
//     console.log(`Mujeeb is too young. wait another ${yearsLeft} years:)`);
// }

// -------challange 2 --------------------

// const birthYear = 2012;

// let century;
// if (birthYear <= 2000) {
//     century = 20;
// } else {
//     century = 21;
// }
// console.log(century);

// const massMark = 90;
// const heightMark = 1.69;

// const massJohn = 92;
// const heightJhon = 1.95;

// const BMIMark = massMark / (heightMark ** 2);
// const BMIJhon = massJohn / (heightJhon * heightJhon);

// console.log(BMIMark, BMIJhon);

// if (massMark >= massJohn) {
//     console.log(`Mark's BMI (${BMIMark}) is higher than John's!`);
// } else {
//     console.log(`John's BMI (${BMIJhon}) is higher than Mark's!`);
// }

// ------Type conversion------------

// const inputYear = '1991';
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);
// console.log(Number('jonas'));
// console.log(typeof NaN);
// console.log(String(23), 24);

// // ------type coercion--------
// console.log('my name is ' + 26 + ' rahman');

//Truthy and falsy ////:

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// const money = 1;
// if (money) {
//     console.log("dont spend it all ;");
// } else {
//     console.log("you should get a job");
// }

// let height = 10;
// if (height) {
//     console.log("Yay! height is defined")
// } else {
//     console.log("Height is undefined");
// }

// Equality operators : practice

// const age = '18';
// if (age === 18) console.log('You just became an adult :D (strict)');

// if (age == 18) console.log('You just became an adult :D (loose)');

// const favourite = Number(prompt("what's your favourite number?"));
// console.log(favourite);
// console.log(typeof favourite);
// if (favourite === 23) {
//     console.log("cool! 23 is an amazing number!");
// } else if (favourite === 7) {
//     console.log("7 is also a cool number");
// } else {
//     console.log("Number is not 23 or 7");
// }
// if (favourite !== 23) console.log("why not 23?");

// ----use of logical operators-----

// const hasDriverLicense = true;
// const hasGoodVision = true;
// console.log(hasDriverLicense && hasGoodVision);
// console.log(hasDriverLicense || hasGoodVision);
// console.log(!hasDriverLicense);

// if (hasDriverLicense && hasGoodVision) {
//     console.log('sarah is able to drive');
// } else {
//     console.log('someone else should drive...');
// }

// const isTired = true;
// console.log(hasDriverLicense && hasGoodVision && isTired);

// if (hasDriverLicense && hasGoodVision && !isTired) {
//     console.log('sarah is able to drive');
// } else {
//     console.log('someone else should drive...');
// }

// -------------Challenge3--------------
// const scoreDolphins = (96 + 108 + 89 / 3);
// const scoreKoalas = (88 + 91 + 110 / 3);
// console.log(scoreDolphins, scoreKoalas);

// if (scoreDolphins > scoreKoalas) {
//     console.log("The winner is Dolphin");
// } else if (scoreKoalas > scoreDolphins) {
//     console.log("The winner is Koalas");
// } else if (scoreDolphins === scoreKoalas) {
//     console.log("Both are winner");
// }

// --------challenge3 with more given instuructions -----

// const scoreDolphins = (97 + 112 + 80) / 3;
// const scoreKoalas = (109 + 95 + 86) / 3;
// console.log(scoreDolphins, scoreKoalas);
// if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
//     console.log("The winner is Dolphin");
// } else if (scoreKoalas > scoreDolphins && scoreKoalas >= 100) {
//     console.log("The winner is Koalas");
// } else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
//     console.log("Both are winner");
// }
// else {
//     console.log("No one wins the trophy");
// }

// ------------------My challange----------

// const mycash = Number(prompt("how much cash in the pocket?"));
// console.log(mycash);
// if (mycash > 500) {
//     console.log("This is belongs to mujeeb")
// } else if (mycash == 500) {
//     console.log("This cash belongs to tayyib");
// } else if
//     (mycash < 300) {
//     console.log("This cash for charity");
// } else {
//     (mycash === 400)
//     console.log("This cash for students")
// }

// -----------This is swtich statment  and if else statment example----
// (To compare one value to another)

// const day = 'friday';
// console.log(day);
// switch (day) {
//     case 'monday':
//         console.log("mondy is kaddu ki kheer");
//         break;
//     case 'tuesday':
//         console.log("bailon ka jangle");
//         break;
//     case 'wednesday':
//         console.log("ham khaye kofta");
//         break;
//     case 'thursday':
//         console.log("kawwon ki barat");
//         break;
//     case 'friday':
//         console.log("madarse ku dumma");
//         break;
//     case 'saturday':
//     case 'sunday':
//         console.log("enjoy the day");
//         break;
//     default:
//         console.log("Not a valid day!");
// }

// if (day === 'sunday') {
//     console.log("kaddu ki kheer");
// } else if (day === 'tuesday') {
//     console.log("bailon ka jangle");
// } else if (day === 'wednesday') {
//     console.log("ham khaye kofta");
// } else if (day === 'thursday') {
//     console.log("kawwon ki barat");

// } else if (day === 'friday') {
//     console.log("madarse ku dumma");
// } else if (day === 'saturday' || day === 'sunday') {
//     console.log("enjoy the day");

// } else {
//     console.log("Not a valid day!");

// }
// ---conditional or ternary operator: it has 2 3 parts : condtion if and else
//it is useful when we need quick dicisions otherwise we have to use if else stament
// (use of Cond operator in few words.)
// const age = 12;
// age >= 18 ? console.log("I like to drink milk 🥛") :
//     console.log("I like to drink water 💧");

// //in very few words(this is an expression and it produce the value)
// const drink = age >= 18 ? 'wine🍷' : 'water 💧';
// console.log(2 + " " + drink);

// //in if statement

// let drink2;
// if (age >= 18) {
//     drink2 = 'wine🍷';
// }
// else {
//     drink2 = 'water💧'
// }
// console.log(3 + " " + drink2);

// console.log(4 + " " + `I like to drink ${age >= 18 ? 'wine🍷' : 'water 💧'}`);

// challange 4 (this challange covering the given topics:
// String and tmeplate literals
// Logical Operators
// The conditional Ternary Operator

// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 : bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);

// const bill = 430;
// const tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
//     bill * 0.2;
// console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`)

// ---it use in begining of the script to aviod acidental errors, it introduce the bugs,it create visible error in console----
//this ex. is specifying that...
// 'use strict';
// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("i can drive:D");

// const interface = 'audio';
// const private = 345;

// ----Function is peace of code, that we re-use over and over again, variable can hold a value but
// function can hold number of lines of code
//function body {}
//function paramaters or arguments: paramaters like variables, that specific only to this fucntion
//return: we can return any value of the function, and can be use anywhere later in our code
//conclusion: that fucntion allow us to write more maintainable code, because with functions we can create reusable  junks of code
// instead of having to manually writing the same code over and voer again

// function logger() {
//     console.log("My name is mujeeb");
// }

//calling // running // invoking  fucntion
// logger();
// logger();
// logger();

// function fruitprocessor(apples, oranges) {
//     // console.log(apples, oranges);
//     const juice = `juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }
// fruitprocessor(5, 0);
// const applejuice = fruitprocessor(5, 0);
// console.log(applejuice);
// ///in this case we did not captured the value into any variable
// // console.log(fruitprocessor(5, 0));

// ///diffrent value and diffrent output from above // we can run the function many time as much we want
// const appleOrangejuice = fruitprocessor(2, 4);
// console.log(appleOrangejuice);

// const num = Number('23');

////My own example of fucntion
// function backbone(mujeeb, habeeb) {
//     // console.log(8, 7);
//     const dad = `dad with ${mujeeb} and ${habeeb}`;
//     // return dad;
//     console.log(dad);

// }
// backbone(4, 8);
// backbone(7, 0);
// backbone(1, 4);

//function declaration, we use function keyword to declare function
// const age1 = Age1Calc(1967);

// function Age1Calc(birthyear) {
//     return 1991 - birthyear;
// }
// // console.log(age1);

// ////Ananymos function - that un named function is expression and it produces the value////
// //function experession
// const Age2Calc = function (birthyear) {
//     return 1991 - birthyear;
// }

// const age2 = Age2Calc(1967);
// console.log(age1, age2);
// (diffrences between function dec. and expression is: we can call a
// fucntion before define it, it is function but in expression it will not work. )

// 3rd function arrow function
//it is a special form of fucntion expression  more faster to write

// const Age2Calc = function (birthyear) {
//     return 1991 - birthyear;
// }

// //Arrow function
// const Age3calc = birthyear => 2037 - birthyear;
// const age3 = Age3calc(2009);
// console.log(age3);

// ///arrow fucntion ex. 2
// const yearUntilRetirement = (birthyear, firstName) => {
//     const age = 2037 - birthyear;
//     const retirement = 65 - age;
//     // return retirement;
//     return `${firstName} retires in ${retirement} years`;

// }

// console.log(yearUntilRetirement(1992, 'jonas'));
// console.log(yearUntilRetirement(1995, 'bob'));

// Functions calling other functions

// function cutFruitPieces(fruit) {
//     return fruit * 4;
// }

// function fruitprocessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangespieces = cutFruitPieces(oranges);
//     const juice = `juice with ${applePieces} piece of apple and ${oranges} pieces of orange.`;
//     return juice;
// }
// console.log(fruitprocessor(2, 3));

// my own ex.

// function addPrmises(adding) {
//     return adding + 10;
// }

// function office(tables, pens) {
//     const premisesTable = addPrmises(tables);
//     const premisesPens = addPrmises(pens);
//     const premises = `i have ${premisesTable} tables and ${premisesPens} pens please take care it`;
//     return premises;
// }
// console.log(office(4, 5));

//-------functions conclusion---------------

// const CalcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const yearUntilRetirement = function (birthyear, firstName) {
//     const age = CalcAge(birthyear);
//     const retirement = 65 - age;
//     if (retirement > 0) {
//         console.log(`${firstName} retires in ${retirement} years`);
//         return retirement;
//         console.log(`${firstName} retires in ${retirement} years`);
//     } else {
//         console.log(`${firstName} has already retired 🎉`);
//         return -1;

//     }

//     // return `${firstName} retires in ${retirement} years`;

// }

// console.log(yearUntilRetirement(1991, "mujeeb"));
// console.log(yearUntilRetirement(1970, "mike")); ``

// ------challange 5---------

// const calcAverage = (a, b, c) => (a + b + c) / 3;

// let scoreDolphins = calcAverage(44, 23, 71);
// let scoreKoalas = calcAverage(85, 54, 41);

// const checkWinner = function (avgDolphins, avgKoalas) {
//     if (avgDolphins >= 2 * avgKoalas) {
//         console.log(`Dolphins Wins! 🏆 (${avgDolphins} vs ${avgKoalas})`)

//     } else if (avgKoalas >= 2 * avgDolphins) {
//         console.log(`kolas Wins 🏆 (${avgKoalas} vs ${avgDolphins})`)
//     } else {
//         console.log("No team wins 🥺");

//     }

// }
// checkWinner(scoreDolphins, scoreKoalas);
// checkWinner(2, 200);
// checkWinner(calcAverage(85, 54, 41), calcAverage(23, 34, 27));

// ----------------Arrays An array in JavaScript is a special type of object that can hold multiple values.
// Arrays are useful for storing lists of items, such as a list of car names, or a list of numbers.

// const friend1 = "Nabeel";
// const friend2 = "Kaleem";
// const friend3 = "inaam";

// const friends = ['Nabeel', "Kaleem", "inaam"];
// console.log(friends);

// const y = new Array(1991, 1995, 1999, 2000);

// console.log(friends[0]);
// console.log(friends[2]);
// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[1] = 'khaleel';
// console.log(friends);

// friends[0] = 'jameel';
// console.log(friends);
// const firstName = 'syed';
// const mujeeb = [firstName, 'tayyib', 50 - 22, 'coder', friend1];
// console.log(mujeeb);
// console.log(mujeeb.length);

// //Exercise
// const CalcAge = function (birthYear) {
//     return 2037 - birthYear;
// }

// const Years = [1990, 1995, 2000, 2005, 2010];
// // console.log(CalcAge(Years));
// const age1 = CalcAge(Years[0]);
// const age2 = CalcAge(Years[1]);
// const age3 = CalcAge(Years[2]);

// console.log(age1, age2, age3);

// const ages = [CalcAge(Years[0]), CalcAge(Years[1]), CalcAge(Years[Years.length - 1])];
// console.log(ages)

// ---- Basic Array operation (Methods)-----

//Add Element
//

////////------challange 6-------------------

// function calcTip(bills) {
//     return bills >= 50 && bills <= 300 ? bills * 0.15 : bills * 0.2;
// }

// const bills = [125, 555, 44];

// const tip1 = calcTip(bills[0]);
// const tip2 = calcTip(bills[1]);
// const tip3 = calcTip(bills[2]);

// const tips = [tip1, tip2, tip3];
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];

// console.log(bills);
// console.log(tips);
// console.log(total);

////----------Arrays and Objects//////////
// const jonasArrays = [
//     'jonas',
//     'schdtmean',
//     2037 - 1991,
//     'teacher',
//     ['michel', 'steaven', 'peter']

// ];

// /////Objects//////////////////

// const jonas = {
//     firstName: 'jonas',
//     lastName: 'bob',
//     age: 2037 - 2020,
//     job: 'coder',
//     friends: ['michel', 'steaven', 'peter']
// }

// console.log(jonasArrays);
// console.log(jonas);
// console.log(jonas.lastName);
// console.log(jonas['lastName']);
// const namekey = 'Name';
// console.log(jonas['first' + namekey]);
// console.log(jonas['last' + namekey]);

// const intrestedIn = prompt('what do you want to know about jonas? between firstName');
// // console.log(jonas[intrestedIn]);

// if (jonas[intrestedIn]) {
//     console.log(jonas[intrestedIn]);
// } else {
//     console.log('Wrong request! chose between first name, last name, age, job and friends');
// }

// jonas.location = 'america';
// jonas['twitter'] = '@jonasschmedtman';
// console.log(jonas);

// ///small challage
// //jonas has 3 friends, and his best friend is called Michael
// console.log(`${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[1]}`);

///Object Method///////////////

// const jonas2 = {
//     firstName: 'jonas',
//     lastName: 'bob',
//     birthyear: 1991,
//     job: 'coder',
//     friends: ['michel', 'steaven', 'peter'],
//     hasDriversLicense: true,

// calcAge: function (birthyear) {
//     return 2037 - birthyear;
// }

///this keyword is idicating this function, and function has name calcAge which attached
// the jonas variable name, than prperty should from that variable or array
// calcAge: function () {
//     // console.log(this);
//     return 2037 - this.birthyear;

// }

//     calcAge: function () {
//         this.age = 2037 - this.birthyear;
//         // console.log(this);
//         return this.age;

//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he has ${this.hasDriversLicense ? 'a' : 'no'} drivers license`

//     }
// };

// console.log(jonas2.calcAge(1992));

// console.log(jonas2.age);
// console.log(jonas2.age);
// console.log(jonas2.age);

// // console.log(jonas['calcAge'](1991));

// //small challange
// //"jonas is a 46 years old teacher, and he has a drivers license";
// console.log(jonas2.getSummary());

// ------------------challange 7 --------------------------

// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }

// };

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }

// };

// mark.calcBMI();
// john.calcBMI();
// console.log(mark.bmi, john.bmi);

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI ${mark.bmi} is heigher than ${john.fullName}'s bmi (${john.bmi}) `)
// } else if (john.bmi > mark.bmi) {
//     console.log(`${john.fullName}'s BMI ${john.bmi} is heigher than ${mark.fullName}'s bmi (${mark.bmi})`)

// }

// ---------- Loop--------------------

// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`please repeat it ${rep}`);
// }

// const jonas = [
//     'jonas',
//     'schdtmean',
//     2037 - 1991,
//     'teacher',
//     ['michel', 'steaven', 'peter'],
//     true

// ];

// const types = [];

// for (let i = 0; i < jonas.length; i++) {
//     //Reading from jonas array
//     console.log(jonas[i], typeof jonas[i]);

//     //Filling types array
//     // types[i] = typeof jonas[i];
//     types.push(typeof jonas[i]);
// }
// console.log(types);

// const years = [2020, 2007, 2002, 2009];
// const ages = [];

// for (let a = 0; a < years.length; a++) {
//     ages.push(2037 - years[a]);
// }
// console.log(ages);

///continue and break
// console.log("------Only Strings--------------");

// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] !== 'string') continue;

//     console.log(jonas[i], typeof jonas[i]);
// }

// console.log("------Break with Number--------------");

// for (let i = 0; i < jonas.length; i++) {
//     if (typeof jonas[i] === 'number') break;

//     console.log(jonas[i], typeof jonas[i]);
// }

//4, 3, .....0  ---- this loop will run from oppsite side like from 4 to 0
// for (let i = jonas.length - 1; i >= 0; i--) {
//     console.log(i, jonas[i]);

// }

// for (let exercise = 1; exercise < 4; exercise++) {
//     console.log(`-------------------- starting exercise ${exercise}`);

//     for (let rep = 1; rep <= 9; rep++) {
//         console.log(` Exercise ${exercise}: lifting weight repetition ${rep}🏋️‍♂️`);
//     }
// }

// let rep = 1;
// while (rep <= 10) {
//     console.log(`WHILE: lifting weight repetition ${rep}🏋️‍♂️`);
//     rep++;

// }

///------chllange---------------------

// const calcTip = function (bill) {
//   return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
// };

// const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

// const tips = [];
// const totals = [];

// for (let i = 0; i < bills.length; i++) {
//   const tip = calcTip(bills[i]);
//   tips.push(tip);
//   totals.push(tip + bills[i]);
// }
// console.log(bills, tips, totals);

// const calcAverage = function (arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     // sum = sum + arr[i];
//     sum += arr[i];
//   }
//   // console.log(sum);
//   return sum / arr.length;
// };
// console.log(calcAverage([2, 3, 7]));
// console.log(calcAverage(totals));
// console.log(calcAverage(tips));

// const x = "23";
// if (x === 23);
// //BUG FIXME


const temperatures = [3, -2, -6, -1,  'error', 9, 13, 17, 15, 14, 9, 5];

// problem 1
//we work for a company building a smart home thermometer. our most recent task is this: 
// "given an array of tempratures of one day,calculate the temprature amplitude. 
//  keep in mind that sometimes there might be a sensor error."

//Understand the problem
//--what is the temp amplitude? Answer: diffrences between highest and lowest temp.

//2)breaking up into sup problems 
///--How to ignore errors?
////--Find max value in temp array
//--  Find min value in temp array
///-- subtract min from max (amplitude) and return it 

// const calcTempAmplitude = function(temps){
//     let max = temps[0];

//     let min =  temps[0];

//     for (let i = 0; i < temps.length; i++){
          
//         const curTemp = temps[i];
//         if(typeof curTemp !== 'number') continue;


//         if(curTemp > max) max = curTemp;
//         if(curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max - min;
// };
// const amplitude =  calcTempAmplitude(temperatures);
// console.log(amplitude);



// problem 2:
//fucntion should now receive 2 arrays of temp

///1) Understand the problem
// -- with 2 arrays, should we implement functionality twice? No! just merge two arrays 

//2) Breaking up into sub problems
// Merge 2 arrays

// const calcTempAmplitudeNew = function (t1, t2){
   

//     const temps = t1.concat(t2);
//     console.log(temps);
    

//     let max = temps[0];
//     let min =  temps[0];

//     for (let i = 0; i < temps.length; i++){
          
//         const curTemp = temps[i];
//          if(typeof curTemp !== 'number') continue;

//         if(curTemp > max) max = curTemp;
//         if(curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max-min;
// };
// const amplitudeNew =  calcTempAmplitudeNew([3, 5, 1],[9, 0, 5]);
// console.log(amplitudeNew);



//Debugging with the console and dreakpoint

// const measureKelvin = function(){
//     const measurement = {
//         type: 'temp', 
//         unit: 'celsius',

//         // C) FIX
//         // value:Number (prompt('Degree celsius')),
//         value: 10,
//     }

//     // B) FIND 
//      console.table(measurement);


//     // console.log(measurement.value);
//     // console.warn(measurement.value);
//     // console.error(measurement.value);


//     const kelvin = measurement.value  + 273;
//     return kelvin;
    
// }
// // A) IDENTIFY
// console.log(measureKelvin());

// //Using a debugger
// const calcTempAmplitudeBug = function (t1, t2){
   

//     const temps = t1.concat(t2);
//     console.log(temps);
    

//     let max = 0;
//     let min =  0;

//     for (let i = 0; i < temps.length; i++){
          
//         const curTemp = temps[i];
//          if(typeof curTemp !== 'number') continue;

//         if(curTemp > max) max = curTemp;
//         if(curTemp < min) min = curTemp;
//     }
//     console.log(max, min);
//     return max-min;
// };
// const amplitudeBug =  calcTempAmplitudeBug([3, 5, 1],[9, 4, 5]);
// // A) IDENTIFY
// console.log(amplitudeBug);


//------challange----------------
//Understand the problem






///1) Understand the problem
//-- Array transformed to String, saperated by ....
//-- What is the x days? Answer: index + 1

//2) Breaking up into sub problems
// - Transform  array into string 
// - Transform each element to string with C
// - String need to contain day (index = 1)
// - Add ..... between element and start and end of string 
// - Long string to console

// const data1 = [17, 21, 23];
// const data2 = [12, 5, -5, 0, 4];

// console.log(`......${data1[0]}c... ......${data1[1]}c... ......${data1[2]}c...`);

// const  printForecast = function (arr){

//     let str = '';
// for (let i = 0; i < arr.length; i++){

//     str += `${arr[i]}°C in ${i + 1} days .... `;

// }
// console.log('...' + str) 

//     };
// printForecast (data1);
