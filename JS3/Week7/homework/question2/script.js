function getAjaxData(url, callback) {
    
    const request = new XMLHttpRequest();
    request.addEventListener('load', function () {

        if (this.status === 200) {
            callback(JSON.parse(request.responseText));
        } else {
            console.log('Something is probably wrong with the url');
        }
    });

    request.addEventListener('error', function () {
        console.log('Server error like timeout');
    });
    request.open("GET", url);
    request.send();
}

const url = 'https://gist.githubusercontent.com/pankaj28843/08f397fcea7c760a99206bcb0ae8d0a4/raw/02d8bc9ec9a73e463b13c44df77a87255def5ab9/movies.json';

//i.
getAjaxData(url, movies =>{
    movies.forEach(movie =>{
        if(movie.rating >= 7){
            movie.tag = "Good";
        }
        if(movie.rating >= 4 && movie.rating < 7){
            movie.tag = "Average";
        }
        if(movie.rating < 4){
            movie.tag = "Bad";
        }
    });
    console.log("Movies with tags=", movies);


//ii.

let sum = movies.reduce((sum, movie) =>{
    sum += movie.rating;
    return sum;
},0);
let averageRating = sum/(movies.length);
console.log(averageRating);


//iii.
let counter = {good:0, average:0, bad:0};
let numberOfMovies = (counter, movie) =>{
    if(movie.tag == "Good") counter.good++;
    if(movie.tag == "Average") counter.average++;
    if(movie.tag == "Bad") counter.bad++;
    return counter;

}
const totalTags = (movies.reduce(numberOfMovies,counter ));
console.log(totalTags);

//iv.

const keywords = ['The', 'dog', 'who', 'is', 'not', 'a', 'man'];

const titles = movies.map(a =>a.title);
console.log(titles);

const titlesWithkeywords = titles.filter( titles =>{
    const words = titles.split(/[^\w]/);
    return keywords.some(keyword => words.includes(keyword));

});
console.log(titlesWithkeywords);

let keywordCounter = {
    the: 0,
    dog: 0,
    who: 0,
    is: 0,
    not: 0,
    a: 0,
    man:0,
};

for(let i =0; i < titlesWithkeywords.length; i++){
    for (let j = 0; j < keywords.length ; j++){
        if(titlesWithkeywords[i].includes(keywords[j].toLowerCase())){
            keywordCounter[keywords[j].toLowerCase()]++;
        }
    }
}
console.log(keywordCounter);

//v.



let noOfMovies = movies.filter(movies=>movies.year >= 1980 && movies.year <= 1989);

console.log(noOfMovies.length);

    

});