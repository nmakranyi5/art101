/**
 * Author: Nikolas Makranyi <nmakrany@ucsc.edu>
 * Created: 11.7.2024
 * Purpose: Lab 11 JavaScript file, jQuery script gets a value from an input field and outputs a modified version.
 * License: Public Domain
 * Requirements: jQuery must be loaded for this script to work.
 **/

// Constants

// Functions
// Sorts the characters of a string in alphabetical order.
function sortString(inputString) {
  // We have to convert our string to an array and back again to sort it
  return inputString.split('').sort().join('');
}

function anagram(name)
{
  // convert string to lowercase
  let userName = name.toLowerCase();
  // splitting the string  
  let words = userName.split("");
  // sorting the words, got this line from W3Schools
  words.sort(() => 0.5 - Math.random());
  // looping through and capitalizing first letter of words
  words[0] = words[0].toUpperCase();
  for(let index = 1; index < words.length; index++)
  {
    if(words[index - 1] == " ")
    {
      words[index] = words[index].toUpperCase();
    }
  }
  // rejoining the array elements to a string
  let sortedName = words.join("");
  // returning string with sorted words
  return sortedName;
}

function main() 
{
  // click listener for button
  $("#submit").click(function(){
    // get value of input field
    const userName = $("#user-name").val();
    // now let's sort it
    let userNameSorted = sortString(userName);
    // anagram
    let anagramName = anagram(userName);
    // append a new divs to our output div
    $("#output").html('<div class="text"><p>' + "Sorted Name: " + userNameSorted + '</p></div>' +
      '<div class="text"><p>' + "Anagram Name: " + anagramName + '</p></div>');
  });
}

// let's get this party started
main();
