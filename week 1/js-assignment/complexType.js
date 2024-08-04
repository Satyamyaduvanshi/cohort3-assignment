
//**************  OBJECTS  **************** */

//ASSIGNMENT 1

function greet(user) {
    console.log(`Hello ${user.name}, and congratulations, you are ${user.age} years old!`);
}

let user = {
    name: "Satyam",
    age: 19,
    gender : 'male'
};

greet(user);


// ASSIGNMENT 2 and 3

function greetUser(user) {
    let salutation;

    switch (user.gender.toLowerCase()) {
        case 'male':
            salutation = 'Mr.';
            break;
        case 'female':
            salutation = 'Mrs.';
            break;
        default:
            salutation = 'Others';
            break;
    }

    let canVote = false;
    if(user.age >= 18){
        canVote = true;
    }


    console.log(`Hi ${salutation} ${user.name}, your age is ${user.age} and you can vote ${canVote}.`);
}


greetUser(user);



//********************** ARRAY ************** */

// filter Method: It iterates through each number in the array.

function checkNumber(numbers) {
    return numbers.filter(number => number % 2 === 0); // I'M USING callBack funciton here 
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbers = checkNumber(numbers);
console.log(evenNumbers); 


//**************** ARRAY OF OBJECTS ******* */

function agecheck(users) {
    return users.filter(user => user.age > 18);
}

const users = [
    { name: 'satyam', age: 19 },
    { name: 'hakirat', age: 27 },
];

const adults = agecheck(users);
console.log(adults);

//**************** OBJECT OF OBJECTS ******* */


//did not understand the assignmnet