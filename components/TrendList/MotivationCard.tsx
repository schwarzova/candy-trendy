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

  if (!props.quote) {
    return null;
  }

  const simpleQuote = props.quote.quote.split('"');

  if (!simpleQuote || simpleQuote.length < 3) {
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
      <div style={{ borderRadius: '10px' }}>
        <Image
          src="/images/motivation.jpg"
          alt="Motivation background image"
          layout="fill"
          className={styles.bgImage}
        />
      </div>
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
        <p style={{ fontSize: '16px' }}>{`"${simpleQuote[1]}"`}</p>
        {simpleQuote[2] && (
          <p style={{ color: 'blue' }}>{simpleQuote[2].slice(2)}</p>
        )}
      </div>

      {showCategories && <div className={styles.categories}>#motivation</div>}
      <div className={darkMode ? styles.sourceLinkDark : styles.sourceLink}>
        <span></span>
      </div>
    </a>
  );
}

export default MotivationCard;
