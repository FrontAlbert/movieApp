const api_key = 'c2d2d9cda178ce20abd7ab8e83b201bf'

async function fetchPeople() {
    const dataFetch = await fetch(
        `https://api.themoviedb.org/3/trending/person/week?api_key=c2d2d9cda178ce20abd7ab8e83b201bf
        `
    );
    const data = await dataFetch.json();
    console.log(data);
    return data;
}

const displayPeople = () =>{
    fetchPeople().then((res)=>{
        console.log(res.results)
        array1= res.results
        array1.slice(0,6).forEach(x =>{
            
        })
        console.log(array1.slice(0,6))
    })



}


window.onload = (e) =>{
    displayPeople();
}