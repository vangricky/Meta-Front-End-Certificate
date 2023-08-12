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
class car {
    constructor(color, speed) {
        this.color = color;
        this.speed = speed;
    }

    turboOn() {
        console.log("Turbo is on!")
    }
}