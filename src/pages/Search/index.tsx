import { useState } from 'react';
import Form from '../../components/Form';
import MovieList from '../../components/MovieList';
import { IMovie } from '../../models';
import styles from './search.module.scss';

function Search() {
  const [movies, setMovies] = useState<IMovie[]>([]);

  return (
    <>
      <div className={styles.searchConteiner}>
        <Form setMovies={setMovies} />
        <MovieList movies={movies} />
      </div>
    </>
  );
}

export default Search;
