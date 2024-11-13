/**
 * Author: Nikolas Makranyi <nmakrany@ucsc.edu>
 * Created: 11.12.2024
 * Purpose: Lab 12 JavaScript file, take the user's name as an input and place them into a house..
 * License: Public Domain
 * Requirements: jQuery must be loaded for this script to work.
 **/

// Constants
const houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff"]
// Functions
function sortingHat(input)
{
  let length = input.length;
  let mod = length % 4;
  if(mod === 0)
  {
    return "Gryffindor";
  }
  else if(mod === 1)
  {
    return "Ravenclaw";
  }
  else if(mod === 2)
  {
    return "Slytherin";
  }
  else if(mod === 3)
  {
    return "Hufflepuff";
  }
}


function main() 
{
  let myButton = document.getElementById("button");
  myButton.addEventListener("click", function() {
    let name = document.getElementById("input").value;
    let house = sortingHat(name);
    let newString = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newString;
  })
}

// let's get this party started
main();