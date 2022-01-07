import React from 'react';
import Image from 'next/image';

import styles from './TrendList.module.css';
import { useAppContext } from '../../context/state';

export type Quote = {
  quote: string;
  author: string;
};

type Props = {
  quote?: Quote;
};

function MotivationCard(props: Props) {
  const { darkMode, showCategories } = useAppContext();

  if (
    !props.quote ||
    props.quote.quote[0] === '—' ||
    props.quote.quote[0] === 'R'
  ) {
    return null;
  }

  return (
    <a
      className={styles.card}
      style={{
        background: '#000',
        color: '#fff',
        textAlign: 'center',
        fontFamily: '"Times New Roman", Times, serif',
        fontSize: '16px',
      }}
    >
      <Image
        src="/images/motivation.jpg"
        alt="Motivation background image"
        layout="fill"
      />
      <Image src="/images/pepeSun.png" alt="Pepe logo" width={30} height={20} />
      <div
        style={{
          background: '#fff',
          color: '#000',
          padding: '10px',
          position: 'absolute',
          left: 0,
          margin: '10px',
          borderRadius: '10px',
          opacity: 0.7,
          width: 'calc(100% -  20px)',
        }}
      >
        <h2>Motivation</h2>
        <p style={{ fontSize: '16px' }}>{props.quote.quote}</p>
      </div>

      {showCategories && <div className={styles.categories}>#motivation</div>}
      <div className={darkMode ? styles.sourceLinkDark : styles.sourceLink}>
        <span></span>
      </div>
    </a>
  );
}

export default MotivationCard;
