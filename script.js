function loadEvent() {

    //<script> fetch("valami.json") </script>
    fetch("valami.json")
    .then(response => response.json())      //pontosvesszőt nem szabad használni
    .then(data => console.log(data));       //(data.movies[0].title)
}

window.addEventListener("load", loadEvent); 

/* 
function movieSection(paramTitle, paramYear) {

    return 
    <section class="movie">
        <h2>
            ${paramTitle}
        </h2>
        <h3>
            ${paramYear}
        </h3>
    </section>
    
}

/*
    fetch("movies.json").then(response => response.json()).then(data => console.log(data.movies[0].title)); // metódus összeláncolás
    // a fetch return-el tér vissza. Pl. a "then" metódussal
*/
/* 
async function loadEvent() {

    const rootE = document.getElementById("root");

    const response = await fetch("movies.json")
    const moviesData = await response.json()

    // console.log(moviesData.movies)

    for (const movie of moviesData.movies) {
        // console.log(movie.title)
        rootE.insertAdjacentHTML("beforeend", movieSection(movie.title, movie.year))
    }
}

window.addEventListener("load", loadEvent);
  */