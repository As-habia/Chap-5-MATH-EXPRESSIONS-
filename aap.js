//task 1 and 2

var num1 = prompt("Enter the first number:");
var num2 = prompt("Enter the second number:");

var number1 = parseFloat(num1);
var number2 = parseFloat(num2);

var addition = number1 + number2;
var subtraction = number1 - number2;
var multiplication = number1 * number2;
var division = number1 / number2;
var modulus = number1 % number2;

document.write("Addition: " + number1 + " + " + number2 + " = " + addition + "<br>");
document.write("Subtraction: " + number1 + " - " + number2 + " = " + subtraction + "<br>");
document.write("Multiplication: " + number1 + " * " + number2 + " = " + multiplication + "<br>");
document.write("Division: " + number1 + " / " + number2 + " = " + division + "<br>");
document.write("Modulus: " + number1 + " % " + number2 + " = " + modulus + "<br>");



// Task 3: Do the following using JS Mathematic Expressions

// a. Declare a variable
document.write("<br/>");
var number;

document.write("Value after variable declaration is: " + number + "<br>");

// c. Initialize the variable with some number
number = 5;

// d. Show the value of the variable in the browser
document.write("Initial value: " + number + "<br>");

// e. Increment the variable
number++;

// f. Show the value of the variable in the browser
document.write("Value after increment is: " + number + "<br>");

// g. Add 7 to the variable
number += 7;

// h. Show the value of the variable in the browser
document.write("Value after addition is: " + number + "<br>");

// i. Decrement the variable
number--;

// j. Show the value of the variable in the browser
document.write("Value after decrement is: " + number + "<br>");

// k. Show the remainder after dividing the variable’s value by 3
var remainder = number % 3;

// l. Show the remainder in the browser
document.write("The remainder is: " + remainder + "<br>");


//task4
document.write("<br/>");
var ticketPrice = 600;

var numberOfTickets = 5;
var totalCost = ticketPrice * numberOfTickets;

document.write("<h2>Cost of one movie ticket:</h2>");
document.write("The cost of buying " + numberOfTickets + " tickets to a movie is: " + totalCost + " PKR.");


//task5
var number = parseInt(prompt("Enter a number to display its multiplication table:"));
document.write("<h2>Multiplication Table of " + number +  "</h2>");
for (var i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}


//task6
document.write("<br/>");
var Temperature = 30;

var fahrenheitTemperature = (Temperature * 9/5) + 32;
document.write("<h2> Temperature: </h2>");
document.write(Temperature + "°C is " + fahrenheitTemperature + "°F<br>");

var fahrenheitTemperature2 = 86;

var Temperature2 = (fahrenheitTemperature2 - 32) * 5/9;

document.write(fahrenheitTemperature2 + "°F is " +Temperature2 + "°C<br>");



//task7
var priceItem1 = 500;
var priceItem2 = 800;
var quantityItem1 = 3;
var quantityItem2 = 2;

var shippingCharges = 100;

var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;

document.write("<h2>Receipt:</h2>");
document.write("Price of item 1: " + priceItem1 + " PKR<br>");
document.write("Price of item 2: " + priceItem2 + " PKR<br>");
document.write("Quantity of item 1: " + quantityItem1 + "<br>");
document.write("Quantity of item 2: " + quantityItem2 + "<br>");
document.write("Shipping charges: " + shippingCharges + " PKR<br>");
document.write("<strong>Total cost: " + totalCost + " PKR</strong>");



//task8
var totalMarks = 500;
var marksObtained = 420;

var percentage = (marksObtained / totalMarks) * 100;

document.write("<h2>Percentage Calculation:</h2>");
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + marksObtained + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%");


//task9
document.write("<br/>");
var usdToPkrRate = 104.80;
var sarToPkrRate = 28;

var totalPkr = (10 * usdToPkrRate) + (25 * sarToPkrRate);
document.write("<h2>Currency in PKR:</h2>");
document.write("Total currency in Pakistani Rupees: " + totalPkr + " PKR");




//task10
document.write("<br/>");
var initialNumber = 20;

var result = ((initialNumber + 5) * 10) / 2;
document.write("<h2>Result after arithmetic operations:</h2>");
document.write("Result after arithmetic operations: " + result);


//task11
var currentYear = 2024;

var birthYear = 1990; 

var age1 = currentYear - birthYear;
var age2 = age1 - 1;
document.write("<h2>Age Calculator:</h2>");
document.write("They are either " + age1 + " or " + age2 + " years old.");


//task12
var radius = 5; 

var circumference = 2 * Math.PI * radius;

var area = Math.PI * radius * radius;
document.write("<h2>“The Geometrizer:</h2>");
document.write("The circumference is " + circumference.toFixed(2) + "<br>");
document.write("The area is " + area.toFixed(2));



//task13
var favoriteSnack = "chocolate";

var currentAge = 25;

var maximumAge = 80; 

var amountPerDay = 2; 

var yearsRemaining = maximumAge - currentAge;
var daysRemaining = yearsRemaining * 365; 
var totalSnacksNeeded = daysRemaining * amountPerDay;
document.write("<h2>“The Lifetime Supply Calculator:</h2>");
document.write("You will need " + totalSnacksNeeded + " " + favoriteSnack + "s to last you until the ripe old age of " + maximumAge + ".");
