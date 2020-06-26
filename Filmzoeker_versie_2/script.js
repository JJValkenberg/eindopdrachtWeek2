const navigationButtons = document.querySelectorAll('.button'); //attaching indiviual buttons through DOM in a variable
const movieUL = document.querySelector(".movie-overview");      //UL in variabel placed in variabele through DOM

const addMovies = (movie) => {
    let newLi = document.createElement("li");   // New element created ("li") and placed in variable newLi 
    movieUL.appendChild(newLi);                 //Li to UL attached         
    let poster = document.createElement("img"); //// New element created ("img") and placed in variable poster 
    poster.src = movie.Poster;                  // source for the img
    newLi.appendChild(poster);                  //img attached to de newLI
    let link = document.createElement("a");     //New element created ("a") and placed in variabele link 
    link.href = `https://www.imdb.com/title/${movie.imdbID}`; //source for the link
    link.target = '_blank'; // opening the link (on image 'a tag' wil open a new window)
    link.appendChild(poster);
    newLi.appendChild(link);
};

const addMoviesToDom = movies.forEach(movie => addMovies(movie)); // Function to show all the movies and to attach link of the specific movies
//button 1 all movies
const buttonAll = document.querySelector("#all-movies");      //button via DOM in variabele gestopt      
buttonAll.addEventListener('change', function () {          //Eventlistener added to button ('click)
    movieUL.innerHTML = " ";
    return movies.forEach(movie => addMovies(movie));
})
//button 2 new-movies
const newMovies = movies.filter(movie => movie.Year >= 2014);
const buttonNew = document.querySelector("#new-movies");
buttonNew.addEventListener('change', function () {
    movieUL.innerHTML = " ";
    newMovies.forEach(movie => {
        addMovies(movie);
    })
})
//button 3 avengers-movies
const avengersMovies = movies.filter(movie => movie.Title.includes("Avengers"));
const buttonAvengers = document.querySelector("#avengers-movies");
buttonAvengers.addEventListener('change', () => {
    movieUL.innerHTML = " ";
    avengersMovies.forEach(movie => {
        addMovies(movie);
    })
})
//button 4 x-men movies
const xMenMovies = movies.filter(movie => movie.Title.includes("X-Men"));
const buttonXMen = document.querySelector("#x-men-movies");
buttonXMen.addEventListener('change', function () {
    movieUL.innerHTML = " ";
    xMenMovies.forEach(movie => {
        addMovies(movie);
    })
})
// button5 princess-movies
const princessMovies = movies.filter(movie => movie.Title.includes("Princess"));
const buttonPrincess = document.querySelector("#princess-movies");
buttonPrincess.addEventListener('change', function () {
    movieUL.innerHTML = " ";
    princessMovies.forEach(movie => {
        addMovies(movie);
    })
})
// button6 batman-movies
const batmanMovies = movies.filter(movie => movie.Title.includes("Batman"));
const buttonBatman = document.querySelector("#batman-movies");
buttonBatman.addEventListener('change', function () {
    movieUL.innerHTML = " ";
    batmanMovies.forEach(movie => {
        addMovies(movie);
    })
})

