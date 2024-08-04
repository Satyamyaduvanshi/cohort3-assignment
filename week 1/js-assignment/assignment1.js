//******************  Variables   ******************** */


// Create a variable for each of the following:
// your favorite color, your height in centimeters, and whether you like pizza.
// Use appropriate variable declarations (let, const, or var). Try logging it using console.log

// now a days we only use let and const in variables, var is old thing

let color = "black"
var height = 172
const pizza = true

console.log(`fav colour : ${color}`)
console.log(`length: ${height} cm`);
console.log(`like pizza : ${pizza}`)


//*********************    function          *********************** */

// Write a function sum that finds the sum of two numbers. 
// Side quest - Try passing in a string instead of a number and see what happens?

//assignment #1


function Sum(num1,num2){
    return num1+num2;
}

console.log(Sum(1,3));

// side quest

console.log(Sum("1",3));


//ASSIGNMENT #2

// Write an if/else statement that checks if a number is even or odd. If it's even, print "The number is even." 
// Otherwise, print "The number is odd."

function canVote(age){
    if (age >= 18){
        return true;
    }
    return false;
}

console.log(canVote(27));
console.log(canVote(12));

//************* **     IF/Else         ****************** */

function checkNumber(number){
    if(number % 2 == 0){
        console.log(` ${number} is even`)
    }
    else{
        console.log(` ${number} is odd`)
    }
}

checkNumber(12);


//************** LOOP ************* */

// Write a function called sum that finds the sum from 1 to a number


function totalSumOfNum(n) {
    let sumNum = 0;
    for (let i = 1; i <= n; i++) {
        sumNum = sumNum + i;
    }
    return sumNum;
}

console.log(totalSumOfNum(12)); 

