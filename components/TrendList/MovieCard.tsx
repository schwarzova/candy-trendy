/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

import styles from './TrendList.module.css';
import { useAppContext } from '../../context/state';

export type Movie = {
  img: string;
  title: string;
  rank: number;
  percentage: string;
};

type Props = {
  movies: Movie[];
};

function MovieCard(props: Props) {
  const { darkMode, showCategories } = useAppContext();

  if (props.movies.length === 0) {
    return null;
  }

  return (
    <a
      href="https://editorial.rottentomatoes.com/guide/popular-movies/"
      className={styles.card}
      target="_blank"
      rel="noreferrer"
      style={{ background: '#393939', color: '#fff', textAlign: 'center' }}
    >
      <img
        src="https://staticv2-4.rottentomatoes.com/static/images/logos/rtlogo.png"
        alt="Rotten tomatoes logo"
        width={60}
        height={20}
      />
      <h2>Trending movies</h2>
      <div style={{ textAlign: 'left' }}>
        {props.movies.map((m, i) => (
          <div
            key={i}
            style={{ display: 'flex', marginTop: '10px', position: 'relative' }}
          >
            <img
              src={m.img}
              width={80}
              height={120}
              alt={m.title}
              style={{ marginRight: '10px' }}
            />
            <div>
              <p>
                <span
                  style={{
                    padding: '3px',
                    marginRight: '5px',
                    borderRadius: '5px',
                    backgroundColor: '#fff',
                    color: '#000',
                  }}
                >
                  {'#'}
                  {m.rank}
                </span>
                {m.title}
              </p>
              <p style={{ position: 'absolute', bottom: 0 }}>{m.percentage}</p>
            </div>
          </div>
        ))}
      </div>
      {showCategories && <div className={styles.categories}>#movies #fun</div>}
      <div className={darkMode ? styles.sourceLinkDark : styles.sourceLink}>
        <a
          href="https://www.rottentomatoes.com/"
          target="_blank"
          rel="noreferrer"
        >
          https://www.rottentomatoes.com/
        </a>
      </div>
    </a>
  );
}

export default MovieCard;
