import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <h2>{movie.title}</h2>
      <Link to={`/movie/${movie.id}`}>View Info</Link>
    </div>
  );
}

export default MovieCard;