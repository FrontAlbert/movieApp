const newly = document.querySelector('.newly')

async function fetchNewRelease() {
    const dataFetch = await fetch(
        `https://api.themoviedb.org/3/movie/now_playing?api_key=c2d2d9cda178ce20abd7ab8e83b201bf&language=en-US&page=1
        `
    );
    const data = await dataFetch.json();
    // console.log(data);
    return data;
}

const newRelease = () => {
    fetchNewRelease().then((res) => {
        array1 = res.results;
        array1.slice(0, 25).forEach((x) => {
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
            newly.insertAdjacentHTML("beforeend", markup);
        });

    });
};
// FETCH NOW PLAYING

window.onload = () => {
    newRelease();
};