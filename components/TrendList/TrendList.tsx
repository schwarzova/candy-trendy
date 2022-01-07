import React from 'react';
import Image from 'next/image';

import styles from './TrendList.module.css';
import JokeCard from './JokeCard';
import MovieCard, { Movie } from './MovieCard';
import GameCard, { Game } from './GameCard';
import MusicCard, { Song } from './MusicCard';
import NetflixCard, { NetflixMovie } from './NetflixCard';
import MemeCard, { Meme } from './MemeCard';
import MotivationCard, { Quote } from './MotivationCard';

type Props = {
  filteredCategories: string[];
  games: Game[]; // 20
  jokes: string[]; //12
  memes: Meme[]; //74
  motivations: Quote[]; //100
  movies: Movie[]; //30
  netflixMovies: NetflixMovie[]; // 0 - 4, 10 - 14 shows // 5 - 9, 15 - 19 movies;
  songs: Song[]; //50
};

function TrendList(props: Props) {
  let games: Game[] = [];
  let jokes: string[] = [];
  let memes: Meme[] = [];
  let movies: Movie[] = [];
  let motivations: Quote[] = [];
  let netflixMovies: NetflixMovie[] = [];
  let songs: Song[] = [];

  const showAll = props.filteredCategories.length === 0;
  const showFun = props.filteredCategories.includes('fun');

  const showGames = showFun || props.filteredCategories.includes('games');
  const showJokes = showFun || props.filteredCategories.includes('jokes');
  const showMovies = showFun || props.filteredCategories.includes('movies');
  const showSongs = showFun || props.filteredCategories.includes('music');
  const showMotivations = props.filteredCategories.includes('motivation');

  games = showAll || showGames ? props.games : [];
  jokes = showAll || showJokes ? props.jokes : [];
  memes = showAll || showJokes ? props.memes : [];
  movies = showAll || showMovies ? props.movies : [];
  motivations = showAll || showMotivations ? props.motivations : [];
  netflixMovies = showAll || showMovies ? props.netflixMovies : [];
  songs = showAll || showSongs ? props.songs : [];

  const loopCount = 50;
  let three = 0;
  let two = 0;

  let cardLoops: React.ReactNode[] = [];

  for (let i = 0; i < loopCount; i++) {
    const songsProp =
      songs.length > 0
        ? [songs[three], songs[three + 1], songs[three + 2]]
        : [];
    const moviesProp = movies.length > 0 ? [movies[two], movies[two + 1]] : [];
    const movieProp = netflixMovies.length > 0 ? netflixMovies[i] : undefined;
    const gamesProp = games.length > 0 ? [games[two], games[two + 1]] : [];

    const cardLoop = (
      <React.Fragment key={i}>
        <MusicCard songs={songsProp} />
        <JokeCard joke={jokes[i] || ''} />
        <MovieCard movies={moviesProp} />
        <MemeCard meme={memes[i] || undefined} />
        <NetflixCard isShow={i < 5 || (i > 9 && i < 15)} movie={movieProp} />
        <MotivationCard quote={motivations[i] || undefined} />
        <GameCard games={gamesProp} />
      </React.Fragment>
    );
    cardLoops = [...cardLoops, cardLoop];

    three = three + 3;
    two = two + 2;
  }

  return <div className={styles.grid}>{cardLoops.map((loop) => loop)}</div>;
}

export default TrendList;
