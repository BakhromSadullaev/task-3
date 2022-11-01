import React from "react";
import style from "./MovieCard.module.scss";

const MovieCard = () => {
  return (
    <article className={style.body}>
      <img
        src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/bohemian-rhapsody-web.jpg"
        alt=""
      />
      <div className={style.movieInfo}>
        <div className={style.movieName}>
          <h4>Pulp Fiction</h4>
          <p>2003</p>
        </div>
        <p className={style.type}>Drama, Biography, Music</p>
      </div>
    </article>
  );
};

export default MovieCard;
