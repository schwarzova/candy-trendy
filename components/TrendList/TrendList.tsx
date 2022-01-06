import React from 'react';
import Image from 'next/image';

import styles from './TrendList.module.css';
import JokeCard from './JokeCard';
import MovieCard, { Movie } from './MovieCard';
import GameCard, { Game } from './GameCard';

type Props = {
  filteredCategories: string[];
  games: Game[]; // 20
  jokes: string[]; //11
  movies: Movie[]; //30
};

function TrendList(props: Props) {
  let jokes: string[] = [];
  let movies: Movie[] = [];
  let games: Game[] = [];

  const showAll = props.filteredCategories.length === 0;
  const showFun = props.filteredCategories.includes('fun');

  const showJokes = showFun || props.filteredCategories.includes('jokes');
  const showMovies = showFun || props.filteredCategories.includes('movies');
  const showGames = showFun || props.filteredCategories.includes('games');

  jokes = showAll || showJokes ? props.jokes : [];
  movies = showAll || showMovies ? props.movies : [];
  games = showAll || showGames ? props.games : [];

  return (
    <div className={styles.grid}>
      <JokeCard joke={jokes[1] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[0], movies[1]] : []} />
      <GameCard games={games.length > 0 ? [games[0], games[1]] : []} />
      <JokeCard joke={jokes[2] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[2], movies[3]] : []} />
      <GameCard games={games.length > 0 ? [games[1], games[2]] : []} />
      <JokeCard joke={jokes[3] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[4], movies[5]] : []} />
      <GameCard games={games.length > 0 ? [games[3], games[4]] : []} />
      <JokeCard joke={jokes[4] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[6], movies[7]] : []} />
      <GameCard games={games.length > 0 ? [games[5], games[6]] : []} />
      <JokeCard joke={jokes[5] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[8], movies[9]] : []} />
      <GameCard games={games.length > 0 ? [games[7], games[8]] : []} />
      <JokeCard joke={jokes[6] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[10], movies[11]] : []} />
      <GameCard games={games.length > 0 ? [games[9], games[10]] : []} />
      <JokeCard joke={jokes[7] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[12], movies[13]] : []} />
      <GameCard games={games.length > 0 ? [games[11], games[12]] : []} />
      <JokeCard joke={jokes[8] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[14], movies[15]] : []} />
      <GameCard games={games.length > 0 ? [games[13], games[14]] : []} />
      <JokeCard joke={jokes[9] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[16], movies[17]] : []} />
      <GameCard games={games.length > 0 ? [games[15], games[16]] : []} />
      <JokeCard joke={jokes[10] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[18], movies[19]] : []} />
      <GameCard games={games.length > 0 ? [games[17], games[18]] : []} />
    </div>
  );
}

export default TrendList;
