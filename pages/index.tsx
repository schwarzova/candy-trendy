import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import MainBox from '../components/MainBox/MainBox';
import styles from '../styles/Home.module.css';
import cheerio from 'cheerio';
import axios, { Method } from 'axios';
import TrendList from '../components/TrendList/TrendList';
import { Movie } from '../components/TrendList/MovieCard';
import { useAppContext } from '../context/state';
import { Game } from '../components/TrendList/GameCard';
import { Song } from '../components/TrendList/MusicCard';

type Props = {
  lastScraped: string;
  jokes: string[];
  movies: Movie[];
  games: Game[];
  songs: Song[];
};

const Home = (props: Props) => {
  const { darkMode } = useAppContext();
  const [filteredCategories, setFilteredCategories] = useState<string[]>([]);

  return (
    <div className={darkMode ? styles.containerDark : styles.container}>
      <Head>
        <title>Candy Trendy</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Trending on the internet. What's new on social media, movies, games, sport, music etc."
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preload"
          href="/fonts/JeanSunHo.woff"
          as="font"
          crossOrigin=""
        />
      </Head>

      <main className={styles.main}>
        <p>Last scraped: {props.lastScraped}</p>
        <MainBox onCategoriesFilter={setFilteredCategories} />
        <TrendList
          filteredCategories={filteredCategories}
          games={props.games}
          jokes={props.jokes}
          movies={props.movies}
          songs={props.songs}
        />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
};

export default Home;

export const getStaticProps: GetStaticProps = async () => {
  const { data: jokesData } = await axios.get(
    'http://www.laughfactory.com/jokes/latest-jokes'
  );
  let $ = cheerio.load(jokesData);
  const jokes = $('.joke-text p')
    .toArray()
    .map((x) => $(x).text());

  const { data: moviesData } = await axios.get(
    'https://editorial.rottentomatoes.com/guide/popular-movies/'
  );
  $ = cheerio.load(moviesData);

  const movies = $('.countdown-item')
    .toArray()
    .map((x, i) => ({
      img: $(x).find('.article_poster').attr('src'),
      title: $(x).find('.article_movie_title a').text(),
      percentage: $(x).find('.tMeterScore').text(),
      rank: i + 1,
    }));

  const { data: gamesData } = await axios.get(
    'https://twitchtracker.com/games'
  );
  $ = cheerio.load(gamesData);
  const games = $('.ranked-item')
    .toArray()
    .map((x, i) => ({
      img: $(x).find('.ri-image img').attr('src'),
      title: $(x).find('.ri-name a').text(),
      rank: i + 1,
    }));

  const { data: musicData } = await axios.get(
    'https://www.aria.com.au/charts/singles-chart'
  );
  console.log('musicData', musicData);
  $ = cheerio.load(musicData);
  const songs = $('.c-chart-item')
    .toArray()
    .map((x, i) => ({
      img: $(x).find('img').attr('data-src'),
      title: $(x).find('.c-chart-item__title').text(),
      artist: $(x).find('.c-chart-item__artist').text(),
      rank: i + 1,
    }));

  const lastScraped = new Date().toISOString();
  return {
    props: { jokes, lastScraped, movies, games, songs },
    revalidate: 3600, // rerun after 1 hour
  };
};
