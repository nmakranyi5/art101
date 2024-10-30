/**
 * Author: Nikolas Makranyi <nmakrany@ucsc.edu>
 * Created: 10.29.2024
 * Purpose: Lab 9 JavaScript file, using libraries and jQuery.
 * License: Public Domain
 **/

// Constants

// Functions

function main() {
  /* old code
  // add button to challenge section
  $("#challenge").append("<button id='button-challenge'>Make Special</button>");
  // add button to problems section
  $("#problems").append("<button id='button-problems'>Make Special</button>");
  // add button to reflection section
  $("#reflection").append("<button id='button-reflection'>Make Special</button>");

  // add a click listener to the challenge button
  $("#button-challenge").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#challenge").toggleClass("special");
  });
  // add a click listener to the challenge button
  $("#button-problems").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#problems").toggleClass("special");
  });
  // add a click listener to the challenge button
  $("#button-reflection").click(function(){
    // now add (or subtract) the "special" class to the section
    $("#reflection").toggleClass("special");
  });
  */
  // new code
  // add button to all three sections
  $(".special_section").append("<button class='special-sections-button'>Make Special</button>");
  // add a click listener to the button
  $(".special-sections-button").click(function(){
    // now add (or subtract) the "special" class to the section
    $(this).parent().toggleClass("special");
  });
}

// let's get this party started
main();
