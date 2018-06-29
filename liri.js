require("dotenv").config();


--------------
// Add the code required to import the `keys.js` file and store it in a variable.
-------------


var spotify = new Spotify(keys.spotify);
var client = new Twitter(keys.twitter);


------------
// make it so that liri.js can take in one of the following commands:

//     * `my-tweets`

//     * `spotify-this-song`

//     * `movie-this`

//     * `do-what-it-says`

var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }

  client.post('statuses/update', {status: 'I Love Twitter'})
  .then(function (tweet) {
    console.log(tweet);
  })
  .catch(function (error) {
    throw error;
  })

  client.post('statuses/update', {status: 'I am a tweet'}, function(error, tweet, response) {
    if (!error) {
      console.log(tweet);
    }
  });
});
---------

---------
// This will show the following information about the song in your terminal/bash window
     
//      * Artist(s)
     
//      * The song's name
     
//      * A preview link of the song from Spotify
     
//      * The album that the song is from

//    * If no song is provided then your program will default to "The Sign" by Ace of Base.

var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});
 
spotify
  .request('https://api.spotify.com/v1/tracks/7yCPwWs66K8Ba5lFuU2bcx')
  .then(function(data) {
    console.log(data); 
  })
  .catch(function(err) {
    console.error('Error occurred: ' + err); 
  });


---------

--------
// `node liri.js movie-this '<movie name here>'`

//    * This will output the following information to your terminal/bash window:

//      ```
//        * Title of the movie.
//        * Year the movie came out.
//        * IMDB Rating of the movie.
//        * Rotten Tomatoes Rating of the movie.
//        * Country where the movie was produced.
//        * Language of the movie.
//        * Plot of the movie.
//        * Actors in the movie.
//      ```

//    * If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.'
     
//      * If you haven't watched "Mr. Nobody," then you should: <http://www.imdb.com/title/tt0485947/>
     
//      * It's on Netflix!



var omdb = require('omdb');
 
 omdb.search('saw', function(err, movies) {
     if(err) {
         return console.error(err);
     }
  
     if(movies.length < 1) {
         return console.log('No movies were found!');
     }
  
     movies.forEach(function(movie) {
         console.log('%s (%d)', movie.title, movie.year, movie.rating, movie.tomatoes, movie.country, movie.language, movie.plot, movie. actors);
     });
  
    
 });
  
 omdb.get({ title: " "}, true, function(err, movie) {
     if(err) {
         return console.error(err);
     }
  
     if(!movie) {
         return console.log('Movie not found!');
     }
  
     console.log('%s (%d) %d/10', movie.title, movie.year, movie.rating, movie.tomatoes, movie.country, movie.language, movie.plot, movie. actors);
     
  
     
 });
   ----------



   ----------
//    `node liri.js do-what-it-says`
   
//    * Using the `fs` Node package, LIRI will take the text inside of random.txt and then use it to call one of LIRI's commands.
     
//      * It should run `spotify-this-song` for "I Want it That Way," as follows the text in `random.txt`.
     
//      * Feel free to change the text in that document to test out the feature for other commands.
----------