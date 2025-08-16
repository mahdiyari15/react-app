import React, {useContext} from 'react';
import { Moviecontext } from '../contexts/MovieContext';
import MovieDetail from './MovieDetails';

const MovieList = () => {
   const{movies} = useContext(Moviecontext)
    return movies.length?(
        <div className="movie-list">
            <ul>
                {movies.map(movie=>{
                    return(
                        <MovieDetail key={movie.id} movie={movie} />
                    )
                })}
            </ul>
        </div> 
     ):
     (<div className="empty">!You don't have any movies to watch so better cal me</div>)
}
export default MovieList;