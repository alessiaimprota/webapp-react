import CardMovie from "../components/CardMovie";
import axios from "axios";
import { useState, useEffect } from "react";
const endpoint = "http://localhost:3000/movies/";

const Homepage = () => {
  //variabile di stato per settare i film
  const [movies, setMovies] = useState([]);

  //funzione chiamata be
  const fetchMovies = () => {
    axios
      .get(endpoint)
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //use effect per richiamare la funzione al montaggio della pagina
  useEffect(fetchMovies, []);

  const renderMovies = () => {
    return movies.map((movie) => (
      <div key={movie.id}>
        <CardMovie movieProp={movie} />
      </div>
    ));
  };

  return <div className="container">{renderMovies()}</div>;
};

export default Homepage;
