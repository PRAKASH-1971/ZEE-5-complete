import React, { useState, useEffect } from 'react'
import axios from './axios';
import "./css/Row.css"
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

const base_url = "https://image.tmdb.org/t/p/original/"

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("")

  useEffect(() => {
    // if [], run once when the row loads,and dont run again
    // if [movies], run once and run everytime when the movie changes
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      // console.log(request.data.results);
      setMovies(request.data.results)
      return request;
    }
    fetchData()
  }, [fetchUrl]);
  // console.log(movies)

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    console.table(movie?.title)
    if (trailerUrl) {
      setTrailerUrl('')
    } else {
      movieTrailer(movie?.title || movie?.name)
        .then(url => {
          // https://www.youtube.com/watch?v=XtMThy8QKqU
          const urlParams = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
          console.log(urlParams)
        }).catch((error) => console.log(error));
    }
  }

  return (
    <div className="row">
      <h4>{title}</h4>
      <div className="row-posters">
        {movies.map(movie => (
          <img key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row-poster ${isLargeRow && "row-posterlarge"}`} //1st row of tending now so that the extra classname is added
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name} />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  )
}

export default Row;
