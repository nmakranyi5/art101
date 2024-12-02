/**
 * Author: Nikolas Makranyi <nmakrany@ucsc.edu>
 * Created: 12.1.2024
 * Purpose: Lab 16 JavaScript file, getting acquainted with JSON and APIs.
 * License: Public Domain
 * Requirements: jQuery must be loaded for this script to work.
 **/

// Constants
let comicNum = 614;

// Functions
function getAndPutData(comicNum)
{
    $.ajax({
        // The URL for the request (from the api docs)
        url:  `https://xkcd.com/${comicNum}/info.0.json`,
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
            $("#title").html(comicObj.title);
            $("#comicPhoto").html(`<img src="${comicObj.img}" alt="${comicObj.alt}" title="${comicObj.alt}"/>`);
            $("#photoText").html(`<p>${comicObj.alt}</p>`);
            console.log(data);
        },
        // What we do if the api call fails
        error: function (jqXHR, textStatus, errorThrown) { 
            // do stuff
            console.log("Error:", textStatus, errorThrown);
        }
    });
}

function main() 
{
    getAndPutData(comicNum);
    let prev = document.getElementById("prev");
    prev.addEventListener("click", function() {
        comicNum -= 1;
        getAndPutData(comicNum);
    })
    let next = document.getElementById("next");
    next.addEventListener("click", function() {
        comicNum += 1;
        getAndPutData(comicNum);
    })
}

// let's get this party started
main();
