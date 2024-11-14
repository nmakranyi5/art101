/**
 * Author: Nikolas Makranyi <nmakrany@ucsc.edu>
 * Created: 11.12.2024
 * Purpose: Lab 13 JavaScript file, using loops to create a FizzBuzz-esque program.
 * License: Public Domain
 * Requirements: jQuery must be loaded for this script to work.
 **/

// Constants

// Functions
function fizzBuzz(start, end)
{
  let outputString = "";
  // looping from start to end
  for (let i = start; i <= end; i++)
  {
    // storing the current number's affiliated text in numString
    let numString = "";
    // checking if divisible by 3
    if (i % 3 === 0) 
    {
      numString += "Fizz";
    }
    // checking if divisible by 5
    if (i % 5 === 0)
    {
      numString += "Buzz";
    }
    // checking if divisible by 7
    if (i % 7 === 0)
    {
      numString += "Boom";
    }
    // checking if empty numString, if so then just output the lone number
    if(numString === "")
    {
      outputString += i + "<br>"; 
    }
    // else, output the number alongside it's corresponding text
    else
    {
      outputString += i + " " + numString + "<br>"; 
    }
  }
  return outputString;
}

function main() 
{
  let start = 1;
  let end = 200;
  let outputString = fizzBuzz(start, end);
  $("#output").html(outputString);
}

// let's get this party started
main();