import React from 'react';
import Image from 'next/image';

import styles from './TrendList.module.css';
import { useAppContext } from '../../context/state';

type Props = {
  joke: string;
};

function JokeCard(props: Props) {
  const { darkMode, showCategories } = useAppContext();

  if (!props.joke) {
    return null;
  }

  return (
    <a
      href="http://www.laughfactory.com/jokes/latest-jokes"
      className={styles.card}
      target="_blank"
      rel="noreferrer"
      style={{
        background: '#00008B',
        color: '#fff',
        textAlign: 'center',
        fontFamily: '"Comic Sans MS", "Comic Sans", cursive',
      }}
    >
      <div style={{ opacity: '0.2' }}>
        <Image
          src="/images/jokes.jpeg"
          alt="Emoji background image"
          layout="fill"
        />
      </div>
      <Image
        src="http://cdn.laughfactory.com/images/project-images/logo.png"
        alt="Laugh factory logo"
        width={60}
        height={50}
      />
      <h2>Joke</h2>
      <p>{props.joke}</p>
      {showCategories && <div className={styles.categories}>#jokes #fun</div>}
      <div className={darkMode ? styles.sourceLinkDark : styles.sourceLink}>
        <span>http://www.laughfactory.com/</span>
      </div>
    </a>
  );
}

export default JokeCard;
