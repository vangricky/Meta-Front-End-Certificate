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