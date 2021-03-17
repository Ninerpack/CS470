// Main js functions

// Function for youtube videos.
// Method to run JS code.
$(document).ready(function() {
//var youtube_key = "AIzaSyBGFtH68BFY9L-iNkVF1IuzZdWYiIRqg_A";
var youtube_key = "AIzaSyAYn-zgow3r768rIgaXMhiK7XzGETLUInw";

$("form").submit(function(event) {
    event.preventDefault();

    // Get value of the search query.
    var search = $("#search").val();

    // Call the YouTube API
    // Params: API key, search query, number of results
    videoSearch(youtube_key, search, 1);
})

    //  Example API Request
    //'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&q=hello%20there&key=[YOUR_API_KEY]'

    function videoSearch(key,search,maxResults){

        // Clear contents if there are old videos.
        $("#videos").empty();
        search = search + " trailer";
 
        // API request for a search result
        $.getJSON("https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=" + maxResults + "&q=" + search + "&key=" + youtube_key, function(data){
            console.log(data);
            // Look through each item from the result of the request.
            data.items.forEach(item => {
                // Put each video from the search result in their own windows.
                video = `<iframe width="420" height="315" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>`
                // Add video to the lists of videos.
               $("#videos").append(video);
            })
        })
    }
})