import React from 'react'

export default function MovieApi({movie}) {
  return (
    <div>
      <h3>Nombre de la pelicula: {movie.title}</h3>
      <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} alt="" />
      <p>Fechas de estreno: {movie.release_date}</p>
      <p>Decripcion: {movie.overview}</p>
    </div>
  )
}
