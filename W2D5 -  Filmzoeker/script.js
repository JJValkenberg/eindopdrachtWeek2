
const movieOverview = document.querySelector('#movie-overview');    //const gemaakt van UL (#movie-overview)
const titels = Movies.map(film => film.Title);                      //const gemaakt van array van titels
const posters = Movies.map(poster => poster.Poster);                //const gemaakt van array van posters


//Alle film posters voor beginscherm 
const movieOverviewItems = posters.forEach(movie => {
    let titel = document.createElement('li');                       // li toegvoegd
    movieOverview.appendChild(titel);                               // toegvoegde li aan ul gekoppeld
    let plaatje = document.createElement('img');                    // img toegevoegd
    plaatje.src = movie;                                            // source van img
    titel.appendChild(plaatje);                                     //img aan li toegvoegd
});

// filter voor 'nieuwe' films 
const button1 = document.querySelector("#button1");
const nieuw = Movies.filter((movie) => parseInt(movie.Year) >= 2014);
button1.addEventListener('change', function () {
    movieOverview.innerHTML = " ";
    nieuw.forEach(movie => {
        let titel = document.createElement('li');
        let plaatje = document.createElement('img');
        plaatje.src = movie.Poster;
        movieOverview.appendChild(titel);
        titel.append(plaatje);
    })
});

// filter voor 'Avenger' films
const button2 = document.querySelector("#button2");
const avengers = Movies.filter((movie) => movie.Title.includes("Avengers"));
button2.addEventListener('change', function () {
    movieOverview.innerHTML = " ";
    avengers.forEach(movie => {
        let titel = document.createElement('li');
        let plaatje = document.createElement('img');
        plaatje.src = movie.Poster;
        movieOverview.appendChild(titel);
        titel.append(plaatje);
    })
});

// filter voor 'X-men' films
const button3 = document.querySelector("#button3");
const xMen = Movies.filter((movie) => movie.Title.includes("X-Men"));
button3.addEventListener('change', function () {
    movieOverview.innerHTML = " ";
    xMen.forEach(movie => {
        let titel = document.createElement('li');
        let plaatje = document.createElement('img');
        plaatje.src = movie.Poster;
        movieOverview.appendChild(titel);
        titel.append(plaatje);
    })
});

// filter voor 'Princess' films
const button4 = document.querySelector("#button4");
const princess = Movies.filter((movie) => movie.Title.includes("Princess"));
button4.addEventListener('change', function () {
    movieOverview.innerHTML = " ";
    princess.forEach(movie => {
        let titel = document.createElement('li');
        let plaatje = document.createElement('img');
        plaatje.src = movie.Poster;
        movieOverview.appendChild(titel);
        titel.append(plaatje);
    })
});

// filter voor 'Batman' films
const button5 = document.querySelector("#button5");
const batman = Movies.filter((movie) => movie.Title.includes("Batman"));
button5.addEventListener('change', function () {
    movieOverview.innerHTML = " ";
    batman.forEach(movie => {
        let titel = document.createElement('li');
        let plaatje = document.createElement('img');
        plaatje.src = movie.Poster;
        movieOverview.appendChild(titel);
        titel.append(plaatje);
    })
});

// filter voor alle films
const button6 = document.querySelector("#button6");
button6.addEventListener('change', function () {
    movieOverview.innerHTML = " ";
    posters.forEach(movie => {
        let titel = document.createElement('li');
        movieOverview.appendChild(titel);
        let plaatje = document.createElement('img');
        plaatje.src = movie;
        titel.appendChild(plaatje);
    })
});
