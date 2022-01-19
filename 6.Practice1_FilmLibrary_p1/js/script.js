let numberOfFilms = prompt("How many films did you watch already?", "0");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

let answer1Film = prompt("Name of one of your last seen films?", "unknown");
let answer1Rating = +prompt(`How do you rate ${answer1Film}?`, "0");
let answer2Film = prompt("Name of one of your last seen films?", "unknown");
let answer2Rating = +prompt(`How do you rate ${answer2Film}?`, "0");

personalMovieDB.movies[answer1Film] = answer1Rating;
personalMovieDB.movies[answer2Film] = answer2Rating;

console.log(personalMovieDB.movies);