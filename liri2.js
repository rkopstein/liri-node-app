require("dotenv").config();

var Twitter = require('twitter');
var keys = require('./keys')
var Spotify = require('node-spotify-api');
var omdb = require('omdb');
var client = new Twitter(keys.twitter);
var userInput = process.argv[2];
var song = new Spotify(keys.spotify);


switch (userInput) {
    case `my-tweets`:
        myTweet();
        break;
    case `spotify-this-song`:
        spotifySong();
        // code block
        break;
    case `movie-this`:
        // code block
        break;
    case `do-what-it-says`:
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
function spotifySong() {
    console.log("spotify-this song")


};

song.search({ type: 'Ace of Base', query: 'The Sign' }, function (err, data) {
    if (err) {
        return console.log('Error occurred: ' + err);
    }
    else {
        console.log(err)
    }
    console.log(data);
})


function findMyMovie() {
    console.log("findMyMovie")
};
omdb.get({ title: " "}, true, function(err, movie) {
    if(err) {
        return console.error(err);
    }
 
    // else(!movie){ 
    //     return console.log('Mr. Nobody.');
    // }
 
    console.log('%s (%d) %d/10', movie.title, movie.year, movie.rating, movie.tomatoes, movie.country, movie.language, movie.plot, movie. actors);
    
 
    
});
    // var movie = $(this).attr("data-name");
    // var queryURL = "https://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=trilogy";