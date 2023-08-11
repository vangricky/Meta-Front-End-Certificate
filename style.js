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

var result = 50;

if (result > 40) {
    console.log("Congrats! You passed the test!")
} else {
    console.log("Sorry, you did not pass the test!")
}

//IF ELSE STATEMETNS

var place = "first"

if (place == "first") {
    console.log("GOLD")
} else if (place == "second") {
    console.log("SILVER")
} else if (place == "third") {
    console.log("BRONZE")
} else {
    console.log("NO MEDAL")
}

// SWITCH STATEMENTS

var place = "second"

switch (place) {
    case "first":
        console.log("GOLD")
        break;
    case "second":
        console.log("SILVER")
        break;
    case "third":
        console.log("BRONZE")
        break;
    default:
        console.log("NO MEDAL")
}

var light = "green"

switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        //this block will run if no condition matches
        console.log('The light is not green, orange, or red');
        break;
 }