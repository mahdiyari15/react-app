import React, {useContext} from 'react';
import { Moviecontext } from '../contexts/MovieContext';

const Navbar = () => {
  const{movies} = useContext(Moviecontext)
    return ( 
        <div className="navbar">
            <h1>My watchlist</h1>
            <p>
                now you can watch
                {` ${movies.length} `}
                in your free time
            </p>
        </div>
     );
}
 
export default Navbar;

