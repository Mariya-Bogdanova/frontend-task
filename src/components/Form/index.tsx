import { FormEvent, ChangeEvent, KeyboardEvent, useEffect } from 'react';
import axios from 'axios';
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
  setMovies: (movie: IMovie[]) => void;
  inputValue: string;
  setInputValue: (inputValue: string) => void;
}

function Form({ setMovies, inputValue, setInputValue }: IFormProps) {
  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  async function getMovies() {
    let info = await axios<IInfo>('api/discover');
    const res = info.data.items.map((el, i) => ({
      ...el,
      id: new Date().getTime().toString() + i,
    }));
    setMovies(res);
  }

  async function submitHandler(e: FormEvent) {
    e.preventDefault();
    if (inputValue.trim().length === 0) return;
    const time = Math.floor(Math.random() * (1000 - 1) + 1);

    setTimeout(async () => {
      getMovies();
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
      <form className={styles.form}>
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
