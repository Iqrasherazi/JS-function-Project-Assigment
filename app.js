
    //Ex#6.1
//  1.Function that takes two parameters, adds them together, and returns the result
function addTwoNumbers(a, b) {
    return a + b;
}

// 2.Set up two variables with different values
const num1 = 15;
const num2 = 9;

// 3.Use the function on the two variables and output the result using console.log
const result1 = addTwoNumbers(num1, num2);
console.log("Result of first  " + result1);

// 4.Create a second call to the function with two more numbers
const result2 = addTwoNumbers(6, 8);
console.log("Result of second  " + result2);



       //Ex#6.2
// 1. Create an array of descriptive words
const descriptiveWords = ["good", "excellent", "brilliant", "osum", "wow"];


 // 2. Create a function that contains a prompt asking the user for a name
 function getRandomDescriptiveWord() {
const userName = prompt("Please enter your name:");


// 3. Select a random value from the array using Math.random
const randomIndex = Math.floor(Math.random() * descriptiveWords.length);
const randomWord = descriptiveWords[randomIndex];


// 4. Output into the console the prompt value and the randomly selected array value
console.log(userName + " is " + randomWord);
 }


 // 5. Invoke the function
 getRandomDescriptiveWord();


 //Ex#6.3
// 1. Set up two variables containing number values
const number1 = 4;
const number2 = 6;


// 2. Set up a variable to hold an operator, either + or -
const operator = "+";


// 3. Create a function that retrieves the two values and the operator string value within its parameters
 function calculate(num1, num2, op) {


// Use a condition to check if the operator is + or -
 if (op === "+") {
    return num1 + num2;
 } else if (op === "-") {
    return num1 - num2;
 } else {


// Default to addition if the operator is not valid
    return num1 + num2;
      }
  }

  // 4. Call the function using your variables and output the response to the console
  console.log("Result of calculation with operator +: " + calculate(number1, number2, operator));

  // 5. Update the operator value to be the other operator type and call the function again
  console.log("Result of calculation with operator -: " + calculate(number1, number2, operator));


  //Ex#4.5
// 1. Create a variable called prize and use a prompt to ask the user to set the value by selecting a number between 0 and 10
let  prizeNumber = prompt("Please select a number between 0 and 10:");

// 2. Convert the prompt response to a number data type
 let  prizeNumber2 = Number(prizeNumber);


// 3. Create a variable to use for the output message containing the value "My Selection: "
let outputMessage = "My Selection: ";

// 4. Use a switch statement to provide a response back regarding a prize that is awarded depending on what number is selected
let prize;
switch (prizeNumber) {
       case 0:
           prize = "this is a car ";
           break;
       case 1:
           prize = " this is a teddy bear";
           break;
       case 2:
           prize = " this is a chocolate bar";
           break;
       case 3:
           prize = " this is a gift card";
           break;
       case 4:
           prize = " this is a movie ticket";
           break;
       case 5:
           prize = " this is a book";
           break;
       case 6:
           prize = "this is a music CD";
           break;
       case 7:
           prize = "this is a puzzle";
           break;
       case 8:
           prize = "this is a board game";
           break;
       case 9:
           prize = "this is a smartwatch";
           break;
       case 10:
           prize = "this is a bicycle";
           break;
       default:
           prize = "an invalid selection. Please choose a number between 0 and 10.";
   }

   // 6. Output the message back to the user by concatenating your prize variable strings and the output message string
   alert(outputMessage + prize);


   //Project no 1 ;Evaluating a number game

   let dynamicNumber = 20
let userNumber = Number(prompt("Guess the dynamic number in  code"))

if (userNumber > dynamicNumber) {
    console.log("The number you entered is greater than dynamic number in code.");
} else if (userNumber === dynamicNumber) {
    console.log("The number you entered is equal to dynamic number in  code.");
} else {
    console.log("The number you entered is less than dynamic number in  code.");
}

//Project no 2; Friend checker Game.
let friend = prompt("Enter your good name.")
friend = friend.charAt(0).toUpperCase() + friend.slice(1).toLowerCase();
switch (friend) {
case "Saba":
    console.log("friend of mine.")
    break;
case "Sara":
    console.log("friend of mine.")
    break;
case "Iqra":
    console.log("friend of mine.")
    break;
case "Kainat":
    console.log("friend of mine.")
    break;
default:
    console.log("I don't know this person.")
}

// Project 03: Rock Paper Scissors Game.
let object = ["Rock", "Paper", "Scissor"]
let playerChoice = prompt("Please enter your choice (Rock, Paper, or Scissors):");
    playerChoice = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1).toLowerCase();
    if (!object.includes(playerChoice)) {
        console.log("Invalid choice. Please refresh and enter Rock, Paper, or Scissors.");
    } else {
        let computerChoiceIndex = Math.floor(Math.random() * 3);
        let computerChoice = object[computerChoiceIndex];
        let message = `Player's choice: ${playerChoice}\nComputer's choice: ${computerChoice}\n`;

        if (playerChoice === computerChoice) {
            message += "It's a tie!";
        } else if (
            (playerChoice === "Rock" && computerChoice === "Scissors") ||
            (playerChoice === "Paper" && computerChoice === "Rock") ||
            (playerChoice === "Scissors" && computerChoice === "Paper")
        ) {
            message += "Player wins!";
        } else {
            message += "Computer wins!";
        }
        console.log(message);
    }