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
  const challenges = $("#challenge").html();
  const problems = $("#problems").html();
  const reflections = $("#reflection").html();
  const output = $("#output").html();
  const links = $("#links").html();
  const body = $("body").attr("class");
  const h1 = $("h1").html();
  // click listener for button
  $("#submit").click(function(){
    // get value of input field
    const userName = $("#user-name").val();
    // get value of input field
    const petName = $("#pet-name").val();
    // get value of input field
    const movieName = $("#movie-name").val();
    // now let's sort it
    let userNameSorted = sortString(userName);
    // anagram
    let anagramName;
    if(userName)
    {
      anagramName = anagram(userName);
    }
    // append a new divs to our output div
    $("#results").html('<div class="text"><p>' + "Sorted Name: " + userNameSorted + '</p></div>' +
      '<div class="text"><p>' + "Anagram Name: " + anagramName + '</p></div>' + 
      '<div class="text"><p>' + "Pet Name: " + petName + '</p></div>' +
      '<div class="text"><p>' + "Movie Name: " + movieName + '</p></div>' );
  });

  $("#change-color").click(function(){
    // now add (or subtract) the "special" class to the section
    $(this).parent().toggleClass("special");
  });

  $("#secret").click(function(){
    setTimeout(function() {
      $("body").toggleClass("glitch");
    }, 4000);
    setTimeout(function() {
      $(".minor-section").toggleClass("glitch2");
      $(".minor-section").toggleClass("glitch3");
    }, 100);
    setTimeout(function() {
      $(".minor-section").html('<div class="text"><p>' + "FREE ME" + '</p></div>' );
    }, 500);
    setTimeout(function() {
      $("h1").html('<div class="text"><p>' + "FREE ME" + '</p></div>' );
    }, 1000);
    setTimeout(function() {
      $("body").removeClass("glitch");
    }, 5000);
    setTimeout(function() {
      $("#challenge").html(challenges);
      $("#problems").html(problems);
      $("#reflection").html(reflections);
      $("#output").html(output);
      $("#links").html(links);
      $("h1").html(h1);
      $("body").attr("class", body);
      $(".minor-section").removeClass("glitch2");
      $(".minor-section").removeClass("glitch3");
      $("h1").removeClass("glitch2");
    }, 8000);
  });

  setInterval(function() {
    $(".minor-section").addClass("glitch2");
    $("h1").addClass("glitch2");
    setTimeout(function() {
      $(".minor-section").removeClass("glitch2");
      $("h1").removeClass("glitch2");
    }, 3000);
  }, 10000);

}

// let's get this party started
main();
