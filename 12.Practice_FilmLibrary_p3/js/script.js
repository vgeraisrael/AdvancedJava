let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

start();
rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB();


function start() {
    numberOfFilms = prompt("How many films did you watch already?", "");
    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt("How many films did you watch already?", "");
    }
    personalMovieDB.count = numberOfFilms;
};

function rememberMyFilms() {
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
}

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        alert("You watched too few films");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        alert("You are a classic film viewer");
    } else {
        alert("You are a film`s maniac");
    }
}

function showMyDB() {
    if(personalMovieDB.private === false) {
        console.log(personalMovieDB);
    }
}

function writeYourGenres(){
    for(let i = 0; i <= 2; i++){
        let genre = prompt(`Your favorite genre #${i+1}`);
        if(genre == '' || genre == null){
            continue;
        }
        personalMovieDB.genres[i] = genre;
    }
}