import { useState, useEffect } from "react";
import "./films.page.css";
import { filterFilmsByDirector, getListOf } from "../helpers/film.helpers.js";
import { Link } from "react-router-dom";


function FilmsPage() {
  const [films, setFilms] = useState([]);
  const [searchDir, setSearchDir] = useState("");

  useEffect(() => {
    fetch("https://studioghibliapi-d6fc8.web.app/films")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setFilms(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  const filteredFilms = filterFilmsByDirector(films, searchDir);

  const allDirs = getListOf(films, "director");

  return (
    <>
      <h1>Studio Ghibli Films</h1>
      <p>Created By: David Michael</p>
      <form >
        <div className="form-group">
          <label htmlFor="">Select Movie Director</label>
          <select
            name="dirSelect"
            id="dirSelect"
            value={searchDir}
            onChange={(event) => {
              setSearchDir(event.target.value);
            }}
          >
            <option value="">All</option>
            {/*<option value="Hayao Miyazaki">Hayao Miyazaki</option>*/}

            {allDirs.map((dir) => {
              return <option key={dir.id} value={dir}>{dir}</option>
            })}

          </select>
        </div>
      </form>
      <ul>


        {filteredFilms.map((film) => {
          return (
            <li key={film.id}>
              <div className="movie-left">
                <h2>{film.title}</h2>
                <img src={film.image} alt={`${film.title} banner`} />
              </div>

              <div className="movie-right">
                <p>{film.description}</p>
                <p>
                  {film.running_time}m - Rotten Tomatoes: {film.rt_score}%
                </p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default FilmsPage;
