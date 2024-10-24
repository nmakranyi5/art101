/**
 * Author: Nikolas Makranyi <nmakrany@ucsc.edu>
 * Created: 10.24.2024
 * Purpose: Lab 7 JavaScript file, using functions.
 * License: Public Domain
 **/

// Constants

// Functions
function getName()
{
  // getting the name
  let userName = window.prompt("Enter your name here:");
  // convert string to lowercase
  userName.toLowerCase();
  // splitting the string
  let words = userName.split("");
  // sorting the words
  words.sort();
  // rejoining the array elements to a string
  let sortedName = words.join("");
  // returning string with sorted words
  return sortedName;
}

function main() {
  let name = getName();
  document.writeln("Your sorted name: " + name + "<br>");
}

// let's get this party started
main();
