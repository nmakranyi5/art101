/**
 * Author: Nikolas Makranyi <nmakrany@ucsc.edu>
 * Created: 11.17.2024
 * Purpose: Lab 14 JavaScript file, testing out the debugger here.
 * License: Public Domain
 * Requirements: jQuery must be loaded for this script to work.
 **/

// Constants
const val = Math.floor(Math.random() * 10) + 1;
// Functions
function main() 
{
    let myButton = document.getElementById("button");
    myButton.addEventListener("click", function() {
        let guess = document.getElementById("guess").value;
        if(guess == val)
        {
            $("#guesses").html("You got it! Congrats!");
        }
        else
        {
            if(guess < val)
            {
                $("#guesses").html("Try again! Too low!");
            }
            else
            {
                $("#guesses").html("Try again! Too high!");
            }
        }
  })
}

// let's get this party started
main();