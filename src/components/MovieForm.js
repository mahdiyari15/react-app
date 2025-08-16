import React, { useState, useContext } from 'react';
import { Moviecontext } from '../contexts/MovieContext';

const MovieForm = () => {
    const [title, setTitle] = useState('');
    const [director, setDirector] = useState('');
    const [year, setYear] = useState('');
    const [genre, setGenre] = useState('');
    const { dispatch } = useContext(Moviecontext);
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({type:'ADD_MOVIE', movie:{
            title,director,year,genre
        }})
        setTitle('');
        setDirector('');
        setYear('');
        setGenre('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="movie`s name" value={title} required
                onChange={(e) => setTitle(e.target.value)} />
            <input type="text" placeholder="director`s name" value={director} required
                onChange={(e) => setDirector(e.target.value)} />
            <input type="text" placeholder="year of production" value={year} required
                onChange={(e) => setYear(e.target.value)} />
            <input type="text" placeholder="genre" value={genre} required
                onChange={(e) => setGenre(e.target.value)} />
            <input type="submit" value="submit" />
        </form>
    );
}

export default MovieForm;