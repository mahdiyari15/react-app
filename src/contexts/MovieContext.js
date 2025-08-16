import React, { createContext, useState, useReducer, useEffect } from 'react';
import { movieReducer } from '../reducers/movieReducer';


export const Moviecontext = createContext();

const MovieContextProvider = (props) => {
    const [movies, dispatch] = useReducer(movieReducer, [], ()=>{
        const data = localStorage.getItem('movies');
        return data ? JSON.parse(data) : []
    })
    useEffect(()=>{
        localStorage.setItem('movies', JSON.stringify(movies) )
    }, [movies])
    return (
        <Moviecontext.Provider value={{ movies, dispatch }}>
            {props.children}
        </Moviecontext.Provider>
    );
}

export default MovieContextProvider;