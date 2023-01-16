import { FormEvent, ChangeEvent, KeyboardEvent, useEffect } from 'react';
import axios from 'axios';
import classNames from 'classnames';
import { transformeResponse } from '../../utils/transformeResponse';
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
  setChannels: (channel: IMovie[]) => void;
  setSpotlightList: (movie: IMovie[]) => void;

  firstScreen: boolean;
  setFirstScreen: (firstScreen: boolean) => void;
  secondScreen: boolean;
  setSecondScreen: (secondScreen: boolean) => void;
  setSpotlightFlag: (firstValue: boolean) => void;
}

function Form({
  inputValue,
  setInputValue,
  setMovies,
  setChannels,
  setSpotlightList,

  firstScreen,
  setFirstScreen,
  secondScreen,
  setSecondScreen,
  setSpotlightFlag,
}: IFormProps) {
  const marginTopForm = firstScreen ? 'ferstMarginTopForm' : 'secondMarginTopForm';

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    if (secondScreen === false && e.target.value.length === 0) {
      setSecondScreen(true);
    }
    if (e.target.value.length === 0) {
      setSpotlightFlag(true);
    }
  }

  async function getMovies(searchValue: string = '') {
    const {
      data: { items },
    } = await axios<IInfo>(`api/discover?searchValue=${searchValue}`);
    const [res, filterChannel, filterMovie] = transformeResponse(items, searchValue, setSpotlightFlag);

    setMovies(filterMovie);
    setChannels(filterChannel);
    setSpotlightList(res);
  }

  async function submitHandler(e: FormEvent) {
    e.preventDefault();
    if (inputValue.trim().length === 0) return;
    const searchValue = inputValue.toLowerCase();
    const time = Math.floor(Math.random() * (1000 - 1) + 1);
    setSecondScreen(true);

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
          onFocus={() => setFirstScreen(false)}
        />
        <button type='submit' className={styles.button} onClick={submitHandler}>
          search <LoupeSmall className={styles.loupeSmall} />
        </button>
      </form>
    </>
  );
}
export default Form;
