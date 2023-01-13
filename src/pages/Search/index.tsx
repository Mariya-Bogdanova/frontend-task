import { useState } from 'react';
import Form from '../../components/Form';
import CarouselMovies from '../../components/CarouselMovies';
import { IMovie } from '../../models';
import styles from './search.module.scss';

function Search() {
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState<IMovie[]>([]);

  const [spotlightList, setSpotlightList] = useState<IMovie[]>([]);
  const [spotlightFlag, setSpotlightFlag] = useState(false);

  return (
    <>
      <div className={styles.searchConteiner}>
        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          setMovies={setMovies}
          spotlightList={spotlightList}
          setSpotlightList={setSpotlightList}
          spotlightFlag={spotlightFlag}
          setSpotlightFlag={setSpotlightFlag}
        />
        {spotlightFlag && !inputValue && <div className={styles.spotlight}>in the spotlight</div>}

        {!inputValue && <CarouselMovies movies={movies} />}
      </div>
    </>
  );
}

export default Search;
