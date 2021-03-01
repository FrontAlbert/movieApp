const api_key = "c2d2d9cda178ce20abd7ab8e83b201bf";
const people = document.querySelector(".popular-people");
const trending = document.querySelector(".trending-movies");
const nowPlaying = document.querySelector(".now-playing");
const hotFilms = document.querySelector(".hot-films");
const searchResults = document.querySelector(".search-results");
const searchInput = document.querySelector(".search-input");
const form = document.querySelector(".search-form");
const submitBtn = document.querySelector(".submit-btn");
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";
let currentSearch;
let searchValue;

// Fetch Search Function
async function searchMovie(query) {
    const dataFetch = await fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=c2d2d9cda178ce20abd7ab8e83b201bf&language=en-US&page=1&query=${query}&include_adult=false
        `
    );
    const data = await dataFetch.json();
    console.log(data);
    return data;
}

const displaySearchMovies = () => {
    searchMovie(searchInput.value).then((response) => {
        console.log(response.results);
        movies = response.results;
        movies.slice(0, 4).forEach((x) => {
            console.log(x);
            const markup = `
            <div class="movie-results">
            <div class="overlay-container">
                <img src="${IMAGE_URL + x.poster_path}">
                <p class="overlay">${x.overview}</p>
            </div>
                <div class="results-overlay">
                        <p>${x.original_title}</p>
                        <i class="fas fa-star">${x.vote_average}</i>
                    </div>
                    <div class="results-overlay2">
                    <p>${x.release_date}</p>
                    <i class="fas fa-eye"> ${x.vote_count}</i>
                </div>
            </div>
            `;
            searchResults.insertAdjacentHTML("beforeend", markup);
        });
    });
};

// Fetch Search Function
searchInput.addEventListener("input", updateInput);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    currentSearch = searchValue;
    searchMovie(searchValue);
});
function updateInput(e) {
    searchValue = e.target.value;
}

// FETCH NOW PLAYING
async function fetchNowPlaying() {
    const dataFetch = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=c2d2d9cda178ce20abd7ab8e83b201bf&language=en-US&page=1
        `
    );
    const data = await dataFetch.json();
    // console.log(data);
    return data;
}

const displayNowPlaying = () => {
    fetchNowPlaying().then((res) => {
        array1 = res.results;
        array1.slice(0, 3).forEach((x) => {
            // console.log(x);
            const markup = `
            <div class="markup-container">
            <div class="overlay-container">
                <img class="markup-image" src=${IMAGE_URL + x.poster_path}>
                <p class="overlay">${x.overview}</p>
            </div>

                <div class="markup-details">
                    <div class="detail-header">
                        <h5>${x.original_title}<h5>
                        <i class="fas fa-star"> ${x.vote_average}</i>
                    </div>
                    <div class="detail-header2">
                    <h5>${(name = x.release_date
                        ? `${x.release_date}`
                        : `${x.first_air_date}`)}</h5>
                    <a href=https://www.imdb.com/ class="trailer">IMDB</a>
            </div>
                    
                </div>
            </div>
            `;
            nowPlaying.insertAdjacentHTML("beforeend", markup);
        });
        array1.slice(4, 10).forEach((x) => {
            // console.log(x);
            const markup2 = `
            <div class="film-list">
                <ul>
                    <li> <i class="far fa-star"> ${x.vote_average} ${x.title}</i></li>
                </ul>
            </div>
            `;
            hotFilms.insertAdjacentHTML("beforeend", markup2);
        });
    });
};
// FETCH NOW PLAYING

// FETCH TRENDING

const displayTrending = () => {
    fetchTrending().then((res) => {
        array1 = res.results;
        array1.slice(0, 4).forEach((x) => {
            // console.log(x);
            const markup = `
            <div class="markup-container">
                <div class="overlay-container">
                    <img class="markup-image" src=${IMAGE_URL + x.poster_path}>
                    <p class="overlay">${x.overview}</p>
                </div>
                <div class="markup-details">
                    <div class="detail-header">
                        <h5>${(name = x.original_title
                            ? `${x.original_title}`
                            : `${x.original_name}`)}<h5>
                        <i class="fas fa-crown"> ${x.vote_average}</i>
                    </div>
                    <div class="detail-header2">
                            <h5>${(name = x.release_date
                                ? `${x.release_date}`
                                : `${x.first_air_date}`)}</h5>
                                <a href="https://www.imdb.com/" class="trailer">IMDB</a>
                    </div>
                </div>
            </div>
            `;
            trending.insertAdjacentHTML("beforeend", markup);
        });
    });
};

// FETCH TRENDING

// People Fetch
async function fetchPeople() {
    const dataFetch = await fetch(
        `https://api.themoviedb.org/3/person/popular?api_key=c2d2d9cda178ce20abd7ab8e83b201bf&language=en-US&page=1
        `
    );
    const data = await dataFetch.json();
    // console.log(data);
    return data;
}

const displayPeople = () => {
    fetchPeople().then((res) => {
        array1 = res.results;
        array1.slice(0, 5).forEach((x) => {
            // console.log(x);
            const markup = `
            <div class="markup-container">
                <img class="markup-image" src=${IMAGE_URL + x.profile_path}>
                <div class="markup-details">
                    <div class="detail-header">
                        <h5>${x.name}<h5>
                        <i class="fas fa-star"> ${x.popularity}</i>
                    </div>
                </div>
            </div>
            `;
            people.insertAdjacentHTML("beforeend", markup);
        });
    });
};

// Trending Fetch
async function fetchTrending() {
    const dataFetch = await fetch(
        `https://api.themoviedb.org/3/trending/all/day?api_key=c2d2d9cda178ce20abd7ab8e83b201bf
        `
    );
    const data = await dataFetch.json();
    // console.log(data);
    return data;
}

window.onload = () => {
    displayPeople();
    displayTrending();
    displayNowPlaying();
};

const clearSearches = () => {
    searchResults.innerHTML = " ";
};

const clearField = () => {
    searchInput.value = "";
};

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    displaySearchMovies();
    clearSearches();
    clearField();
});

// const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

// tl.to("nav",{ opacity: 1, duration: 1 });
// tl.to(".movie-flex ", { x: "0%", duration: 1.25 });
// tl.to(".now-playing-news", { x: "0%", duration: 1.25 });

// Class and then class setting u want and then duration, ease u can google it

gsap.to("nav", { opacity: 1, duration: 3 });
gsap.to(".movie-flex ", { x: "0%", duration: 1.25, ease: "bounce" });
gsap.to(".now-playing-news", { x: "0%", duration: 1.25 });
gsap.to(".secondary-playing", { opacity: 1, duration: 1.5 });