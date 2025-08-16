import MovieForm from './components/MovieForm';
import MovieList from './components/MovieList';
import Navbar from './components/Navbar';
import MovieContextProvider from './contexts/MovieContext';

function App() {
  return (
    <div className="App">
      <MovieContextProvider>
        <Navbar/>
        <MovieList/>
        <MovieForm/>
      </MovieContextProvider>
    </div>
  );
}

export default App;

// to run code we should type "set NODE_OPTIONS=--openssl-legacy-provider" and after that "npm start"
