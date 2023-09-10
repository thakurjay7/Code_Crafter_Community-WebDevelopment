//Js for search button event

function performGoogleSearch() {
    // Get the user's search query from the input field
    const searchQuery = document.getElementById("search-bar").value;

    const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;

    // Redirect the user to the Google search results page
    window.location.href = googleSearchURL;
}


// Js for enter event
function searchOnEnter(event) {
    if (event.key === 'Enter') {
        performGoogleSearch();
    }
}

function performGoogleSearch() {
    // Get the user's search query from the input field
    const searchQuery = document.getElementById("search-bar").value;

    const googleSearchURL = `https://www.google.com/search?q=${encodeURIComponent(searchQuery)}`;

    // Redirect the user to the Google search results page
    window.location.href = googleSearchURL;
}

