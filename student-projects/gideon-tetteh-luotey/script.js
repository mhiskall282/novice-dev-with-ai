// ViewPort Movie Search App
// Using OMDB API

// DOM Elements
const searchForm = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const moviesContainer = document.getElementById('movies-container');
const loadingSection = document.getElementById('loading-section');
const errorSection = document.getElementById('error-section');
const errorText = document.getElementById('error-text');

// API Configuration
const API_KEY = 'demo'; // Using demo key for testing
const API_URL = 'http://www.omdbapi.com/';

// Show loading state
function showLoading() {
    loadingSection.style.display = 'block';
    errorSection.style.display = 'none';
}

// Hide loading state
function hideLoading() {
    loadingSection.style.display = 'none';
}

// Show error message
function showError(message) {
    errorText.textContent = message;
    errorSection.style.display = 'block';
}

// Create movie card HTML
function createMovieCard(movie) {
    return `
        <div class="movie-card">
            <img 
                src="${movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/300x450?text=No+Image'}" 
                alt="${movie.Title} poster"
                class="movie-poster"
            >
            <div class="movie-info">
                <h3 class="movie-title">${movie.Title}</h3>
                <p class="movie-year">${movie.Year}</p>
                <p class="movie-type">${movie.Type}</p>
                <a href="https://www.imdb.com/title/${movie.imdbID}" target="_blank" class="movie-link">View on IMDB</a>
            </div>
        </div>
    `;
}

// Display movies
function displayMovies(movies) {
    moviesContainer.innerHTML = movies.map(movie => createMovieCard(movie)).join('');
}

// Search for movies
async function searchMovies(query) {
    showLoading();
    
    try {
        const response = await fetch(`${API_URL}?apikey=${API_KEY}&s=${query}`);
        const data = await response.json();
        
        hideLoading();
        
        if (data.Response === 'True') {
            displayMovies(data.Search);
        } else {
            showError(data.Error || 'No movies found. Try another search!');
        }
    } catch (error) {
        hideLoading();
        showError('Failed to fetch movies. Please check your connection.');
        console.error('Error:', error);
    }
}

// Form submit event
searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const query = searchInput.value.trim();
    
    if (query) {
        searchMovies(query);
    }
});

// Initial load - show some popular movies
window.addEventListener('DOMContentLoaded', () => {
    searchMovies('action'); // Show action movies on load
});