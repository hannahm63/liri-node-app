require("dotenv").config();

const keys = require("./keys.js");

var Spotify = require('node-spotify-api');
var spotify = new Spotify(keys.spotify);

var userInput = process.argv[3];

if (process.argv[2] === "concert-this") {

    console.log("concert-this called");

} else if (process.argv[2] === "spotify-this-song") {

    if (userInput === undefined) {
        userInput = "The Sign Ace of Base";
        console.log("You didn't search a song! I chose one for you...");
    }

    spotify.search(
        {
            type: 'track',
            query: userInput
        },
        function (err, resp) {

            if (err) {
                console.error(err);
            }

            let artist = resp.tracks.items[0].artists[0].name;
            let song = resp.tracks.items[0].name;
            let albumName = resp.tracks.items[0].album.name;
            let preview;

            if (resp.tracks.items[0].preview_url === null) {
                preview = "There is no preview available for this song.";
            } else {
                preview = resp.tracks.items[0].preview_url;
            }

            console.log(`Here is what I could find... \nArtist: ${artist} \nAlbum: ${albumName} \nSong: ${song} \nPreview: ${preview}`);
        }
    )
} else if (process.argv[2] === "movie-this") {

    console.log("movie-this called");

} else if (process.argv[2] === "do-what-it-says") {

    console.log("do-what-it-says called");

}