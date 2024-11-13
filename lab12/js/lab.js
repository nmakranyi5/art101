/**
 * Author: Nikolas Makranyi <nmakrany@ucsc.edu>
 * Created: 11.12.2024
 * Purpose: Lab 12 JavaScript file, take the user's name as an input and place them into a house..
 * License: Public Domain
 * Requirements: jQuery must be loaded for this script to work.
 **/

// Constants
const houses = ["Gryffindor", "Ravenclaw", "Slytherin", "Hufflepuff", "Canisfang"]
const descriptions = ["Gryffindor is Harry Potter's house, and is known for having valiant and brave members.", "Ravenclaw is known for the intelligence and wisdom of its members.", "Slytherin is known for having members who are cunning, and willing to put themselves first.", "Hufflepuff's members are known for being kind and generous, and always willing to stand for what they believe in.", "Canisfang is a new house, with the symbol of a wolf, and whose members are known for camaraderie and willingness to act on each other's behalf."]
const images = ["./img/gryffindor.jpeg", "./img/ravenclaw.jpg", "./img/slytherin.png", "./img/hufflepuff.jpg", "./img/canisfang.jpg"];
// Functions
function hashCode(str) { // got this code from the Stack Overflow linked by the professor.
  let hash = 0;
  for (let i = 0, len = str.length; i < len; i++) {
      let chr = str.charCodeAt(i);
      hash = (hash << 5) - hash + chr;
      hash |= 0; // Convert to 32bit integer
  }
  return hash;
}

function sortingHat(input)
{
  let hash = Math.abs(hashCode(input) % houses.length); // calculate the hash using the helper function and modulo
  return hash;
}

function main() 
{
  let myButton = document.getElementById("button");
  myButton.addEventListener("click", function() {
    let name = document.getElementById("input").value;
    let hash = sortingHat(name);
    let house = houses[hash];
    let description = descriptions[hash];
    let newString = "<p>The Sorting Hat has sorted you into " + house + "</p>";
    document.getElementById("output").innerHTML = newString + description;
    document.getElementById("photo").innerHTML = `<img src="${images[hash]}" style="width:200px;height:auto;">`;
  })
}

// let's get this party started
main();