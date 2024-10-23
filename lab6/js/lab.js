/**
 * Author: Nikolas Makranyi <nmakrany@ucsc.edu>
 * Created: 10.22.2024
 * Purpose: Lab 6 JavaScript file, declaring arrays and objects.
 * License: Public Domain
 **/

// Constants

// Functions

function main() {
  // declaring array and object
  let myTransport = ["Car", "Bus", "Bike", "Foot", "Skateboard"];
  const myMainRide = {
    make: "Lamborghini",
    model: "Aventador",
    color: "Blue",
    year: 2022,
    age: function() {
        return 2024 - this.year;
    }
  };

  // custom object
  const myPet = {
    name: "Simba",
    species: "Cat",
    age: 7,
    color: "Orange",
    indoor: true
  };

  // printing
  document.writeln("Getting around: " + myTransport + "<br>");
  document.writeln("My Main Ride: <pre>", JSON.stringify(myMainRide, null, '\t'), "</pre>");
  document.writeln("<br>");
  document.writeln("Looping through myTransport:<br>");
  for (let index = 0; index < myTransport.length; index++)
  {
    document.writeln(myTransport[index] + "<br>");
  }
  document.writeln("<br>");
  document.writeln("Printing custom object called myPet: <br>");
  document.writeln("My Pet: <pre>", JSON.stringify(myPet, null, '\t'), "</pre>");
  document.writeln("<br>");
  document.writeln("Sorted array: " + myTransport.sort() + "<br>");
}

// let's get this party started
main();
