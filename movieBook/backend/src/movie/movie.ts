export type Movie = {
  id: number;
  title: string;
  releaseDate: string;
  genres: string;
  actors: string;
  director: string;
  poster: string;
  plot: string;
  rating: number;
  runtime: number;
  country: string;
  language: string;
};

export type CreateMovie = Omit<Movie, 'id'>;
