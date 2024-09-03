import React, { useEffect, useState } from "react";

const MoviesComponent = () => {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchMovies() {
    const movieTitles = [
      "Iron Man",
      "The Dark Knight",
      "Avengers: Endgame",
      "Spider-Man: Homecoming",
      "Man of Steel",
      "Black Panther",
      "Wonder Woman",
      "Guardians of the Galaxy",
      "Batman v Superman: Dawn of Justice",
      "Doctor Strange",
      "Aquaman",
      "Thor: Ragnarok",
      "Captain Marvel",
      "Justice League",
      "Ant-Man",
    ];
    const fetchedMovies = [];

    for (const title of movieTitles) {
      try {
        const response = await fetch(
          `http://www.omdbapi.com/?t=${title}&apikey=9bc894d8`
        );
        const data = await response.json();
        fetchedMovies.push({
          Title: data.Title || "Unknown Title",
          Poster: data.Poster || "https://via.placeholder.com/150",
          Director: data.Director || "Unknown Director",
          Actors: data.Actors || "Not Available",
          Genre: data.Genre || "Unknown Genre",
          Country: data.Country || "Unknown Country",
          Language: data.Language || "Unknown Language",
          Plot: data.Plot || "No description available.",
          Awards: data.Awards || "No awards",
          BoxOffice: data.BoxOffice || "N/A",
        });
      } catch (error) {
        console.error(`Error fetching data for ${title}:`, error);
      }
    }

    setMovies(fetchedMovies);
    console.log(fetchedMovies);
    setIsLoading(false);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="movies-container flex flex-row justify-start gap-4 p-4 overflow-x-auto">
      {movies.map((movie, index) => (
        <div
          key={index}
          className="movie-card border rounded shadow-lg bg-white flex flex-col p-4"
          style={{
            width: "200px",
            minWidth: "200px",
            height: "400px",
            color: "black",
          }}
        >
          <img
            src={movie.Poster}
            alt={movie.Title}
            className="mb-2 rounded"
            style={{ height: "200px", width: "auto", objectFit: "cover" }}
          />
          <h1 className="text-base font-bold mb-1 truncate">{movie.Title}</h1>
          <p className="text-sm truncate">
            <strong>Director:</strong> {movie.Director}
          </p>
          <p className="text-sm truncate">
            <strong>Actors:</strong> {movie.Actors}
          </p>
          <p className="text-sm truncate">
            <strong>Genre:</strong> {movie.Genre}
          </p>
          <p className="text-sm truncate">
            <strong>Country:</strong> {movie.Country}
          </p>
          <p className="text-sm truncate">
            <strong>Language:</strong> {movie.Language}
          </p>
          <p className="text-sm truncate">
            <strong>Awards:</strong> {movie.Awards}
          </p>
          <p className="text-sm truncate">
            <strong>BoxOffice:</strong> {movie.BoxOffice}
          </p>
        </div>
      ))}
    </div>
  );
};

export default MoviesComponent;
