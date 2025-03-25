// Extract movie title from the URL's query parameter
function getMovieTitleFromURL() {
    const urlParams = new URLSearchParams(window.location.search); // Parse URL parameters
    const movieId = urlParams.get('movie'); // Get 'movie' parameter
  
    // List of movie titles corresponding to IDs
    // const movieTitles = {
    //   movie1: "Epic Adventure",
    //   movie2: "Drama Chronicles",
    //   movie3: "Comedy Nights",
    //   action1: "Action Movie 1",
    //   action2: "Action Movie 2",
    //   action3: "Action Movie 3",
    //   drama1: "Drama Movie 1",
    //   drama2: "Drama Movie 2",
    //   drama3: "Drama Movie 3",
    //   comedy1: "Comedy Movie 1",
    //   comedy2: "Comedy Movie 2",
    //   comedy3: "Comedy Movie 3"
    // };
  
    // Return the corresponding title or a default value if the ID doesn't exist
    return movieId + ".mp4" || "Unknown Movie";
  }
  
  // Update the "Now Streaming" title dynamically
  function updateStreamingTitle() {
    const streamingTitleElement = document.getElementById('streaming-title');
    const movieTitle = getMovieTitleFromURL(); // Fetch the title from the URL
    streamingTitleElement.textContent = `Now Streaming: ${movieTitle}`; // Update the HTML
  }
  
  // Initialize the dynamic title update when the page loads
  updateStreamingTitle();
  