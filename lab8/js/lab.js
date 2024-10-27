/**
 * Author: Nikolas Makranyi <nmakrany@ucsc.edu>
 * Created: 10.27.2024
 * Purpose: Lab 8 JavaScript file, using anon functions and callbacks.
 * License: Public Domain
 **/

// Constants

// Functions
// square root function
function squareRoot(x){
  return Math.sqrt(x);
}

function main() {
  // creating array of numbers
  let nums = [100, 238402349, 993, 23949, 0, 2.4, 55, 1400, 300, 99];

  // testing the sqrt function
  console.log("Testing squareRoot function: ", squareRoot(nums[0]));
  console.log("Testing squareRoot function: ", squareRoot(nums[8]));
  console.log("Testing squareRoot function: ", squareRoot(nums[3]));

  // looping through the array and calling function on each element
  for(let index = 0; index < nums.length; index++)
  {
    console.log("Looping through nums: ", squareRoot(nums[index]));
  }

  // calling square root function and printing output to console
  var sqResults = nums.map(squareRoot);
  console.log("Squareroot of nums: ", sqResults);

  // anon function with callback that multiplies each array element by 2
  var results = nums.map(function(x){
    return x * 2;
  })
  
  // print array elements * 2
  console.log("Nums * 2: ", results);

  // map results data
  var mapResults = results;

  // using jQuery to select the element by its ID and set the HTML content
  $("#script-output").html(
    "Original nums array: [" + nums.join(", ") + "]<br>" +
    "My array after square root taken for each element: [" + sqResults.join(", ") + "]<br>" +
    "My array after being multiplied by 2: [" + mapResults.join(", ") + "]"
  );
}

// let's get this party started
main();
