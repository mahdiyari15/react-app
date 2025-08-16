import { v4 as uuid } from 'uuid';
export const movieReducer=(state, action)=>{
    switch(action.type){
        case 'ADD_MOVIE':
            return [...state,{
                title:action.movie.title,
                director:action.movie.director,
                year:action.movie.year,
                genre:action.movie.genre,
                id:uuid()
            }]

        case 'REMOVE_MOVIE':
            return state.filter(movie => movie.id !== action.id)
        default:
            return state
    }
}