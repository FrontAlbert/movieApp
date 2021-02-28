const content = document.querySelector('.secondary-playing')

async function fetchNewRelease() {
    const dataFetch = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=c2d2d9cda178ce20abd7ab8e83b201bf&language=en-US&page=1
        `
    );
    const data = await dataFetch.json();
    console.log(data);
    return data;
}

const newRelease = () => {
    fetchNewRelease().then((res) => {
        array1 = res.results;
        array1.slice(0, 25).forEach((x) => {
            // console.log(x);
            const markup = `
            <div class="secondary-container">
            <div class="secondary-overlay">
                <img class="secondary-image" src=${IMAGE_URL + x.poster_path}>
                <p class="overlay2">${x.overview}</p>
            </div>

                <div class="secondary-markup-details">
                    <div class="secondary-detail-header">
                        <h5>${x.original_title}<h5>
                        <i class="fas fa-star"> ${x.vote_average}</i>
                    </div>
                    <div class="secondary-detail-header2">
                    <h5>${(name = x.release_date
                        ? `${x.release_date}`
                        : `${x.first_air_date}`)}</h5>
                    <a href=https://www.imdb.com/ class="trailer">IMDB</a>
            </div>
                    
                </div>
            </div>
            `;
            content.insertAdjacentHTML("beforeend", markup);
        });

    });
};
// FETCH NOW PLAYING

window.onload = () => {
    newRelease();
};