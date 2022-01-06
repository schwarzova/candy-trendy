/* eslint-disable @next/next/no-img-element */
import React from 'react';

import styles from './TrendList.module.css';
import { useAppContext } from '../../context/state';

export type Song = {
  img: string;
  title: string;
  artist: string;
  rank: number;
};

type Props = {
  songs: Song[];
};

function MusicCard(props: Props) {
  const { darkMode, showCategories } = useAppContext();

  if (props.songs.length === 0) {
    return null;
  }

  return (
    <a
      href="https://www.aria.com.au/charts/singles-chart"
      className={styles.card}
      target="_blank"
      rel="noreferrer"
      style={{
        background: 'rgb(18, 18, 18)',
        color: '#fff',
        textAlign: 'center',
        fontFamily: 'font-family: monospace',
      }}
    >
      <img
        src="https://www.aria.com.au/images/aria-logo-white.png"
        alt="Aria logo"
        width={80}
        height={30}
      />
      <h2>Top music chart</h2>
      <div style={{ textAlign: 'left' }}>
        {props.songs.map((m, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              marginTop: '10px',
              position: 'relative',
              minHeight: '80px',
            }}
          >
            <img
              src={m.img}
              width={60}
              height={60}
              alt={m.title}
              style={{ marginRight: '5px' }}
            />
            <div>
              <p style={{ lineHeight: 'normal' }}>
                <div
                  style={{
                    padding: '3px',
                    textAlign: 'center',
                    marginRight: '5px',
                    borderRadius: '5px',
                    backgroundColor: '#1db954',
                    color: '#fff',
                    fontSize: '10px',
                    width: '180px',
                  }}
                >
                  {'#'}
                  {m.rank}
                </div>
                <span style={{ fontSize: '14px' }}>{m.title}</span>
                <div style={{ fontSize: '10px' }}>{m.artist}</div>
              </p>
            </div>
          </div>
        ))}
      </div>
      {showCategories && <div className={styles.categories}>#music #fun</div>}
      <div className={darkMode ? styles.sourceLinkDark : styles.sourceLink}>
        <a
          href="https://www.aria.com.au/charts/singles-chart"
          target="_blank"
          rel="noreferrer"
        >
          https://www.aria.com.au/charts/singles-chart
        </a>
      </div>
    </a>
  );
}

export default MusicCard;
