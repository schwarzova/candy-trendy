import React from 'react';
import Image from 'next/image';

import styles from './TrendList.module.css';
import JokeCard from './JokeCard';
import MovieCard, { Movie } from './MovieCard';

type Props = {
  filteredCategories: string[];
  jokes: string[]; //11
  movies: Movie[]; //30
};

function TrendList(props: Props) {
  let jokes: string[] = [];
  let movies: Movie[] = [];

  const showAll = props.filteredCategories.length === 0;
  const showFun = props.filteredCategories.includes('fun');

  const showJokes = showFun || props.filteredCategories.includes('jokes');
  const showMovies = showFun || props.filteredCategories.includes('movies');

  jokes = showAll || showJokes ? props.jokes : [];
  movies = showAll || showMovies ? props.movies : [];

  return (
    <div className={styles.grid}>
      <JokeCard joke={jokes[1] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[1], movies[2]] : []} />
      <JokeCard joke={jokes[2] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[3], movies[4]] : []} />
      <JokeCard joke={jokes[3] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[5], movies[6]] : []} />
      <JokeCard joke={jokes[4] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[7], movies[8]] : []} />
      <JokeCard joke={jokes[5] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[9], movies[10]] : []} />
      <JokeCard joke={jokes[6] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[11], movies[12]] : []} />
      <JokeCard joke={jokes[7] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[13], movies[14]] : []} />
      <JokeCard joke={jokes[8] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[15], movies[16]] : []} />
      <JokeCard joke={jokes[9] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[17], movies[18]] : []} />
      <JokeCard joke={jokes[10] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[19], movies[20]] : []} />
    </div>
  );
}

export default TrendList;
