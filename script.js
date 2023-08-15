/* Arithmetic Operators in JS
    + addition 
    - subtraction 
    * multiplication
    / division
*/ 

/* Comparison operators in JS
    > greater than
    > less than
    == equal 
*/

// IF ELSE STATEMENTS

// var result = 50;

// if (result > 40) {
//     console.log("Congrats! You passed the test!")
// } else {
//     console.log("Sorry, you did not pass the test!")
// }

//IF ELSE STATEMETNS

// var place = "first"

// if (place == "first") {
//     console.log("GOLD")
// } else if (place == "second") {
//     console.log("SILVER")
// } else if (place == "third") {
//     console.log("BRONZE")
// } else {
//     console.log("NO MEDAL")
// }

// SWITCH STATEMENTS

// var place = "second";

// switch (place) {
//     case "first":
//         console.log("GOLD")
//         break;
//     case "second":
//         console.log("SILVER")
//         break;
//     case "third":
//         console.log("BRONZE")
//         break;
//     default:
//         console.log("NO MEDAL")
// }


// var age = 10;

// if (age > 65 || age == 65) {
//     console.log("You get your income from your pension.")
// } else if (age < 65 && age > 65 || age == 18) {
//     console.log("Each month you get a salary.")
// } else {
//     console.log("The value of the age variable is not numerical")
// }



// var light = "green";

// switch(light) {
//     case 'green':
//         console.log("Drive");
//         break;
//     case 'orange':
//         console.log("Get ready");
//         break;
//     case 'red':
//         console.log("Don't drive");
//         break;
//     default:
//         //this block will run if no condition matches
//         console.log('The light is not green, orange, or red');
//         break;
//  }



//  var day = "saturday";

//  switch(day) {
//      case "sunday":
//          console.log("Time for church!")
//          break;
//      case "monday":
//          console.log("NOOOOOO! I don't want the week to begin, please no!")
//          break;
//      case "tuesday":
//          console.log("NOT TUESDAY... I am so worn out already.")
//          break;
//      case "wednesday":
//          console.log("HALF WAY thereeeee..")
//          break;
//      case "thursday":
//          console.log("Alright, it's finally thursday, more than half way done now!")
//          break;
//      case "friday":
//          console.log("FRIDAY! WEEKEND TIME, time to actually sleep.. right? haha")
//          break;
//      case "saturday":
//          console.log("...still sleeping...")
//          break;
//      default:
//          console.log("What day is it...? I lost track.")
//  }


// FOR LOOP & WHILE LOOP

// for (var i = 100; i > 10; i = i - 10) {
//     for (var j = 10; j > 4; j = j - 5) {
//         console.log(i + " divided by " + j + " equals " + i / j);
//     }
// }

// var cubes = 'ABCDEFG';
// //styling console output using CSS with a %c format specifier
// for (var i = 0; i < cubes.length; i++) {
//     var styles = "font-size: 40px; border-radius: 10px; border: 1px solid blue; background: pink; color: purple";
//     console.log("%c" + cubes[i], styles)
// }

// ---------------------------------------------------------------------------------------------------

// FUNCTIONS

//Start writing a function by using the term 'function (funciton name goes after the word function)'

// ARRAYS

// var train1 = ["wheat", "barley", "potato", "salt", "rocks"]

// for (var i = 0; i < train1.length; i++) {
//     console.log(train1[i])
// }

//TRY CATCH THROW ERROR HANDLING

// try {
//     console.log(a + b)
// } catch (err) {
//     console.log(err)
//     console.log("There was an error.")
//     console.log("The error was saved in the error log.")
// }
// console.log("My program does not stop.")

// Object Oriented Programming (OOP)
//Functional Programming

//Functional Programming

// var currencyOne = 100;
// var currencyTwo = 0;
// var exchangeRate = 1.2;

// function convertCurrency(amount, rate) {
//     return amount * rate
// }

// currencyTwo = convertCurrency(currencyOne, exchangeRate);

// console.log(currencyTwo)

// //SCOPE
// //Scope in JS works similar to a two-way mirror glass
// //Below is a project that was graded from Coursera course

// // Task 1: Build a function-based console log message generator
// function consoleStyler(color, background, fontSize, txt) {
//     var message = "%c" + txt;
//     var style = `color: ${color};`
//     style += `background: ${background};`
//     style +=`font-size: ${fontSize};`
//     console.log(message, style)
// }

// // Task 2: Build another console log message generator
// function celebrateStyler(reason) {
//     var fontStyle = "color: tomato; font-size: 50px";
//     if (reason == "birthday") {
//         console.log(`%cHappy birthday`, fontStyle);
//     } else if (reason == "champions") {
//         console.log(`%cCongrats on the title!`, fontStyle);
//     } else {
//         console.log("message, style");
//     }
// }

// // Task 3: Run both the consoleStyler and the celebrateStyler functions
// consoleStyler('#1d5c63', '#ede6db', '40px', 'Congrats!')
// celebrateStyler('birthday')

// // Task 4: Insert a congratulatory and custom message
// function styleAndCelebrate() {
//     consoleStyler('ef7c8e', 'fae8e0', '30px', 'You made it!');
//     celebrateStyler('champions');
// }
// // Call styleAndCelebrate
// styleAndCelebrate()


// -----------------------------------------------------------------------------

// var, let , const
//let and const are more STRICT
// let and const: cant be used before it is declared, variable can't be redeclared, its scoped to the block
// Use 'let' if the value will change in the future, and use 'CONST' if the value will NEVER change... basically

// var keyword

// 1. We CAN access a var variable before initialization ... (before its even made)
    // ... as long as the var variable IS EVENTUALLY INITIALIZED
    // ... ANYWHERE in our code
// console.log(user)

// 2. We CAN declare and redeclare the same var variable without errors
// var user = "Mary";
// var user = "Joanna";
// var user = "Mark";

//console.log(user)

// let keyword

// 1.We CANNOT access a let variable BEFORE we create it
//console.log(user): //Error!
// let user;

// 2. We CAN declare an unassigned variable with let
//let user;
//console.log(user);

// 3. We CAN'T redeclare a let variable
// let user = "Anna"

// 4. But we CAN re-assign it
//user = "Anna";
// console.log(user)
//as you can see, comparing line 245 and 248, in 245, it has the word "let" before user, in 248, it doesn't have the keyword "let"

// const keyword

// 1. The const variable MUST BE INITIALIZED
// console.log(user); //Error!
// const user;

// 2. We CANT access the const variable before initialization
// console.log(user); //Unexpected token error
// const user = "Andrew";

// 3. We CAN'T redeclare a const variable
// user = "Anna";


// ------------------------------------------------------------------------------------------------
// Object-Orientated Programming

// example 1
// var purchase1 = {
//     shoes: 100,
//     stateTax: 1.2,
//     totalPrice: function() {
//         var calculation = this.shoes * this.stateTax;
//         console.log('Total Price:', calculation);
//     }
// }

// var purchase2 = {
//     shoes: 50,
//     stateTax: 1.2,
//     totalPrice: function() {
//         var calculation = this.shoes * this.stateTax;
//         console.log('Total Price:', calculation);
//     }
// }

// purchase1.totalPrice();
// purchase2.totalPrice();

// 'this' means, THIS "object". above, we see that in purchase1 object, i used 'this'. It refers to THIS oject... so purchase1
//it also makes coding faster because i can copy line 274-275 and use it in other objects.

// functional programming

// var shoes = 100;
// var stateTax = 1.2;

// function totalPrice(shoes,tax) {
//     return shoes * tax;
// }

// var toPay = totalPrice(shoes, stateTax);
// console.log(toPay);

// Object-oriented programming

// example 1

// var purchase1 = {
//     shoes: 100,
//     stateTax:  1.2,
//     totalPrice: function() {
//         var calculation = this.shoes * this.stateTax;
//         console.log('Total Price:', calculation);
//     }
// }
// purchase1.totalPrice()

// // example 2

// var purchase2 = {
//     shoes: 50,
//     stateTax: 1.2,
//     totalPrice: function() {
//         var calculation = this.shoes * this.stateTax;
//         console.log('Total Price:', calculation);
//     }
// }

// purchase2.totalPrice();

// -------------------------------------------------------------------------------------

// clases
// class Car {
//     constructor(color, speed) {
//         this.color = color;
//         this.speed = speed;
//     }

//     turboOn() {
//         console.log("Turbo is on!")
//     }
// }

// const car1 = new Car("red", 120)
// car1.turboOn();

// The four fundamental OOP principles are ' inheritance, encapsulation, abstraction, and polymorphism.
// use the ' new ' keyword to create a new oject.
// use the ' extends ' keyword to relate an object to another object

// OOP Principle: Polymorphism example:
// const bicycle = {
//     bell: function() {
//         return "Ring, ring! Watch out, please!"
//     }
// }

// const door = {
//     bell: function() {
//         return "Ring, ring! Come here, please!"
//     }
// }

// function ringTheBell(thing) {
//     console.log(thing.bell())
// }

// ringTheBell(bicycle)

// below is an example of polymorphism using classes in JavaScript

// class Bird {
//     useWings() {
//         console.log("Flying!")
//     }
// }
// class Eagle extends Bird {
//     useWings() {
//         super.useWings()
//         console.log("Barely flapping!")
//     }
// }
// class Penguin extends Bird {
//     useWings() {
//         console.log("Diving!")
//     }
// }
// var baldEagle = new Eagle();
// var kingPenguin = new Penguin();
// baldEagle.useWings(); // "Flying! Barely flapping!"
// kingPenguin.useWings(); // "Diving!"


// function Icecream(flavor) {
//     this.flavor = flavor;
//     this.meltIt = function() {
//         console.log(`The ${this.flavor} icecream has melted`);
//     }
// }

// let kiwiIcecream = new Icecream("kiwi");
// let appleIcecream = new Icecream("apple");
// kiwiIcecream; // --> Icecream {flavor: 'kiwi', meltIt: ƒ}
// appleIcecream; // --> Icecream {flavor: 'apple', meltIt: ƒ}

// prototype

// var bird = {
//     hasWings: true,
//     canFly: true,
//     hasFeathers: true 
// }
//  var eagle1 = Object.create(bird);
//  console.log("eagle1: ", eagle1);

//  console.log("eagle1 has wings:", eagle1.hasWings);
//  console.log("eagle1 can fly:", eagle1.canFly);
//  console.log("eagle1 has feathers:", eagle1.hasFeathers)

//  var eagle2 = Object.create(bird);
//  console.log("eagle2 has wings:", eagle2.hasWings);

//  var penguin1 = Object.create(bird);
//  penguin1.canFly = false;
//  console.log("penguin1: ",penguin1);
//  console.log("penguin1 has feathers:", penguin1.hasFeathers);
//  console.log("penguin1 can fly:", penguin1.canFly);

//  class Train {
//     constructor(color, lightsOn) {
//         this.color = color;
//         this.lightsOn = lightsOn;
//     }
//     toggleLights() {
//         this.lightsOn = !this.lightsOn;
//     }
//     lightsStatus() {
//         console.log("Lights on?", this.lightsOn);
//     }
//     getSelf() {
//         console.log(this);
//     } 
//     getPrototype() {
//         var proto = Object.getPrototypeOf(this);
//         console.log(proto);
//     }
//  }

// var myFirstTrain = new Train("red", false);
// console.log(myFirstTrain)

// var mySecondTrain = new Train("blue", false);
// var myThirdTrain = new Train("blue", false);

// var train4 = new Train('red', false);
// train4.toggleLights();
// train4.lightsStatus();
// train4.getSelf();
// train4.getPrototype();

// class HighSpeedTrain extends Train {
//     constructor(passengers, highSpeedOn, color, lightsOn) {
//         super(color, lightsOn);
//         this.passengers = passengers;
//         this.highSpeedOn = highSpeedOn;
//     }
//     toggleHighSpeed() {
//         this.highSpeedOn = !this.highSpeedOn;
//         console.log("High speed status:", this.highSpeedOn);
//     }
//     toggleLights() {
//         super.toggleLights();
//         super.lightsStatus();
//         console.log("Lights are 100% operation.")
//     }
// }

// var myFirstTrain = new Train('red', false);
// console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
// var mySecondTrain = new Train('blue', false);
// var myThirdTrain = new Train('blue', false);

// var train4 = new Train('red', false);
// train4.toggleLights(); // undefined
// train4.lightsStatus(); // Lights on? true
// train4.getSelf(); // Train {color: 'red', lightsOn: true}
// train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

// var train5 = new Train('blue', false);
// var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

// train5.toggleLights(); // undefined
// train5.lightsStatus(); // Lights on? true
// highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.

// class Animal {
//     conducter(color = 'yellow', energy = 100) {
//         this.color = color;
//         this.energy = energy;        
//     }
//     isActive() {
//         if(this.energy > 0) {
//             this.energy -= 20;
//             console.log("Energy is decreasing, currently at:", this.energy)
//         } else if (this.energy == 0) {
//             this.sleep()
//         }
//     }
//     sleep() {
//         this.energy += 20;
//         console.log("Energy is increasing, currently at:", this.energy)
//     }
//     getColor() {
//         console.log(this.color)
//     }
// }

// class Cat extends Animal {
//     constructor(sound = 'purr', canJumpHigh = true, canClimbTrees = true, color, energy) {
//         super(color, energy);
//         this.sound = sound;
//         this.canClimbTrees = canClimbTrees;
//         this.canJumpHigh = canJumpHigh;
//     }
//     makeSound() {
//         console.log(this.sound);
//     }
// }

// class Bird extends Animal {
//     constructor(sound = 'chirp', canFly = true, color, energy) {
//         super(color, energy);
//         this.sound = sound;
//         this.canFly = canFly;
//     }
//     makeSound() {
//         console.log(this.sound);
//     }
// }

// class HouseCat extends Cat {
//     constructor(houseCatSound = "meow", sound, canJumpHigh, canClimbTrees, color, energy) {
//         super(sound, canJumpHigh, canClimbTrees, color, energy);
//         this.houseCatSound = houseCatSound
//     }
//     makeSound(option) {
//         if (option) {
//             super.makeSound();
//         }
//         console.log(this.houseCatSound);
//     }
// }

// class Tiger extends Cat {
//     constructor(tigerSound = "Roar!", sound, canJumpHigh, canClimbTrees, color, energy) {
//         super(sound, canJumpHigh, canClimbTrees, color, energy);
//         this.tigerSound = tigerSound;
//     }
//     makeSound(option) {
//         if (option) {
//             super.makeSound();
//         }
//         console.log(this.tigerSound);
//     }
// }

// class Parrot extends Bird {
//     constructor(canTalk = false, sound, canFly, color, energy) {
//         super(sound, canFly, color, energy);
//         this.canTalk = canTalk;
//     }
//     makeSound(option) {
//         if (option) {
//             super.makeSound();
//         }
//         if (this.canTalk) {
//             console.log("I'm a talking parrot!")
//         }
//     }
// }

// var polly = new Parrot(true);
// var fiji = new Parrot(false);

// polly.makeSound();
// fiji.makeSound();

// polly.color;
// polly.energy;

// polly.isActive();

// var penguin = new Bird("shriek", false, "black and white", 200);
// penguin;

// penguin.sound;
// penguin.canFly;
// penguin.color;
// penguin.energy;
// penguin.isActive;

// var leo = new HouseCat();
// leo.makeSound(false);
// leo.makeSound(true);

// var cuddles = new Tiger();
// cuddles.makeSound(false);
// cuddles.makeSound(true);

// below is the second programming project
// Task 1: Code a Person class
// class Person {
//     constructor(name = "Tom", age = 20, energy = 100) {
//         this.name = name;
//         this.age = age;
//         this.energy = energy;
//     }
//     sleep() {
//         this.energy += 10;
//     }
//     doSomethingFun() {
//         this.energy -= 10;
//     }
// }
// // Task 2: Code a Worker class
// class Worker extends Person {
//     constructor(name, age, energy, xp = 0, hourlyWage = 10) {
//         super(name, age, energy)
//         this.xp = xp;
//         this.hourlyWage = hourlyWage;
//     }
//     goToWork() {
//         this.xp += 10
//     }
// }
// // Task 3: Code an intern object, run methods
// function intern() {
//     var internObject = new Worker("Bob", 21, 110, 0, 10);
//     internObject.goToWork();
//     return internObject;
// }

// // Task 4: Code a manager object, methods
// function manager() {
//     var managerObject = new Worker("Alice", 30, 120,100, 30);
//     managerObject.doSomethingFun();
//     return managerObject;
// }

// console.log(intern())
// console.log(manager())

// ---------------------------------------------------------------------

// Arrays  // for of loops

// const colors = ['red', 'orange', 'yellow']
// for (var color of colors) {
//     console.log(color)
// }

//Object.keys()
//Object.keys examples below
// const car2 = {
//     speed: 200,
//     color: "red"
// }
// console.log(Object.keys(car2)); // ['speed','color']
//basically, this will output the "KEY" values in the object.. hence the name Object.keys <---


//Object.values()
//Object.values example below
// const car3 = {
//     speed: 300,
//     color: "yellow"
// }
// console.log(Object.values(car3)); // [300, 'yellow']
//basically, just like Object.keys, this one is Object.values... will outout each value of a key in the Object.


// Object.entries()
// Object.entries //example below
// const car4 = {
//     speed: 400,
//     color: 'magenta'
// }
// console.log(Object.entries(car4));
//this Object method will output the key and value, next to each other so like: [key, value]

//other example , for fun:
// var clothingItem = {
//     price: 50,
//     color: 'beige',
//     material: 'cotton',
//     season: 'autumn'
// }

// for (key of Object.keys(clothingItem)) {
//     console.log(key, ":", clothingItem[key])
// }

// function testBracketsDynamicAccess() {
//     var dynamicKey;
//     if(Math.random() > 0.5) {
//       dynamicKey = "speed";
//      }else{
//        dynamicKey = "color";
//      }
  
//       var drone = {
//         speed: 15,
//         color: "orange"
//       }
  
//       console.log(drone[dynamicKey]);
//   }
//   testBracketsDynamicAccess();

// const car = {
//     engine: true,
//     steering: true,
//     speed: "slow"
// }

// const sportsCar = Object.create(car);
// sportsCar.speed = "fast";
// console.log("The sportsCar object: ", sportsCar);

// console.log('------ for-in is unreliable -----');
// for (prop in sportsCar) {
//     console.log(prop);
// }

// console.log(".", "Iterating over object AND its prototype!");

// console.log("'----- for-of is reliable -----");
// for (prop of Object.keys(sportsCar)) {
//     console.log(prop + ": " + sportsCar[prop]);
// }
// console.log(".", "Iterating over object's OWN PROPERTIES only!")

//ES6 Strings

// let noMultiLine = "No multi-line strings in ES6";
// console.log("Did you know? " + noMultiLine);

//ES6 Multi-line template literals

// let multiLine = `
//     Using ES6
//     backticks,
//     multi-line
//     strings are
//     possible!
//     `;

// console.log(multiLine)

//ES6 variable interpolation

// let first = `He said, "Don't you know? ES6, it's got some great features!`;
// let second = `"Wouldn't you want to learn more?", he asked.`

// console.log(`${first} - and I got curious. ${second}`);


// objects ,arrays , maps , sets

//ojects

// const car = {
//     owner: 'John',
//     color: 'red',

//     engineOn: function() {
//         console.log("engine is on")
//     }
// }
//key, value pairs

// arrays

// var testArray = [0, 1, 2, 3, 4]

// const grades = [75, 95, 90, 85, 80, 85];
// let gradesSum = 0;

// for (i = 0; i < grades.length; i++) {
//     gradesSum += grades[i]
// }
// console.log(gradesSum / grades.length)

// Map
// key - value pairs

// Set
// const set = new Set()
// const house1 = 'red';
// const house2 = 'blue';
// const house3 = 'red'

// const houses = new Set()
// houses.add(house1).add(house2).add(house3)
// console.log(houses) //Set(2){'red', 'blue'}


// MORE WITH ARRAYS - 3 METHODS ( forEach, filter, map)

// the forEach() method:
// const fruits = ['kiwi','mango','apple','pear'];
// function appendIndex(fruit, index) {
//     console.log(`${index}. ${fruit}`)
// }
// fruits.forEach(appendIndex);

// const veggies = ['onion', 'garlic', 'potato'];
// veggies.forEach( function(veggie, index) {
//     console.log(`${index}. ${veggie}`);
// });

// THE filter() method

// const nums = [0, 10, 20, 30, 40, 50];
// nums.filter( function(num) {
//     return num > 20;
// })


// THE map method (example below wont run)

// [0,10,20,30,40,50].map( function(num) {
//     return num / 10
// })

// WORKING with Objects in JavaScript
//The example below demonstrates how to use the object data structure to complete a specific task. This task is to convert an object to an array:

// const result = [];
// const drone = {
//     speed: 100,
//     color: 'yellow'
// }
// const droneKeys = Object.keys(drone);
// droneKeys.forEach( function(key) {
//     result.push(key, drone[key])
// })
// console.log(result)

// To make a new Map, you can use the Map constructor:
// new Map():

// examples:
// let bestBoxers = new Map();
// bestBoxers.set(1, "The Champion");
// bestBoxers.set(2, "The Runner-up");
// bestBoxers.set(3, "The third place");

// console.log(bestBoxers);

// console.log(bestBoxers.get(1))

// To make a new Set, type ' new Set(); '

// const repetitiveFruits = ['apple', 'pear', 'apple', 'pear', 'plum', 'apple'];
// const uniqueFruits = new Set(repetitiveFruits);
// console.log(uniqueFruits)

// Spread Operator
// Tool used to spread array items and join objects together

//Three dots method

// let top3 = [
//     "The Colosseum",
//     "Trevi Fountain",
//     "The Vatican City"
// ];

// function showItinerary(place1, place2, place3) {
//     console.log("Visit " + place1);
//     console.log("Then visit " + place2);
//     console.log("Finish with a visit to " + place3);
// }

// showItinerary()
// showItinerary(top3[0], top3[1], top3[2])

// BELOW, this method is called: spread operator (three dots)
// showItinerary(...top3);

// const top7 = [
//     "The Colosseum",
//     "The Roman Forum",
//     "The Vatican",
//     "Trevi Fountain",
//     "The Pantheon",
//     "Piazza Venezia",
//     "The Palatine Hill"
// ]

// const [] = top7;
// const [first, second, third, ...secondVisit] = top7;

// function addTaxToPrices(taxRate, ...itemsBought) {
//     return itemsBought.map(item => taxRate * item)
// }
// let shoppingCart = addTaxToPrices(1.1, 46, 89, 35, 79);
// console.log(shoppingCart);

// ADDING ARRAYS TO ARRAYS!!!
// const fruits = ['apple', 'pear', 'plum']
// const berries = ['blueberry', 'strawberry']
// const fruitsAndBerries = [...fruits, ...berries] // concatenate
// console.log(fruitsAndBerries); // outputs a single array

// const flying = { wings: 2 }
// const car = { wheels: 4 }
// const flyingCar = {...flying, ...car}
// console.log(flyingCar) // {wings: 2, wheels: 4}

//    ADD NEW MEMBERS TO ARRAYS WITHOUT USING THE push() METHOD
// let veggies = ['onion', 'parsley'];
// veggies = [...veggies, 'carrot', 'beetroot'];
// console.log(veggies);


//     CONVERT A STRING TO AN ARRAY USING THE SPREAD OPERATOR
// const greeting = "Hello";
// const arrayOfChars = [...greeting];
// console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

//      COPY EITHER AN OBJECT OR AN ARRAY INTO A SEPERATE ONE
// const car1 = {
//     speed: 200,
//     color: 'yellow'
// }
// const car2 = {...car1}

// car1.speed = 201

// console.log(car1.speed, car2.speed)

// const meal = ['soup', 'steak', 'ice cream']
// let [starter] = meal;
// console.log(starter);

// let set = new Set();
// set.add(1);
// set.add(2);
// set.add(3);
// set.add(2);
// set.add(1);

// console.log(set)

// function count(...basket) {
//     console.log(basket.length)
// }
// count(10, 9, 8, 7, 6)



//DOM (Document Object Model)

//Elements tab : used to interact with the DOM
// Access through the devtools in the broswer window
// Browser allows you to interact with the DOM

// const h2 = document.createElement("h2")
// h2.innerText = "This is an h2 heading"
//h2.setAttrivuate('id', 'sub-heading')
//h2.setAttrivuate('class', 'secondary')
// document.body.appendChild(h2)

// DOM Manipulation (JavaScript Selectors) #The framework a browser uses to read and store a webpage
// document.

// BELOW :   You will select the query that is 'p'. It will display text, if p has text.
// document.querySelector('p')
// document.querySelector('a')


//  USER-TRIGGERED EVENTS (EVENT listeners)

/* <button type="button" class="btn btn-lg btn-primary" onclick="clickHandler()">
    Primary button
</button> */

//    EVENT HANDLERS
// BELOW, I TYPED IT INTO THE CONSOLE OF GOOGLE CHROME

// const target = document.querySelector('body')

// function handleClick() {
//     console.log("clicked the body")
// }
// target.addEventListener('click', handleClick)

// function handleClick2() {
//     console.log("clicked the heading")
// }



//     EXERCISE: WEB PAGE CONTENT UPDATE
//      To capture user input, you can use the built-in prompt() method, like this:
// let answer = prompt("What is your name?");
// if (typeof(answer) === 'string') {
//     var h1 = document.createElement('h1')
//     h1.innerText = answer;
//     document.body.innerTExt = '';
//     document.body.appendChild(h1);
// }

// ---------------

// var h1 = document.createElement('h1')
// h1.innerText = "Type into the input to make this text change"

// var input = document.createElement('input')
// input.setAttribute('type', 'text')

// document.body.innerText = '';
// document.body.appendChild(h1);
// document.body.appendChild(input);

// input.addEventListener('change', function() {
//     h1.innerText = input.value
// })




//          EXERCISE: CAPTURE DATA 
// const h1 = document.querySelector('h1')

// let arr = [
//     'Example Domain',
//     'First Click',
//     'Second Click',
//     'Third Click'
// ]

// function handleClicks() {
//     switch(h1.innerText) {
//         case arr[0]:
//             h1.innerText = arr[1]
//             break;
//         case arr[1]:
//             h1.innerText = arr[2]
//             break;
//         case arr[2]:
//             h1.innerText = arr[3]
//             break;
//         default:
//             h1.innerText = arr[0]
//     }
// }

// h1.addEventListener('click', handleClicks)


//    LITTLE PEEK OF JSON (JavaScript Object Notaion)
// const data = {
//     firstName: "John",
//     lastName: "Doe",
//     greeting: "Hello"
// }
// undefined
// JSON.stringify(data)





// class Cake {
//     constructor(lyr) {
//         this.layers = lyr
//     }

//     getLayers() {
//         return this.layers;
//     }
// }

// class WeddingCake extends Cake {
//     constructor() {
//         super(2)
//     }

//     getLayers() {
//         return super.getLayers() * 5;
//     }
// }

// var result = new WeddingCake();
// console.log(result.getLayers())





//     BELOW IS JUST REVIEW FOR THE OOP
//     OBEJCT ORIENTED PROGRAMMING
//     THINGS TO KNOW AND REMEMBER
//     1. Abstraction
//     2. Inheritance
//     3. Polymorphism
//     4. Encapsulation

//     OOP EXAMPLE:
// var purchase1 = {
//     shoes: 100,
//     stateTax: 1.2,
//     totalPrice: function() {
//         var calculation = purchase1.shoes * purchase1.stateTax;
//         console.log('Total price:', calculation)
//     }
// }

// purchase1.totalPrice()

// var purchase2 = {
//     shoes: 50,
//     stateTax: 1.2,
//     totalPrice: function() {
//         var calculation = purchase2.shoes * purchase2.stateTax;
//         console.log('Total price:', calculation)
//     }
// }

// purchase2.totalPrice()

// ABOVE, in line 1114 and 1125, we used the variable name, then '-.shoes; / '-.stateTax'
// We can just skip writing the variable altgother and just write the 'this' keyword. 
// 'this' will refer to the variable (object) that it is currently in.
// So for example, I will write line 1121-1128 with the updated 'this' keyword

// var purchase3 = {
//     shoes: 10,
//     stateTax: 1.2,
//     totalPrice: function() {
//         var calculation = this.shoes * this.stateTax;
//         console.log('Total price:', calculation);
//     }
// }
// purchase3.totalPrice()

// FUNCTIONAL PROGRAMMING EXAMPLE

// var shoes = 100;
// var stateTax = 1.2;

// function totalPrice(shoes, tax) {
//     return shoes * tax
// }

// var toPay = totalPrice(shoes, stateTax);

// console.log(toPay);

// TRANSLATE THE EXAMPLE ABOVE TO OOP:

// var purchase1 = {
//     shoes: 100,
//     stateTax: 1.2,
//     totalPrice: function() {
//         var calculation = this.shoes * this.stateTax;
//         console.log('Total price:', calculation);
//     }
// }

// purchase1.totalPrice()


//          CLASSES FUNDAMENTALS ( IMPORTANT !! )
//          TO CREATE A CLASS, type 'class' keyword and type the desired title for the class name
//          make sure the class name is in UPPERCASE letters!
//          FOR EXAMPLE:

// class Car {
//     constructor(color, speed) {
//         this.color = color;
//         this.speed = speed;
//     }
    
//     turboOn() {
//         console.log("turbo is on!")
//     }
// }

//          BELOW, WE MAKE A NEW OBJECT USING THE TEMPLATE WE MADE WITH 'class' ABOVE...
//          EXAMPLE OF HOW TO MAKE A NEW OBJECT, BELOW

// const car1 = new Car("red", 120)

// car1.turboOn()


//          BELOW, IS AN EXAMPLE OF USING OBJECT CREATE, same thing as line 1199. JUST ANOTHER WAY TO CODE IT
// var myCar = Object.create(Car)
// console.log(Car) //[class Car]

// var myCar = new Car();
// console.log(Car)
// myCar.turboOn()


//          INHERITANCE
//Inheritance is one of the foundations of object-oriented programming.

/* 


There is a base class of "Animal".

There is another class, a sub-class inheriting from "Animal", and the name of this class is "Bird".

Next, there is another class, inheriting from "Bird", and this class is "Eagle".

Thus, in the above example, I'm modelling objects from the real world by constructing relationships between Animal, Bird, and Eagle. Each of them are separate classes, meaning, each of them are separate blueprints for specific object instances that can be constructed as needed.

To setup the inheritance relation between classes in JavaScript, I can use the extends keyword, as in 'class B extends A', or for 
better example: 'class Toyota extends Car'
*/

// class Animal {
//     constructor(legs, eyes) {
//         this.legs = legs;
//         this.eyes = eyes
//     }

//     speedOn() {
//         console.log("WOOHOO! This animal is fast as heck!")
//     }
// }

// const cheetah = new Animal(true, true)
// console.log(Animal)
// cheetah.speedOn()

// class Bird extends Animal {
//     constructor(legs, eyes, mouth, nose, ears) {
//         super(legs, eyes)
//         this.mouth = mouth;
//         this.nose = nose;
//         this.ears = ears;
//     }

//     walk() {
//         console.log("The animal is currently walking...")
//     }
// }

// const raven = new Bird(true, true, true, true, true)
// raven.walk()
// raven.speedOn()

//              ABSTRACTION


//              POLYMORPHISM

/*
So, to understand what polymorphism is about, let's consider some real-life objects.
A door has a bell. It could be said that the bell is a property of the door object. 
This bell can be rung. When would someone ring a bell on the door? Obviously, to get someone to show up at the door.
Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object. 
This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell 
on a bicycle is not the same as ringing the bell on a door.

BASICALLY, THE EXAMPLE ABOVE THAT YOU READ HELPS YOU UNDERSTAND THAT THERE ARE 'MULTIPLE'
FORMS Of AN OBJECT
 */      

// const bicycle = {
//     bell: function() {
//         return "RING! Get out of the way!"
//     }
// }
// const door = {
//     bell: function() {
//         return "RING! Open the door!"
//     }
// }

// bicycle.bell()
// door.bell()
// console.log(bicycle.bell())
// console.log(door.bell())

//I CAN NOW MAKE A FUNCTION THAT WILL CALL EITHER THE bicycle OR door.
// I MAKE A FUNCTION WITH 1 PARAMETER.
//NEXT, I WILL CONSOLE.LOG 'door' or 'bicycle'

// function ringTheBell(thing) {
//     console.log(thing.bell())
// }

// ringTheBell(door)






//                                      REVIEW FOR WEEK 3 DONE ABOVE

//          NODE JS (backend)
//NPM package manager
//      lets developers use libraries and frameworks as node.js modules
// npm (node package manager)
// npm and node might be installed your device, or you may have to downlaod it.

//      NPM COMMANDS:
//      node -v
//      npm -v

//      to install any node module from npm repo
//      npm install lower-case
// import { lowerCase, localeLowerCase } from "lower-case";
// lowerCase("Word"); //=> "word"

//                  HOW TO START A NEW NODE PROEJCT
//      WHEN YOU WANT TO START A NEW PROJECT, FIRST, OPEN A FOLDER ON YOUR MACHINE WHERE YOU WANT 
//      TO PLACE YOUR PROJECT FILES
//      THEN RUN THE FOLLOWING COMMAND IN THE TERMINAL
//                  npm init
//      package.json will be installed, everytime. there are over 11 millions modules in the repo.
//      basically, library where other coders have compiled their code
//      OTHER NPM INSTALL COMMANDS (for libraries)
//                  npm i react
//                  npm i webpack
//                  npm i bootstrap-vue
//                  npm i @angular/core
//      npm install <-- main command



//                          TESTING COURSE
/*
Objectives for this course:
1. Identify why developersr test their code
2. Exaplain the red-green-refactor cycle
3. Differentiate between manual and automated testing
4. Demonstrate an understanding of unit testing
*/


// expect concatStrings to return "abcdef" when I pass it "abc" as the first arg. and "def" as the sec. arg.
// function concatStrings(strA, strB) {
//     return strA + strB
// }
// concatStrings("abc", "def")

//JavaScript testing frameworks

/*
Tests as expactation-documenting code
-- Code syntax that specifies the expected result of passing specific values to your functions */

// JEST (testing)
// use the word 'expect' function
// expect(concatStrings("abc", "def")).toBe("abcdef");


//          REFACTORING
// Updating code, without affecting the results it produces.


//          TDD Approach
/*
1. Write a failing test
2. Rewrite code to pass
3. Optimize code without changing its results  
*/

/*The benefits of TDD Approach to testing your js code is because:
- Repeatable Code
-  Automateic Testing
- Cost and Time Effective*/



//TESTING , definition: Confirming that software works as specified in the software's requirements!
//              3 TYPES OF TESTING!!!!!
//  1. e2e (end to end)
//  2. Integration
//  3. Unit


//      e2e = slow and time consuming (unfortunately)
//open web app in browser, then interact it the same way a user would. just going through the app.
//basically testing it end to end, lol.


// e2e testing frameworks available 
/*
1. WebdriverJS
2. Protractor
3. Cypress  
*/



//      INTEGRATION TESTING  (faster and cheaper)
//testing parts of your app and see how it works togeter

//some INTEGRATION testing softwares include:
/*
1. React testing library
2. Enzyme 
*/


//      UNIT TESTING (BEST FOR FAST AND CHEAP)
// self contained, meant to test code in isoluation
//best test option







//                      JEST (JavaScript testing framework)

// Built by Meta
// JavaScript-based library

//Babel TypeSCript Node Vue
//Code Coverage

//              Mocking: Separating code from related dependencies during testing
// mocking is helpful. 
// front end can do their stuff, then use mock to help complete the backend and test thier data
//In jest, we use in-built mocking functions

//          SNAPSHOT TESTING: used by web developers to verify that there are no regressions in the DOM


//              TDD (Test Driven Development)
// Streamline of writing code, that will satisfy some requirements

// test('returns true if statusOfKeys exists', function() {
//     expect(statusOfKeys).toBeDefined()
// })

// //this will fail
// function statusOfKeys() {}

//                  STEPS FOR TDD
/*
1. Read new requirement
2. Write failing test
3. Update source code
4. Run test that passes
5. Refactor implementation */

//Red, green, refactor
//red = fail
//green = pass