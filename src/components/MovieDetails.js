import React, {useContext} from 'react';
import { Moviecontext } from '../contexts/MovieContext';

const MovieDetail = ({movie}) => {
    const {dispatch} = useContext(Moviecontext);
    return ( 
        <li onClick={()=>dispatch({type:'REMOVE_MOVIE', id:movie.id})}>
            <div className="title">{movie.title}</div>
            <div className="director" >{movie.director}</div>
            <div className='year'>{movie.year}</div>
            <div className='genre'>{movie.genre}</div>
        </li>
     );
}
 
export default MovieDetail;


////