import React,{useEffect,useState} from 'react'
import "./css/Row.css"


function Zeerow({ title, isLargeRow,data }) {
    const [trailerUrl, setTrailerUrl] = useState("")

    
      const handleClick = (movie) => {
        console.log(movie)
        if(!trailerUrl){
            if(movie.youtube){
                setTrailerUrl(movie.youtube)
              }
        }else{
        setTrailerUrl('')
        }
      }
      console.log(trailerUrl);
  return (
    <div className="row">
    <h4>{title}</h4>
    <div className="row-posters">
      {data?.map(movie => (
        <img key={movie.image}
          onClick={() => handleClick(movie)}
          className={`row-poster ${isLargeRow && "row-posterlarge"}`} //1st row of tending now so that the extra classname is added
          src={movie.image} alt={movie.name} />
      ))}
    </div>
    {trailerUrl && <iframe src={`${trailerUrl}?autoplay=1`}  allow="autoplay" width="100%" height="390"/>}
  </div>
)
}

export default Zeerow