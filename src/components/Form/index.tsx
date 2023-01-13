import { FormEvent, ChangeEvent, KeyboardEvent, useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import { IMovie } from '../../models';
import { ReactComponent as LoupeSmall } from '../../images/loupeSmall.svg';
import styles from './form.module.scss';

interface IURL {
  url: string;
}
interface IInfo {
  backgrounds: IURL[];
  items: IMovie[];
}
interface IFormProps {
  inputValue: string;
  setInputValue: (inputValue: string) => void;
  setMovies: (movie: IMovie[]) => void;

  spotlightList: IMovie[];
  setSpotlightList: (movie: IMovie[]) => void;
  spotlightFlag: boolean;
  setSpotlightFlag: (firstValue: boolean) => void;
}

function Form({
  inputValue,
  setInputValue,
  setMovies,

  spotlightList,
  setSpotlightList,
  spotlightFlag,
  setSpotlightFlag,
}: IFormProps) {
  //Данное изменение расстояния между header и form - сделаны по макету.
  //Но смотрятся эти прыжки инпута достаточно странно. Я бы отказалась от данной фичи.
  const marginTopForm = spotlightFlag && !inputValue ? 'ferstMarginTopForm' : 'secondMarginTopForm';

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    setSpotlightFlag(true);
    setMovies(spotlightList);
  }

  async function getMovies(searchValue: string = '') {
    const {
      data: { items },
    } = await axios<IInfo>(`api/discover?searchValue=${searchValue}`);

    //от бэка должен прилетать id в item, список  spotlight и отфильтрованный список:
    // заглушка:
    let filterMovie: IMovie[] = [];
    if (searchValue) {
      filterMovie = items
        .map((el, i) => ({
          ...el,
          titleLoverCase: el.title.toLowerCase(),
          id: new Date().getTime().toString() + i,
        }))
        .filter(({ titleLoverCase }) => titleLoverCase.includes(searchValue));
      setSpotlightFlag(false);
    }

    const res = items.map((el, i) => ({
      ...el,
      id: new Date().getTime().toString() + i,
    }));
    //////////////////////////////////////////////////////////////////
    setInputValue('');
    setMovies(filterMovie.length ? filterMovie : res);
    setSpotlightList(res);
  }

  async function submitHandler(e: FormEvent) {
    e.preventDefault();
    if (inputValue.trim().length === 0) return;
    const searchValue = inputValue.toLowerCase();
    const time = Math.floor(Math.random() * (1000 - 1) + 1);

    setTimeout(async () => {
      getMovies(searchValue);
    }, time);
  }

  function keyPressHandler(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      submitHandler(e);
    }
  }

  useEffect(() => {
    getMovies();
    setSpotlightFlag(true);
  }, []);

  return (
    <>
      <form className={classNames(styles.form, styles[marginTopForm])}>
        <input
          className={styles.input}
          type='search'
          placeholder='Search'
          value={inputValue}
          onChange={changeHandler}
          onKeyDown={keyPressHandler}
        />
        <button type='submit' className={styles.button} onClick={submitHandler}>
          search <LoupeSmall className={styles.loupeSmall} />
        </button>
      </form>
    </>
  );
}
export default Form;
