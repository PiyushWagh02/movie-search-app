const searchBtn = document.getElementById("searchBtn");
const movieInput = document.getElementById("movieInput");
const resultsDiv = document.getElementById("results");

// Fetch movies from OMDb API

async function fetchMovies() {
    const response = await fetch("movies.json");
    const data = await response.json();
    displayMovies(data);
}


// Display movies on the page
function displayMovies(movies) {
    resultsDiv.innerHTML = "";

    movies.forEach((movie) => {
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");
        const poster = movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/150";
        movieCard.innerHTML = `
            <img src="${poster}" alt="${movie.Title}">
            <h3>${movie.Title}</h3>
            <p>${movie.Year}</p>
        `;
        resultsDiv.appendChild(movieCard);
    });
}

// Search button click event
searchBtn.addEventListener("click", () => {
    const movieName = movieInput.value.trim();
    if (movieName) {
        fetchMovies(movieName);
    }
});

// Enter key press support

movieInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        searchBtn.click();
    }
});
