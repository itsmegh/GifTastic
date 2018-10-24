//call the GIPHY API
//create an array of items in a topic
//create buttons for each of the items in the topic array
//when a user clicks a button, 10 gif images appear
// make sure they are paused when they open
//when the user clicks an image, it should animate
//each GIF should display a rating
//allow users to input a new item in the topic array
    //add a button
    //make sure it calls the new topic GIFs

$(document).ready(function() {
    
    var emotions = ["awkward", "mind blown", "bored", "fabulous", "starving", "all the feels"]

    function renderButtons() {
        $("#emotions-view").empty();

        for(var i=0; i<emotions.length; i++) {
            var emotionButton = $("<button>");
            emotionButton.addClass("emotion");
            emotionButton.attr("data-name", emotions[i]);
            emotionButton.text(emotions[i]);
            $("#emotions-view").append(emotionButton);
        }
    };

    $("#add-emotion").on("click", function(event) {
        event.preventDefault();
        var emotion = $("#emotion-input").val().trim();
        emotions.push(emotion);
        renderButtons();
    });

    renderButtons();

    //$("button").on("click", function() {
        //var emotion = $(this).attr("data-emotion");
        //var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
          //emotion + "&api_key=dc6zaTOxFJmzC&limit=10";
  
    //     $.ajax({
    //       url: queryURL,
    //       method: "GET"
    //     }).then(function(response) {
    //       // Step 1: Run this file, click a button, and see what the response object looks like in the browser's console.
    //       // Open up the data key, then open up the 0th, element. Study the keys and how the JSON is structured.
    //       console.log(queryURL);
    //       console.log(response);
    //     })

    // })
});    