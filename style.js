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


// FUNCTIONS

//Start writing a function by using the term 'function (funciton name goes after the word function)'

// ARRAYS

// var train1 = ["wheat", "barley", "potato", "salt", "rocks"]

// for (var i = 0; i < train1.length; i++) {
//     console.log(train1[i])
// }

//TRY CATCH THROW ERROR HANDLING

try {
    console.log(a + b)
} catch (err) {
    console.log(err)
    console.log("There was an error.")
    console.log("The error was saved in the error log.")
}
console.log("My program does not stop.")