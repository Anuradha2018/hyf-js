// Exercise 1

// Firstly lets fetch the reddit posts using their api https://www.reddit.com/r/ProgrammerHumor.json

function getAjaxData(url, callback) {
    // Create new ajax call with the js function called XMLHttpRequest
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {
        // This in here is our callback function
        // Check our server responsecode, 200 means ok, success:
        // https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
        if (this.status === 200) {
            callback(JSON.parse(request.responseText));
        } else {
            console.log('Something is probably wrong with the url');
        }
    });

    request.addEventListener('error', function () {
        console.log('Server error like timeout');
    });

    // initializes a request with an http method
    request.open("GET", url);
    // Sends the request 
    request.send();
}

getAjaxData('https://www.reddit.com/r/ProgrammerHumor.json', function (r) {
    // 1
    const redditPosts = r.data.children;
    // 2
    const redditPostsWithThumbnail = redditPosts
        .filter(post => post.data.thumbnail_width)
        .map(post => post.data.downs);
    console.log(redditPostsWithThumbnail);
    // 3

    const n4 = redditPosts.filter(post => post.data.thumbnail_height > 100)
        .filter(post => post.data.ups > 500);
    console.log(n4);
});
// Exercise 2
// Lets find the reddit posts that have a thumbnail (what array function are we going to use??)
// thumbnail.width
// filter

// Exercise 3
// We are not interested in all the data, but only the number of down votes. 
// map

// Exercise 4
// Lets find out if including a large thumbnail in your reddit posts
// decreases the average number of downvotes:

// 4.1 Lets find the average number of downvotes posts with a small thumbnail has

// 4.2 Lets find the average number of downvotes posts without a large thumbnail has


// Exercise 5
// Get the title of the least successful reddit post.