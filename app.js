
//TASK 1

var zakatPercentage = 0.025;


var userInput = parseInt(prompt("Please enter the amount you want to calculate zakat on:"));


userInput = Number(userInput);

var result = zakatPercentage * userInput;

alert("Your zakat value is " + result);




// // TASK 2

var familyMembers = prompt("Enter the total number of family members:");

var fitrahMethod = prompt("Choose a fitrah method:\n1. Wheat 2kg  (Rs 320 per head)\n2. Barley 2kg (Rs 450 per head)\n3. Dates 3.5kg (Rs 2200 Per head)\n4. Raisin 3.5kg (Rs 4400 per head)\n5. Other ");
var methodPrice;
if (fitrahMethod === "1") {
    methodPrice = 320 ; 
} else if (fitrahMethod === "2") {
    methodPrice = 450; 

} else if (fitrahMethod === "3") {
    methodPrice = 2200;
} else if (fitrahAmount === "4") {
    methodPrice = 4400; 
} else {
    methodPrice = parseInt(prompt("Enter the price for the fitrah"));
}
 

let fitrahAmount = methodPrice * familyMembers;

alert("The fitrah amount for " + familyMembers + " family members is Rs " + fitrahAmount + ".");

//task 3




const secretNumber = Math.floor(Math.random() * 10) + 1;



var userGuess = parseInt(prompt("Enter your guess for the secret number (between 1 and 10):"));


if (userGuess === secretNumber) {

  alert("Congratulations! You guessed the secret number.The Secret Number is " +  secretNumber);
} else if (userGuess > secretNumber) {
  alert("Your guess is too high. Try again. The Secret Number was " +  secretNumber);
} else {

  alert("Your guess is too low. Try again.  The Secret Number was " +  secretNumber);
}

// task 4

var userName = prompt("Enter your name:");


var capitalizedUserName = userName.charAt(0).toUpperCase() + userName.slice(2);

alert("Your name in capitalized case: " + capitalizedUserName);


//task 5


var contactNumbers = [];
var contactNames = [];


var numberOfContacts = parseInt(prompt("Enter any contact number:"));


for (let i = 0; i < numberOfContacts; i++) {

  var contactNumber = prompt("Enter contact number " + (i + 1) + ":");
  var contactName = prompt("Enter contact name " + (i + 1) + ":");

  
  contactNumbers.push(contactNumber);
  contactNames.push(contactName);
}
console.log("Contact numbers and names:");
for (let i = 0; i < numberOfContacts; i++) {
  console.log((i + 1) + ". " + contactNames[i] + ": " + contactNumbers[i]);
}



//task 6

var products = ['Laptop/PC', 'Mobile', 'Tablet', 'Headphones', 'Smartwatch'];

console.log("Available products:");
for (let i = 0; i < products.length; i++) {
  console.log((i + 1) + ". " + products[i]);
}


var position = parseInt(prompt("Enter the position of the product you want to remove (1 to " + products.length + "):")) - 1;


if (position >= 0 && position < products.length) {
 
  var removedItem = products.splice(position, 1);

  
  console.log("Removed item: " + removedItem);


  console.log("Remaining products:");
  for (let i = 0; i < products.length; i++) {
    console.log((i + 1) + ". " + products[i]);
  }


  console.log("Remaining items total: " + products.length);
} else {
  console.log("Select from 1 to 5.");
}



//task 7

var age = parseInt(prompt("Enter your age:"));
var gender = prompt("Enter your gender (male/female):");
var nationality = prompt("Enter your nationality:");


if (nationality.toLowerCase() === "pakistani" || nationality.toLowerCase() === "indian") {
  
  if (age >= 18) {
   
    if (gender.toLowerCase() === "male") {
      console.log("You are eligible to vote.");
    } else if (gender.toLowerCase() === "female") {
     
      var married = prompt("Are you married or not? (yes/no):");
      if (married.toLowerCase() === "yes") {
        console.log("You are eligible to vote.");
      } else {
        console.log("You are not eligible to vote.");
      }
    } else {
      console.log("Invalid gender input.");
    }
  } else {
    console.log("You are not eligible to vote.");
  }
} else {
  console.log("You are not eligible to vote.");
}

//task 8
var WorldCupSquad = ["Babar Azam", "Fakhar Zaman", "Imam-ul-Haq", "Asif Ali", "Haris Sohail", "Shoaib Malik", "Mohammad Hafeez", "Sarfaraz Ahmed", "Shadab Khan", "Imad Wasim", "Shaheen Afridi", "Hasan Ali", "Wahab Riaz", "Mohammad Amir", "Junaid Khan"];


var WorldCupSquadCopy = [...WorldCupSquad];


var finalTeam = WorldCupSquadCopy.splice(0, 11);


console.log(finalTeam);



//END

