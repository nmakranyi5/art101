/**
 * Author: Nikolas Makranyi <nmakrany@ucsc.edu>
 * Created: 11.4.2024
 * Purpose: Lab 10 JavaScript file, appends new element to an output div.
 * License: Public Domain
 * Requirements: jQuery must be loaded for this script to work.
 **/

// Constants

// Functions
function generateRandomText() 
{
  const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  const min = 3;
  const max = 100;
  const randLen = Math.floor(Math.random() * (max - min + 1)) + min;
  // Get a random starting index to slice the Lorem Ipsum text
  const randStart = Math.floor(Math.random() * (text.length - randLen + 1));
  // Generate the random Lorem Ipsum-like text
  return text.slice(randStart, randStart + randLen);
}

let className = "right"

function main() 
{
  // click listener for button
  $("#make-convo").click(function(){
    // get new fake dialogue
    let newText = generateRandomText();
    // get user input and trim it
    let userInput = $("#message").val().trim();
    // if user input is valid, set it to newText
    if(userInput)
    {
      newText = userInput;
    }
    // switching class for sides
    if(className === "right")
    {
      className = "left";
    }
    else
    {
      className = "right";
    }

    // append a new div to our output div
    $("#output").append('<div class="text ' + className + '"><p>' + newText + '</p></div>');
    // clearing the input
    $("#message").val('');
  });
}

// let's get this party started
main();
