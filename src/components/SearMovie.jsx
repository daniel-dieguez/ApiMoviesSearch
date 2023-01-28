import React, { useEffect, useState } from 'react'
import MovieApi from './MovieApi';


 

export default function SearMovie() {

  const [peliculas, setPeliculas] = useState ([]);

  const searchMovie = async () => {

    const APIKEY = `80be14870d96859ef59df5c01818d973`;
    const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${APIKEY}&language=en-US&page=1`;
    const data = await fetch(URL);
    const movie = await data.json();
    setPeliculas(movie.results);
    
  }

  useEffect(() => {
    searchMovie();
    
  }, [])
  
  return (
    <div>
    <h3>Peliculas Populares</h3>
    <div>
    {peliculas.map((movie)=>{
          return <MovieApi key={movie.id} movie={movie}></MovieApi>
        })}
    </div>
    </div>
  )
}
