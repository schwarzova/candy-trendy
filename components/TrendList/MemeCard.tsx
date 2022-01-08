/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';

import styles from './TrendList.module.css';
import { useAppContext } from '../../context/state';

export type Meme = {
  img: string;
};

type Props = {
  meme?: Meme;
};

function MemeCard(props: Props) {
  const { darkMode, showCategories } = useAppContext();

  if (!props.meme || !props.meme.img) {
    return null;
  }

  return (
    <a
      href="https://me.me/?s=new"
      className={styles.card}
      target="_blank"
      rel="noreferrer"
      style={{ background: '#987654', color: 'yellow', textAlign: 'center' }}
    >
      <div style={{ marginTop: '-10px', marginBottom: '10px' }}>
        <Image src="/images/meme.png" alt="Meme logo" width={100} height={40} />
      </div>
      <div>
        <img src={props.meme.img} width={240} height={240} alt="Meme image" />
      </div>
      {showCategories && <div className={styles.categories}>#jokes #fun</div>}
      <div className={darkMode ? styles.sourceLinkDark : styles.sourceLink}>
        <span>https://me.me/?s=new</span>
      </div>
    </a>
  );
}

export default MemeCard;
