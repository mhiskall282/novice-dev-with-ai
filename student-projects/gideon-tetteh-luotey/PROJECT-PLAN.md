# Movie Search App - Project Plan

## Project Name: "ViewPort"

## Color Scheme: "Silver Screen Magic" (Unique Custom Palette)

### Color Palette
- **Primary**: #2c243b (Deep Purple - like a theater curtain)
- **Secondary**: #4a3f5c (Muted Violet - card backgrounds)
- **Accent**: #c99e5d (Antique Gold - buttons and highlights)
- **Text**: #f0f0f0 (Soft White - primary text)
- **Background**: #0d0a14 (Midnight Purple - page background)
- **Highlight**: #ff6b6b (Coral - for ratings/favorites)

### Why This Palette?
- **Deep Purple** represents the theater curtain and elegance
- **Antique Gold** evokes the classic Hollywood golden age
- **Midnight Purple** gives a cinematic night-time feel
- **Coral** adds a pop of energy for interactive elements
- This combination is **unique** and not commonly used by other developers

## Project Overview
Build a movie search application that allows users to search for movies and display results from a public movie API.

## Architecture

```
student-projects/gideon-tetteh-luotey/
├── index.html          # Main page with search form
├── about.html          # About the app
├── contact.html        # Contact form
├── styles.css          # All styling
├── script.js           # JavaScript for API integration
├── config.js           # API key configuration (NOT on GitHub)
└── PROJECT-PLAN.md     # This file
```

## Features

### Phase 1: HTML Structure
- [ ] Create search form with input and button
- [ ] Add results container for movie cards
- [ ] Include loading indicator
- [ ] Add error message display

### Phase 2: CSS Styling
- [ ] Style the search form
- [ ] Create movie card layout (CSS Grid)
- [ ] Add responsive design for mobile
- [ ] Style loading and error states

### Phase 3: JavaScript Integration
- [ ] Get API key from OMDB API
- [ ] Create search function
- [ ] Fetch movie data from API
- [ ] Display results dynamically
- [ ] Handle errors gracefully

## API Integration

### OMDB API (Primary Choice)
- **Endpoint**: `http://www.omdbapi.com/?apikey=[YOUR_KEY]&s=[MOVIE_TITLE]`
- **No database required** - API provides all data
- **Free tier**: 1,000 requests per day
- **Website**: http://www.omdbapi.com/apikey.aspx

### TMDb API (Alternative)
- **Endpoint**: `https://api.themoviedb.org/3/search/movie`
- **Free tier**: 10,000 requests/day
- **More features**: ratings, reviews, similar movies

### API Key Security
- **config.js** will hold your API key
- **Add to .gitignore** if using git
- **Never commit API keys** to public repositories
- For demo purposes, we can use a placeholder key

### Sample Response
```json
{
  "Search": [
    {
      "Title": "Movie Title",
      "Year": "2023",
      "imdbID": "tt1234567",
      "Type": "movie",
      "Poster": "https://poster-url.jpg"
    }
  ]
}
```

## Learning Objectives
- HTML forms and semantic structure
- CSS Grid for responsive layouts
- JavaScript fetch API
- Working with JSON data
- Error handling in JavaScript
- Responsive web design

## Next Steps
1. Get OMDB API key (free registration)
2. Build HTML structure
3. Style with CSS
4. Add JavaScript functionality
5. Test and deploy

## Notes
- No download links (copyright issues)
- Focus on displaying movie information
- Can add "Watch on IMDB" links instead
- API key must be kept private