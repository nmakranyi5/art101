/**
 * Author: Nikolas Makranyi <nmakrany@ucsc.edu>
 * Created: 11.22.2024
 * Purpose: Lab 15 JavaScript file, getting acquainted with AJAX.
 * License: Public Domain
 * Requirements: jQuery must be loaded for this script to work.
 **/

// Constants
// Functions
function main() 
{
    let myButton = document.getElementById("activate");
    myButton.addEventListener("click", function() {
        // Using the core $.ajax() method
        $.ajax({
            // The URL for the request (from the api docs)
            url: "https://api.chucknorris.io/jokes/random",
            // Whether this is a POST or GET request
            type: "GET",
            // The type of data we expect back
            dataType : "json",
            // What do we do when the api call is successful
            // all the action goes in here
            success: function(data) {
                // do stuff
                $("#jokes").html(JSON.stringify(data.value));
            },
            // What we do if the api call fails
            error: function (jqXHR, textStatus, errorThrown) { 
                // do stuff
                console.log("Error:", textStatus, errorThrown);
            }
        })
    })
    $.ajax({
        // The URL for the request (from the api docs)
        url: "https://api.nasa.gov/planetary/apod",
        // Whether this is a POST or GET request
        type: "GET",
        // The data to send (will be converted to a query string)
        data: { 
            // here is where any data required by the api 
            //   goes (check the api docs)
            api_key: "ILQAuEhXrL9zlRh4UUmlsuE5HZmIWCbOFMX3sLzk",
          },
        // The type of data we expect back
        dataType : "json",
        // What do we do when the api call is successful
        // all the action goes in here
        success: function(data) {
            // do stuff
            const imageUrl = data.hdurl;
            const explanation = data.explanation;
            $("#nasaPhoto").html(`
                <img src="${imageUrl}" style="max-width: 700px; height: 600px;"/>
            `);
            $("#photoText").html(`
                <p>${explanation}</p>
            `);
        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    })
}

// let's get this party started
main();