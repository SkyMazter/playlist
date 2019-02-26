/* global $ */

// BELOW Update the songs array with four of your favorites songs.
let songs = ["Sola", "The Ringer", "Just Lose It", "Brillo" ];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
let images_links = ["https://d2tml28x3t0b85.cloudfront.net/tracks/artworks/000/637/015/original/4ad20c.jpeg?1507743693" , "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F160b53c324c4cdeb709b605d3a591598.1000x1000x1.png" , "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTH3hIWonvC9jnxtfnxuem28zmlo_xvz-UEKzf4qL65_CikEK1u" , "https://t2.genius.com/unsafe/220x220/https%3A%2F%2Fimages.genius.com%2F0d6cd99787e67035da9050e63c0c4c6b.1000x1000x1.jpg"];
let artists = ["Anuel AA", "Eminem", "Eminem", "Jbalvin"];
let song_lengths = ["5:09", "5:43", "4:08", "2:41"];
let links = ["https://www.youtube.com/watch?v=x-lRA6MvB44", "https://www.youtube.com/watch?v=BHAM5m3j5cA", "https://www.youtube.com/watch?v=9dcVOmEQzKA", "https://www.youtube.com/watch?v=XDJYo-Z0E8M"];


function displaySongInfo(){
    // BELOW Use forEach Loop to display the data from each of your arrays in the correct div
    songs.forEach(function(song) {
        $("#songs").append(
            "<div class = 'text'>" +
            "<p>" + song +"</p>" +
            "</div>"
        );
    });
    images_links.forEach(function(img) {
        $("#images").append(
            "<div class = 'cover'>" +
            "<img src= '" + img + "'>" +
            "</div>"
        );
    }); 
    artists.forEach(function(artists) {
        $("#artists").append(
            "<div class = 'text'>" +
            "<p>" + artists +"</p>" +
            "</div>"
        );
    });
    song_lengths.forEach(function(lengths) {
        $("#lengths").append(
            "<div class = 'text'>" +
            "<p>" + lengths +"</p>" +
            "</div>"
        );
    });
    links.forEach(function(link){
        $("#links").append(
            "<a href = ' " + link + " '>" +
            "<img src='https://cdn0.iconfinder.com/data/icons/significon/512/Significon-Music-512.png' class = 'noteImg'>" +
            "</a>"
        
        );
    });
}

function emptySongInfo(){
    $("#songs").empty();
    $("#links").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#images").empty();
    // Use jQuery to empty all of the remaining divs


}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    song = $("#song").val();
    songs.push(song);

    link = $("#link").val();
    links.push(link);

    length = $("#length").val();
    song_lengths.push(length);

    image = $("#image").val();
    images_links.push(image);

    artist = $("#artist").val();
    artists.push(artist);

}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();
