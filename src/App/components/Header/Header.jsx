import React from "react";
import style from "./Header.module.scss";

const Header = () => {
  return (
    <div className={style.body}>
      <nav>
        <h2>NETFLIXROULETTE</h2>
        <button>+ ADD MOVIE</button>
      </nav>

      <main>
        <h1>FIND YOUR MOVIE</h1>

        <div className={style.searchBar}>
          <input type="text" placeholder="What do you want to search ?" />
          <button>SEARCH</button>
        </div>
      </main>
    </div>
  );
};

export default Header;
