/**
 * Author: Nikolas Makranyi <nmakrany@ucsc.edu>
 * Created: 12.1.2024
 * Purpose: Lab 16 JavaScript file, getting acquainted with JSON and APIs.
 * License: Public Domain
 * Requirements: jQuery must be loaded for this script to work.
 **/

// Constants
// Functions
function main() 
{
    // Using the core $.ajax() method
    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://cors-anywhere.herokuapp.com/https://xkcd.com/info.0.json",
        // The data to send (will be converted to a query string)
        data: { 
                // here is where any data required by the api 
                //   goes (check the api docs)
            },
        // Whether this is a POST or GET request
        type: "GET",
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        //   all the action goes in here
        success: function(data) {
            // do stuff
            let comicObj = data;
            $("#output").append(`<h3>${comicObj.title}</h3>`);
            $("#output").append(`<img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}"/>`);
            $("#output").append(`<p>${comicObj.alt}</p>`);
            console.log(data);
        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    });
}

// let's get this party started
main();