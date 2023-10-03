import React, { useState, useEffect } from "react";
import axios from "axios";
import "../component/HomePage.css";

function HomePage() {
  const [latestMovies, setLatestMovies] = useState([]);

  useEffect(() => {
    const apiKey = "54554e95bb46735def4b573f24900c6c";
    const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}`;

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

  <h3 className="title">Les films</h3>
    <div className="movieContainer">

      {latestMovies.map((movie) => (
        <div key={movie.id} className="movieContent">
          <img
            className="imageMovie"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <h3 className="titleMovie">{movie.title}</h3>
        </div>
      ))}
      </div>
        </div>
  );
}

export default HomePage;
