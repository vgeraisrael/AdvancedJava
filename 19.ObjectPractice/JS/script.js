"use script";
/*jshint esversion: 9 */

let numberOfFilms;
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: function() {
        numberOfFilms = prompt("How many films did you watch already?", "");
        while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
            numberOfFilms = prompt("How many films did you watch already?", "");
        }
        personalMovieDB.count = numberOfFilms;
    },
    rememberMyFilms: function() {
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
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10) {
            alert("You watched too few films");
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert("You are a classic film viewer");
        } else {
            alert("You are a film`s maniac");
        }
    },
    showMyDB: function() {
        if(personalMovieDB.private === false) {
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for(let i = 0; i <= 2; i++){
            let genre = prompt(`Your favorite genre #${i+1}`);
            if(genre == '' || genre == null){
                i--;
                continue;
            }
            personalMovieDB.genres[i] = genre;
        }
        personalMovieDB.genres.forEach(s => console.log("first favorite genre is " + s));
    },
    toggleVisibleMyDB: function() {
        personalMovieDB.private = !personalMovieDB.private;
    }

};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
console.log(personalMovieDB.private);
