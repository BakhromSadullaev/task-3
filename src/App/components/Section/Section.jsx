import React from "react";
import MovieCard from "./components/MovieCard/MovieCard";
import style from "./Section.module.scss";

const Section = () => {
  return (
    <div className={style.body}>
      <div className={style.tab}>
        <div className={style.categories}>
          <ul>
            <li>ALL</li>
            <li>DOCUMENTARY</li>
            <li>COMEDY</li>
            <li>HORROR</li>
            <li>CRIME</li>
          </ul>
        </div>
        <div className={style.sort}>
          <p>SORT BY</p>

          <select name="" id="">
            <option value="" selected disabled>
              RELEASE DATE
            </option>
          </select>
        </div>
      </div>

      <h3 className={style.found}>39 movies found</h3>

      <div className={style.moviesContainer}>
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </div>
    </div>
  );
};

export default Section;
