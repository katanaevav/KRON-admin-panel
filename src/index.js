import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/app.jsx";

const PromoMovie = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`,
};

ReactDOM.render(
    <App
      promoMovieTitle = {PromoMovie.title}
      promoMovieGenre = {PromoMovie.genre}
      promoMovieYear = {PromoMovie.year}
    />,
    document.querySelector(`.user-page`)
);