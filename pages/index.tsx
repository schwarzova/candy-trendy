import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { useState } from 'react';
import MainBox from '../components/MainBox/MainBox';
import styles from '../styles/Home.module.css';
import cheerio from 'cheerio';
import axios from 'axios';
import TrendList from '../components/TrendList/TrendList';
import { Movie } from '../components/TrendList/MovieCard';
import { useAppContext } from '../context/state';
import { Game } from '../components/TrendList/GameCard';
import { Song } from '../components/TrendList/MusicCard';
import { NetflixMovie } from '../components/TrendList/NetflixCard';
import { Meme } from '../components/TrendList/MemeCard';
import { Quote } from '../components/TrendList/MotivationCard';

type Props = {
  games: Game[];
  jokes: string[];
  lastScraped: string;
  memes: Meme[];
  motivations: Quote[];
  movies: Movie[];
  netflixMovies: NetflixMovie[];
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
        <MainBox
          lastScraped={props.lastScraped}
          onCategoriesFilter={setFilteredCategories}
        />
        <TrendList
          filteredCategories={filteredCategories}
          games={props.games}
          jokes={props.jokes}
          memes={props.memes}
          motivations={props.motivations}
          movies={props.movies}
          netflixMovies={props.netflixMovies}
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
  function getRandomMotivations(day: number) {
    if (day === 0) return 0;
    if (day === 1) return 20;
    if (day === 2) return 40;
    if (day === 3) return 60;
    if (day === 4) return 0;
    if (day === 5) return 40;
    if (day === 6) return 20;

    return 0;
  }

  const axiosOptions = {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
    },
  };

  const { data: jokesData } = await axios.get(
    'https://www.laughfactory.com/jokes/latest-jokes',
    axiosOptions
  );
  let $ = cheerio.load(jokesData);
  const jokes = $('.joke-text p')
    .toArray()
    .map((x) => $(x).text());

  const { data: moviesData } = await axios.get(
    'https://editorial.rottentomatoes.com/guide/popular-movies/',
    axiosOptions
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

  let gamesData;

  try {
    gamesData = await axios.get(
      'https://www.twitchmetrics.net/games/viewership'
    );
  } catch (error) {}

  $ = cheerio.load(gamesData?.data);
  const games = $('.media')
    .toArray()
    .map((x, i) => ({
      img: $(x).find('.rounded').attr('src'),
      title: $(x).find('h5').text(),
      rank: i + 1,
    }));

  const { data: musicData } = await axios.get(
    'https://www.aria.com.au/charts/singles-chart',
    axiosOptions
  );
  $ = cheerio.load(musicData);
  const songs = $('.c-chart-item')
    .toArray()
    .map((x, i) => ({
      img: $(x).find('img').attr('data-src'),
      title: $(x).find('.c-chart-item__title').text(),
      artist: $(x).find('.c-chart-item__artist').text(),
      rank: i + 1,
    }));

  const { data: netflixData } = await axios.get(
    'https://flixpatrol.com/top10/netflix/',
    axiosOptions
  );
  $ = cheerio.load(netflixData);
  const netMovies = $('.table-group').toArray().slice(0, 20);
  const netflixMovies = netMovies.map((x, i) => ({
    img:
      'https://flixpatrol.com' + $(x).find('.table-poster-1 img').attr('src'),
    title: $(x).find('a').text(),
    rank: i + 1,
  }));

  const { data: memesData } = await axios.get('https://me.me/t/funny');
  $ = cheerio.load(memesData);
  const memes = $('.thumbnail')
    .toArray()
    .map((x) => ({
      img: $(x).attr('data-src'),
    }));

  const { data: motivationData } = await axios.get(
    'https://blog.hubspot.com/sales/famous-quotes',
    axiosOptions
  );
  $ = cheerio.load(motivationData);
  const mot = $('p')
    .toArray()
    .map((x, i) => ({
      quote: $(x).text(),
      author: '',
    }));
  const motivations = mot.slice(7, 113);

  const today = new Date();
  const time = `${today.getHours()}:${
    today.getMinutes() < 10 ? `0${today.getMinutes()}` : today.getMinutes()
  }`;
  const day = today.getDay();
  const startMot = getRandomMotivations(day);

  return {
    props: {
      jokes,
      lastScraped: time,
      movies,
      games,
      songs,
      netflixMovies: [
        ...netflixMovies.slice(10, 15),
        ...netflixMovies.slice(0, 5),
        ...netflixMovies.slice(15, 20),
        ...netflixMovies.slice(5, 10),
      ],
      memes,
      motivations: [...motivations.slice(startMot, startMot + 40)],
    },
    revalidate: 3600, // rerun after 1 hour
  };
};
