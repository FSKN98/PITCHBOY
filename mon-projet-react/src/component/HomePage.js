import React, { useState, useEffect } from "react";
import axios from "axios";

function HomePage() {
  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
    const apiKey = "ad2c28e0345278f3c8b002efddadf28f";
    const apiUrl = `https://api.themoviedb.org/3/movie/latest?api_key=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setLatestMovies(response.data.results);
      })
      .catch((error) => {
        console.error(
          "Erreur lors de la récupération des derniers films :",
          error
        );
      });
  }, []);

  return (
    <div>
      {latestMovies.map((movie) => (
        <div key={movie.id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h3>{movie.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default HomePage;
