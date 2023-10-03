import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from "react";

import HomePage from "../component/HomePage";
import MovieDetail from "../component/MovieDetailPage";
import MovieList from "../component/MovieList";
import MovieSuggestion from "../component/MovieSuggestions";

export default function Navigation() {
  return (
    <Router>
      <div className="navigation_main_container">
        <main className="navigation_container">
          <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/movie-detail" element={<MovieDetail />} />
            <Route exact path="/movie-list" element={<MovieList />} />
            <Route exact path="/movie-suggestion" element={<MovieSuggestion />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}