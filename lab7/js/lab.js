/**
 * Author: Nikolas Makranyi <nmakrany@ucsc.edu>
 * Created: 10.24.2024
 * Purpose: Lab 7 JavaScript file, using functions.
 * License: Public Domain
 **/

// Constants

// Functions
function sortNameNoSpace(name)
{
  // convert string to lowercase
  let userName = name.toLowerCase();
  // splitting the string
  let words = userName.split("");
  // sorting the words
  words.sort();
  // rejoining the array elements to a string
  let sortedName = words.join("");
  // returning string with sorted words
  return sortedName;
}

function sortName(name)
{
  // convert string to lowercase
  let userName = name
  // splitting the string
  let words = userName.split(" ");
  // sorting the words
  words.sort();
  // rejoining the array elements to a string
  let sortedName = words.join(" ");
  // returning string with sorted words
  return sortedName;
}

// Functions
function reverseName(name)
{
  // splitting the string
  let words = name.split("");
  // sorting the words
  words.reverse();
  // rejoining the array elements to a string
  let sortedName = words.join("");
  // returning string with sorted words
  return sortedName;
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

function main() {
  let name = window.prompt("Enter your name here:");
  document.writeln("Your name: " + name + "<br>");
  let sortedNameNoS = sortNameNoSpace(name);
  document.writeln("Your sorted name without spaces: " + sortedNameNoS + "<br>");
  let sortedName = sortName(name);
  document.writeln("Your sorted name with spaces: " + sortedName + "<br>");
  let revName = reverseName(name);
  document.writeln("Your reversed name: " + revName + "<br>");
  let anagramName = anagram(name);
  document.writeln("Your name as an anagram: " + anagramName + "<br>");
  document.getElementById("nametagText").innerHTML = anagramName;
}

// let's get this party started
main();
