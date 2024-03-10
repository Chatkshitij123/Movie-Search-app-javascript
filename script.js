const searchForm = document.querySelector("form");
const movieContainer = document.querySelector(".movie-container");
const inputBox = document.querySelector(".inputBox");

//function to fetch movie details using OMDB api
const getMovieInfo = async (movie) => {
    const myAPIKey = "f477ce89";
    const url = `https://www.omdbapi.com/?i=tt3896198&apikey=${myAPIKey}&t=${movie}`;
    const response = await fetch(url);
    const data = await response.json();
    showMovieData(data);
}
//function to show movie data on screen
const showMovieData = (data) => {
    movieContainer.innerHTML = "";
    //use destructuring
    const { Title, imdbRating, Genre, Released, Runtime, Actors, Plot, Poster} = data;

    const movieElement = document.createElement('div');
    movieElement.classList.add('movie-info');
    movieElement.innerHTML = `<h2>${Title}></h2>
                            <p><strong>Rating: &#11088;</strong>${imdbRating}</p>`;
    const movieGenreElement = document.createElement('div');
    movieGenreElement.classList.add('movie-genre');

    Genre.split(",").forEach(element => {
        const p = document.createElement('p');
        p.innerText = element;
        movieGenreElement.appendChild(p);
    });

    movieElement.appendChild(movieGenreElement);

    movieElement.innerHTML += `<p><strong>Rating: &#11088;</strong>${imdbRating}</p>
                                <p><strong>Rating: &#11088;</strong>${imdbRating}</p>
                                <p><strong>Rating: &#11088;</strong>${imdbRating}</p>
                                <p><strong>Rating: &#11088;</strong>${imdbRating}</p>`;

                                //Creating a div for movie poster
    const moviePosterElement = document.createElement('div');
    moviePosterElement.classList.add('movie-poster');
    moviePosterElement.innerHTML = `<img src="${Poster}"/>`;
    
    movieContainer.appendChild(moviePosterElement);
    movieContainer.appendChild(movieElement);

}

//adding eventListener to search form
searchForm.addEventListener("submit", (e) => {
e.preventDefault();
// console.log(inputBox.value);
const movieName = inputBox.value.trim();
if (movieName !== ''){
    getMovieInfo(movieName);
}
})