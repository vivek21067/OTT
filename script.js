document.addEventListener("DOMContentLoaded", async function () {
  const movieGrid = document.getElementById("movieGrid");
  const imagePath = "popular/images/"; // Folder for movie images
  const popularPath = "popular/"; // Folder containing genre JSONs
  const genres = ["comedy", "action", "science"]; // Genres to include

  try {
    // Clear existing movie cards if any
    movieGrid.innerHTML = "";

    // Fetch and display movies from each genre
    for (const genre of genres) {
      const response = await fetch(`${popularPath}${genre}/${genre}.json`);
      const movies = await response.json();

      movies.forEach((movie) => {
        // Create a movie card
        const movieCard = document.createElement("div");
        movieCard.classList.add("movie-card");
        movieCard.setAttribute(
          "onclick",
          `navigateToStreaming('${popularPath}${genre}/${movie.video}')`
        );

        // Populate movie card with only the image
        movieCard.innerHTML = `
          <img src="${imagePath}${movie.image}" alt="${movie.name}">
        `;

        movieGrid.appendChild(movieCard);
      });
    }
  } catch (error) {
    console.error("Error fetching movie data:", error);
    movieGrid.innerHTML = "<p>Failed to load movies. Please try again later.</p>";
  }
});

// Navigation function
function navigateToStreaming(videoPath) {
  window.location.href = `streaming.html?video=${videoPath}`;
}
