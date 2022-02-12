let numberOfFilms = prompt("How many films did you watch already?", "0");

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

for (let i = 0; i < numberOfFilms; i++) {
    let answer1Film = prompt("Name of one of your last seen films?", "unknown");
    if (answer1Film === null || answer1Film.length < 1 || answer1Film.length > 50) {
        alert("Wrong input");
        i--;
        continue;
    }
    let answer1Rating = +prompt(`How do you rate ${answer1Film}?`, "0");
    if (answer1Rating === null || answer1Film.length < 1 || answer1Film.length > 50) {
        alert("Wrong input");
        i--;
        continue;
    }

    personalMovieDB.movies[answer1Film] = answer1Rating;
}
if (personalMovieDB.count < 10) {
    alert("You watched too few films");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert("You are a classic film viewer");
} else {
    alert("You are a film`s maniac");
}
console.log(personalMovieDB.movies);