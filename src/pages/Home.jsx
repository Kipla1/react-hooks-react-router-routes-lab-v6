import { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import NavBar from '../components/NavBar';

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/movies')
      .then(r => r.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <>
      <NavBar />
      <h1>Home Page</h1>
      <main>
        {movies.map(movie => (
          <MovieCard 
            key={movie.id} 
            movie={movie}
            id={movie.id} // Make sure to pass the id
          />
        ))}
      </main>
    </>
  );
}

export default Home;