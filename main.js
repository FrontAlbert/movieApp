const api_key = "c2d2d9cda178ce20abd7ab8e83b201bf";
const people = document.querySelector(".popular-people");
const trending = document.querySelector(".trending-movies");
const nowPlaying = document.querySelector(".now-playing");
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

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
        array1.slice(0, 5).forEach((x) => {
            console.log(x);
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
                    <h5>${(name = x.release_date ? `${x.release_date}`
                    : `${x.first_air_date}`)}</h5>
                    <h5 class="trailer">Watch Now<h5>
            </div>
                    
                </div>
            </div>
            `;
            nowPlaying.insertAdjacentHTML("beforeend", markup);
        });
    });
};
// FETCH NOW PLAYING

// FETCH TRENDING

const displayTrending = () => {
    fetchTrending().then((res) => {
        array1 = res.results;
        array1.slice(0, 5).forEach((x) => {
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
                            <h5>${(name = x.release_date ? `${x.release_date}`
                            : `${x.first_air_date}`)}</h5>
                            <h5 class="trailer">Trailer<h5>
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



window.onload = (e) => {
    displayPeople();
    displayTrending();
    displayNowPlaying()
};
