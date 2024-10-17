/**
 * Author: Nikolas Makranyi <nmakrany@ucsc.edu>
 * Created: 10.17.2024
 * Purpose: Lab 5 JavaScript file, declaring variables and displaying them.
 * License: Public Domain
 **/

// Constants

// Functions

function main() {
  // declare variables
  make = "Lamborghini";
  model = "Aventador";
  color = "Blue";
  year = "2022";
  ownIt = false;

  // calculate the age
  age = 2024 - year;

  //display variable values
  document.writeln("Make: " + make + "<br>");
  document.writeln("Model: " + model + "<br>");
  document.writeln("Color: " + color + "<br>");
  document.writeln("Year: " + year + "<br>");
  document.writeln("Do I own it? " + ownIt + "<br>");
  document.writeln("Age: " + age + " years old.<br>");

  document.writeln("<br>");
  document.writeln("Below is some stuff that I was testing out in JavaScript.<br>");
  document.writeln("<br>");
  
  //for loop + conditionals
  document.writeln("Loop counting up to 10.<br>");
  for(index = 0; index <= 10; index+=1)
  {
    if(index > 9)
    {
      document.writeln(index + ".<br>");
    }
    else
    {
      document.writeln(index + ", ");
    }
  }
  document.writeln("<br>");
}

// let's get this party started
main();
