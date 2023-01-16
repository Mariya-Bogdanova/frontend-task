import { useState } from 'react';
import Form from '../../components/Form';
import CarouselMovies from '../../components/CarouselMovies';
import { IMovie, IChannel } from '../../models';
import styles from './search.module.scss';

function Search() {
  const [inputValue, setInputValue] = useState('');
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [channels, setChannels] = useState<IChannel[]>([]);
  const [spotlightList, setSpotlightList] = useState<IMovie[]>([]);
  //отрисовка первого экрана с низким инпутом и пустым экраном под первым поиском.
  const [firstScreen, setFirstScreen] = useState(true);
  //отрисовка второго экрана: карусели по поиску или сбросу поиска
  const [secondScreen, setSecondScreen] = useState(false);
  //флаг отрисовки spotlight или movies:
  const [spotlightFlag, setSpotlightFlag] = useState(true);

  return (
    <>
      <div className={styles.searchConteiner}>
        <Form
          inputValue={inputValue}
          setInputValue={setInputValue}
          setMovies={setMovies}
          setChannels={setChannels}
          setSpotlightList={setSpotlightList}
          firstScreen={firstScreen}
          setFirstScreen={setFirstScreen}
          secondScreen={secondScreen}
          setSecondScreen={setSecondScreen}
          setSpotlightFlag={setSpotlightFlag}
        />
        {(firstScreen || (secondScreen && spotlightFlag)) && <div className={styles.spotlight}>in the spotlight</div>}
        {(firstScreen || secondScreen) && <CarouselMovies movies={spotlightFlag ? spotlightList : movies} />}

        {/* <div className={styles.shows}>{`All(23) `}</div> */}
        {<CarouselMovies channels={channels} />}
      </div>
    </>
  );
}

export default Search;
