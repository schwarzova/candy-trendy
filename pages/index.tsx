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

type Props = {
  lastScraped: string;
  jokes: string[];
  movies: Movie[];
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
          jokes={props.jokes}
          movies={props.movies}
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

export const getStaticProps: GetStaticProps = async (context) => {
  const { data } = await axios.get(
    'http://www.laughfactory.com/jokes/latest-jokes'
  );
  let $ = cheerio.load(data);
  const jokes = $('.joke-text p')
    .toArray()
    .map((x) => $(x).text());

  const { data: tata } = await axios.get(
    'https://editorial.rottentomatoes.com/guide/popular-movies/'
  );
  $ = cheerio.load(tata);
  const moviesImg = $('.article_poster')
    .toArray()
    .map((x) => $(x).attr('src'));
  const moviesTitle = $('.article_movie_title a')
    .toArray()
    .map((x) => $(x).text());
  const moviesPercentage = $('.tMeterScore')
    .toArray()
    .map((x) => $(x).text());

  const movies = moviesImg.map((img, i) => ({
    img,
    title: moviesTitle[i],
    percentage: moviesPercentage[i],
    rank: i,
  }));

  const lastScraped = new Date().toISOString();
  return {
    props: { jokes, lastScraped, movies },
    revalidate: 3600, // rerun after 1 hour
  };
};
