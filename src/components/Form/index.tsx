import { useState, FormEvent, ChangeEvent, KeyboardEvent } from 'react';
import axios from 'axios';
import { ReactComponent as LoupeSmall } from '../../images/loupeSmall.svg';
import styles from './form.module.scss';
import { IMovie } from '../../models';

interface IURL {
  url: string;
}
interface IInfo {
  backgrounds: IURL[];
  items: IMovie[];
}

interface IFormProps {
  setMovies: (movie: IMovie[]) => void;
}

function Form({}: IFormProps) {
  const [inputValue, setInputValue] = useState('');

  function changeHandler(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
  }

  async function submitHandler(e: FormEvent) {
    e.preventDefault();
    const res = await axios<IInfo>('api/discover');
    console.log(777, res.data);
  }

  function keyPressHandler(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      submitHandler(e);
    }
  }

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
