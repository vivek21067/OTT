document.addEventListener("DOMContentLoaded", async function () {
  const movieGrid = document.getElementById("movieGrid");
  const imagePath = "images/"; // Path to the images folder

  try {
      // Fetch movie data from the JSON file
      const response = await fetch("movies.json");
      const movies = await response.json();

      // Clear existing movie cards (if any)
      movieGrid.innerHTML = "";

      // Generate movie cards dynamically
      movies.forEach(movie => {
          const movieCard = document.createElement("div");
          movieCard.classList.add("movie-card");
          movieCard.setAttribute("onclick", `navigateToStreaming('${movie.name}')`);

          movieCard.innerHTML = `
              <img src="${imagePath}${movie.image}" alt="${movie.name}">
              <h2>${movie.name}</h2>
              <p>Genre: ${movie.genre}</p>
              <p>Director: ${movie.director}</p>
          `;

          movieGrid.appendChild(movieCard);
      });
  } catch (error) {
      console.error("Error fetching movie data:", error);
      movieGrid.innerHTML = "<p>Failed to load movies. Please try again later.</p>";
  }
});

// Navigation function
function navigateToStreaming(movieId) {
  window.location.href = `streaming.html?movie=${movieId}`;
}
