/* global $ */

// BELOW Update the songs array with four of your favorites songs.
let songs = ["Sola", "The Ringer", "Just Lose It", "Brillo" ];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
let images_links = ["https://d2tml28x3t0b85.cloudfront.net/tracks/artworks/000/637/015/original/4ad20c.jpeg?1507743693" , "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F160b53c324c4cdeb709b605d3a591598.1000x1000x1.png" , "https://upload.wikimedia.org/wikipedia/en/thumb/3/3c/Just_Lose_It.jpg/220px-Just_Lose_It.jpg" , "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F0d6cd99787e67035da9050e63c0c4c6b.1000x1000x1.jpg"];
let artists = ["Anuel AA", "Eminem", "Eminem", "Jbalvin"];
let song_lengths = ["5:09", "5:43", "4:08", "2:41"];
let links = ["https://www.youtube.com/watch?v=x-lRA6MvB44", "https://www.youtube.com/watch?v=BHAM5m3j5cA", "https://www.youtube.com/watch?v=9dcVOmEQzKA", "https://www.youtube.com/watch?v=XDJYo-Z0E8M"];


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(song) {
        $("#songs").append(
            "<div class = 'title'>" +
            "<p>" + song +"</p>" +
            "</div>"
        );
    });
    images_links.forEach(function(img) {
        $("#images").append(
            "<div class = 'songPic'>" +
            "<img src= '" + img + "'>" +
            "</div>"
        );
    }); 
    
}

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
