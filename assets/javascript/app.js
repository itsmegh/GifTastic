//call the GIPHY API
//create an array of items in a topic - done!
//create buttons for each of the items in the topic array - done!
//when a user clicks a button, 10 gif images appear - done!
// make sure they are paused when they open
//when the user clicks an image, it should animate
//each GIF should display a rating - done!
//allow users to input a new item in the topic array
    //add a button - done!
    //make sure it calls the new topic GIFs

$(document).ready(function() {
    
    var emotions = ["awkward", "mind blown", "bored", "fabulous", "starving", "all the feels"];
    //API key and the set up for the queryURL with key, limit and question for topic included

    //creates buttons for all of the items in the array
    function renderButtons() {
        $("#emotions-view").empty();

        for(var i=0; i<emotions.length; i++) {
            var emotionButton = $("<button>");
            emotionButton.addClass("emotion");
            emotionButton.addClass("btn btn-secondary btn-sm");
            emotionButton.attr("data-emotion", emotions[i]);
            emotionButton.text(emotions[i]);
            $("#emotions-view").append(emotionButton);
        }
    };
    
    //when a user inputs an item, it is added to the array and a button is created
    $("#add-emotion").on("click", function(event) {
        event.preventDefault();
        var emotion = $("#emotion-input").val().trim();
        emotions.push(emotion);
        renderButtons();
    });

    renderButtons();

    var APIKey = "eu8jkzxqW2DQ2qJSaMoqw29dZvqzeT40";

    $(".emotion").on("click", function() {

        var dataEmotion = $(this).attr("data-emotion");
        console.log(dataEmotion);

        var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + dataEmotion + "&api_key=" + APIKey + "&limit=10";

        $.ajax({
          url: queryURL,
          method: "GET"
        }).then(function(response) {
          console.log(queryURL);
          console.log(response);

          var results = response.data;

          for (var i=0; i<results.length; i++) {
              var gifDiv = $("<div>")
                    .addClass("col-md-4");
              var rating = results[i].rating;
              var pDiv = $("<div>")
                    //.addClass(caption)
                    .text("Rating: " + rating);
              var image = $("<img>")
                    //.addClass(thumbnail);
            
                image.attr("src", results[i].images.fixed_height.url);
                image.attr("alt", "emotion image");

            gifDiv.prepend(pDiv);
            gifDiv.prepend(image);

            $("#gifs-go-here").prepend(gifDiv);
          };

        });

    });

});    