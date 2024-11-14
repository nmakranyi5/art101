/**
 * Author: Nikolas Makranyi <nmakrany@ucsc.edu>
 * Created: 11.12.2024
 * Purpose: Lab 13 JavaScript file, using loops to create a FizzBuzz-esque program.
 * License: Public Domain
 * Requirements: jQuery must be loaded for this script to work.
 **/

// Constants
let text = ["Fizz", "Buzz", "Boom", "Bing"]
let factors = [3, 5, 7, 9]
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
    if (i % factors[0] === 0) 
    {
      numString += text[0];
    }
    // checking if divisible by 5
    if (i % factors[1] === 0)
    {
      numString += text[1];
    }
    // checking if divisible by 7
    if (i % factors[2] === 0)
    {
      numString += text[2];
    }
    // checking if divisible by 9, additional check
    if (i % factors[3] === 0)
    {
      numString += text[3];
    }
    // checking if empty numString, if so then just output the lone number
    if (numString === "") 
    {
      outputString += `<div>${i}</div>`;
    } 
    else 
    {
      // Else, output the number with its corresponding text
      outputString += `<div>${i} ${numString}</div>`;
    }
  }
  return outputString;
}

function main() 
{
  let myButton = document.getElementById("button");
  myButton.addEventListener("click", function() {
    let start = 1;
    let end = document.getElementById("num").value;
    let factor1 = document.getElementById("f1").value;
    let factor2 = document.getElementById("f2").value;
    let factor3 = document.getElementById("f3").value;
    let factor4 = document.getElementById("f4").value;
    let factor1text = document.getElementById("f1text").value;
    let factor2text = document.getElementById("f2text").value;
    let factor3text = document.getElementById("f3text").value;
    let factor4text = document.getElementById("f4text").value;
    if (factor1 !== "")
    {
      factors[0] = factor1;
    }
    if (factor2 !== "")
    {
      factors[1] = factor2;
    } 
    if (factor3 !== "")
    {
      factors[2] = factor3;
    }
    if (factor4 !== "")
    {
      factors[3] = factor4;
    } 
    if (factor1text !== "")
    {
      text[0] = factor1text;
    }
    if (factor2text !== "")
    {
      text[1] = factor2text;
    }
    if (factor3text !== "")
    {
      text[2] = factor3text;
    }
    if (factor4text !== "")
    {
      text[3] = factor4text;
    }
    let outputString = fizzBuzz(start, end);
    $("#output").html(outputString);
  })
}

// let's get this party started
main();