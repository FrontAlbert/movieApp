const searchResults = document.querySelector(".search-results");
const searchInput = document.querySelector(".search-input");
const form = document.querySelector(".home-search");
const submitBtn = document.querySelector(".submit-btn");
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

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

gsap.to(".homepage", { opacity: 1, x: "0%", duration: 3 });
