import React from 'react';
import Image from 'next/image';

import styles from './TrendList.module.css';
import JokeCard from './JokeCard';
import MovieCard, { Movie } from './MovieCard';
import GameCard, { Game } from './GameCard';
import MusicCard, { Song } from './MusicCard';

type Props = {
  filteredCategories: string[];
  games: Game[]; // 20
  jokes: string[]; //12
  movies: Movie[]; //30
  songs: Song[]; //50
};

function TrendList(props: Props) {
  let jokes: string[] = [];
  let movies: Movie[] = [];
  let games: Game[] = [];
  let songs: Song[] = [];

  const showAll = props.filteredCategories.length === 0;
  const showFun = props.filteredCategories.includes('fun');

  const showJokes = showFun || props.filteredCategories.includes('jokes');
  const showMovies = showFun || props.filteredCategories.includes('movies');
  const showGames = showFun || props.filteredCategories.includes('games');
  const showSongs = showFun || props.filteredCategories.includes('music');

  jokes = showAll || showJokes ? props.jokes : [];
  movies = showAll || showMovies ? props.movies : [];
  games = showAll || showGames ? props.games : [];
  songs = showAll || showSongs ? props.songs : [];

  return (
    <div className={styles.grid}>
      <MusicCard
        songs={songs.length > 0 ? [songs[0], songs[1], songs[2]] : []}
      />
      <JokeCard joke={jokes[0] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[0], movies[1]] : []} />
      <GameCard games={games.length > 0 ? [games[0], games[1]] : []} />

      <MusicCard
        songs={songs.length > 0 ? [songs[3], songs[4], songs[5]] : []}
      />
      <JokeCard joke={jokes[1] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[2], movies[3]] : []} />
      <GameCard games={games.length > 0 ? [games[2], games[3]] : []} />

      <MusicCard
        songs={songs.length > 0 ? [songs[6], songs[7], songs[8]] : []}
      />
      <JokeCard joke={jokes[2] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[4], movies[5]] : []} />
      <GameCard games={games.length > 0 ? [games[4], games[5]] : []} />

      <MusicCard
        songs={songs.length > 0 ? [songs[9], songs[10], songs[11]] : []}
      />
      <JokeCard joke={jokes[3] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[6], movies[7]] : []} />
      <GameCard games={games.length > 0 ? [games[6], games[7]] : []} />

      <MusicCard
        songs={songs.length > 0 ? [songs[12], songs[13], songs[14]] : []}
      />
      <JokeCard joke={jokes[4] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[8], movies[9]] : []} />
      <GameCard games={games.length > 0 ? [games[8], games[9]] : []} />

      <MusicCard
        songs={songs.length > 0 ? [songs[15], songs[16], songs[17]] : []}
      />
      <JokeCard joke={jokes[5] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[10], movies[11]] : []} />
      <GameCard games={games.length > 0 ? [games[10], games[11]] : []} />

      <MusicCard
        songs={songs.length > 0 ? [songs[18], songs[19], songs[20]] : []}
      />
      <JokeCard joke={jokes[6] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[12], movies[13]] : []} />
      <GameCard games={games.length > 0 ? [games[12], games[13]] : []} />

      <MusicCard
        songs={songs.length > 0 ? [songs[21], songs[22], songs[23]] : []}
      />
      <JokeCard joke={jokes[7] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[14], movies[15]] : []} />
      <GameCard games={games.length > 0 ? [games[14], games[15]] : []} />

      <MusicCard
        songs={songs.length > 0 ? [songs[24], songs[25], songs[26]] : []}
      />
      <JokeCard joke={jokes[8] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[16], movies[17]] : []} />
      <GameCard games={games.length > 0 ? [games[16], games[17]] : []} />

      <MusicCard
        songs={songs.length > 0 ? [songs[27], songs[28], songs[29]] : []}
      />
      <JokeCard joke={jokes[9] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[18], movies[19]] : []} />
      <GameCard games={games.length > 0 ? [games[18], games[19]] : []} />

      <MusicCard
        songs={songs.length > 0 ? [songs[30], songs[31], songs[32]] : []}
      />
      <JokeCard joke={jokes[10] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[20], movies[21]] : []} />

      <MusicCard
        songs={songs.length > 0 ? [songs[33], songs[34], songs[35]] : []}
      />
      <JokeCard joke={jokes[11] || ''} />
      <MovieCard movies={movies.length > 0 ? [movies[22], movies[23]] : []} />
    </div>
  );
}

export default TrendList;
