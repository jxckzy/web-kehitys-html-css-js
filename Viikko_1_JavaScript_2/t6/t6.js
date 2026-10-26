let numMoviesInput = prompt("Enter the number of movies you want to rate:");
let numMovies = Number(numMoviesInput);

const movies = [];

if (!isNaN(numMovies) && numMovies > 0) {
    for (let i = 1; i <= numMovies; i++) {
        let title = prompt(`Enter the title of movie ${i}:`);
        
        if (title === null || title.trim() === "") {
            alert("Movie title cannot be empty. Please restart or try again.");
            break;
        }

        let ratingInput = prompt(`Enter the rating for "${title.trim()}" (on a scale of 1 to 5):`);
        let rating = Number(ratingInput);

        if (isNaN(rating) || rating < 1 || rating > 5) {
            alert("Invalid rating. Please enter a number between 1 and 5. Setting default rating to 3.");
            rating = 3;
        }

        const movie = {
            title: title.trim(),
            rating: rating
        };

        movies.push(movie);
    }

    movies.sort((a, b) => b.rating - a.rating);
    const outputDiv = document.getElementById("output");

    if (movies.length > 0) {
        const highestRatedMovie = movies[0];

        let htmlContent = `<h2>Sorted List of Movies (Highest to Lowest Rating):</h2>`;
        htmlContent += `<ul>`;
        for (const movie of movies) {
            htmlContent += `<li><strong>${movie.title}</strong> - Rating: ${movie.rating}/5</li>`;
        }
        htmlContent += `</ul>`;

        htmlContent += `<h2>Highest-Rated Movie:</h2>`;
        htmlContent += `<p><strong>${highestRatedMovie.title}</strong> with a rating of <strong>${highestRatedMovie.rating}/5</strong>!</p>`;

        outputDiv.innerHTML = htmlContent;
    } else {
        outputDiv.innerHTML = `<p>No movies were entered.</p>`;
    }
} else {
    document.getElementById("output").innerHTML = `<p style="color: red;">Please enter a valid number greater than 0.</p>`;
}