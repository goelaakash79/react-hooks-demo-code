import React, { useState, useEffect } from "react";
import axios from "axios";

function SWMovies() {
  const [number, setNumber] = useState(1);
  const [movie, setMovie] = useState("");

  useEffect(() => {
    async function getDate() {
      const response = await axios.get(`https://swapi.co/api/films/${number}/`);
      setMovie(response.data);
    }
    getDate();
  }, [number]);

  // useEffect(function, condition) -> maps number value in the url and makes a api call only when the number is changed
  // here useEffect will only run the function, when the value/state of the *number* changes

  return (
    <div>
      <h1>Pick a Movie</h1>
      <h4>{movie.title}</h4>
      <p>{movie.opening_crawl}</p>
      <select value={number} onChange={e => setNumber(e.target.value)}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
      </select>
    </div>
  );
}

export default SWMovies;
