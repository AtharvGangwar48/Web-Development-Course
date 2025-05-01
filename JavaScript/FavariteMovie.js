const fav = "Avenger : Endgame";
let guess = prompt("Guess the movie");

while((guess != fav) && (guess != "Quit")){
    guess = prompt("Wrong answer, guess the movie again!!! or Type Quit");
}