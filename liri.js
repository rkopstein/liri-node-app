require("dotenv").config();

var Twitter = require('twitter');
var keys = require('./keys')
var Spotify = require('node-spotify-api');
var client = new Twitter(keys.twitter);
var userInput = process.argv[2];
var userChoice = process.argv[3];
var song = new Spotify(keys.spotify);
var request = require('request');
var fs = require("fs");
// console.log(song)

switch (userInput) {
    case `my-tweets`:
        myTweet();
        break;
    case `spotify-this-song`:
        spotifySong(userChoice);
        // code block
        break;
    case `movie-this`:
    findMyMovie(userChoice);
        // code block
        break;
    case `do-what-it-says`:
    doIt();
        // code block
        break;
    default:

    // code block
}
function myTweet() {
    var params = { screen_name: 'RebeccaKopstein' };
    client.get('statuses/user_timeline', params, function (error, tweets, response) {
        if (!error) {
            for (i = 0; i < 20; i++) {
                console.log(tweets[i].created_at);
                console.log(tweets[i].text);
            }

        }
        else {
            console.log(error)
        }
    })
}


// For SPOTIFY I need to ...
// make the 'spotify-this-song' command FULLY Work
// make ace of base show when no entry is Made

function spotifySong(userChoice) {
    console.log("spotify-this song")
    var songName 
 if (userChoice === undefined){
      songName = "sorry"
 } else{
     songName = userChoice
 }
  
 
song.search({ type: 'track', query: songName }, function(err, data) {
    if ( err ) {
        console.log('Error occurred: ' + err);
        return;
    }
    else {
        console.log(data)
        // console.log("Title: " + "Release Year: " + "Rating: " + "Rotten Tomatoes: " + "Country: " + "Language: " + "Plot: " + "Actors: " + JSON.parse(body).Year.);
    }
 
    // Do something with 'data'
});
}



// For OMDB need to:
// make the OMDB "movie this' command work
// make Mr nobody pull up if no entry is made

function findMyMovie(userChoice) {
    var movieName;
    if (userChoice == ""){
         movieName = "Mr. Nobody"
    } else {
        movieName = userChoice
    }
    console.log("findMyMovie")

    var url = "http://www.omdbapi.com/?apikey=trilogy&t=" + movieName + "&Title=&Year=&Ratings=&tomatoes=true&Country=&Language=&Plot=short&Actors=&";
   console.log(url)
 
request(url, function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});
}

    
 
   
   
function doIt(){
    fs.readFile('random.txt', "utf-8", function(err, data) {
        if (err) throw err;
        console.log(data);
        var dataArray = data.split(",")
        console.log(dataArray[1])
        spotifySong(dataArray[1])
      });
}