const api_key = "c2d2d9cda178ce20abd7ab8e83b201bf";
const people = document.querySelector(".popular-people");
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

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
        array1.slice(0, 4).forEach((x) => {
            // console.log(x);
            console.log(x)
            const markup = `
            <div class="container">
                <img class="person" src=${IMAGE_URL + x.profile_path}>
                <div class="person-details">
                    <div class="person-header">
                        <h5>${x.name}<h5>
                        <i class="fas fa-crown"> ${x.popularity}</i>
                    </div>
                </div>
            </div>
            `
            ;
            people.insertAdjacentHTML("beforeend", markup);
        });
    });
};

window.onload = (e) => {
    displayPeople();
};
// People Fetch