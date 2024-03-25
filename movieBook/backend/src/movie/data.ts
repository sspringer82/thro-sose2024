import { Movie } from './movie';

const movies: Movie[] = [
  {
    id: 1,
    title: 'The Grand Expedition',
    releaseDate: '2024-03-01',
    genre: 'Adventure',
    actors: ['Alex Rivera', 'Samira Lee', 'Mikhail Chen'],
    director: 'Elena Watkins',
    poster: 'the-grand-expedition-poster.jpg',
    plot: 'A thrilling adventure of a group of explorers on their quest to find a lost city in the Amazon jungle.',
    rating: 8.2,
    runtime: 129,
    country: 'USA',
    language: 'English',
  },
  {
    id: 2,
    title: 'Whispers in the Dark',
    releaseDate: '2023-10-13',
    genre: 'Horror',
    actors: ['Claire Holt', 'Evan Peters', 'Zoe Kravitz'],
    director: 'Marco Giuliani',
    poster: 'whispers-in-the-dark-poster.jpg',
    plot: 'A group of friends encounter terrifying supernatural forces in a haunted house.',
    rating: 7.5,
    runtime: 115,
    country: 'UK',
    language: 'English',
  },
  {
    id: 3,
    title: 'Eternal Bonds',
    releaseDate: '2023-02-14',
    genre: 'Romance',
    actors: ['Emma Watson', 'Henry Cavill', "Lupita Nyong'o"],
    director: 'Isabella Reed',
    poster: 'eternal-bonds-poster.jpg',
    plot: 'Two soulmates separated by time and space find each other through reincarnation.',
    rating: 8.8,
    runtime: 123,
    country: 'France',
    language: 'French',
  },
  {
    id: 4,
    title: 'Cybernetic',
    releaseDate: '2024-07-25',
    genre: 'Science Fiction',
    actors: ['Keanu Reeves', 'Scarlett Johansson', 'Rami Malek'],
    director: 'Liam Neeson',
    poster: 'cybernetic-poster.jpg',
    plot: 'In a dystopian future, a cyborg must navigate a world where humans and machines are at war.',
    rating: 9.1,
    runtime: 142,
    country: 'USA',
    language: 'English',
  },
  {
    id: 5,
    title: 'Mysteries of the Deep',
    releaseDate: '2025-04-18',
    genre: 'Documentary',
    actors: ['David Attenborough'],
    director: 'Rachel Morrison',
    poster: 'mysteries-of-the-deep-poster.jpg',
    plot: 'An exploration of the uncharted depths of the ocean and the creatures that inhabit it.',
    rating: 8.9,
    runtime: 90,
    country: 'UK',
    language: 'English',
  },
  {
    id: 6,
    title: 'The Last Kingdom',
    releaseDate: '2022-08-05',
    genre: 'Historical Drama',
    actors: ['Chris Hemsworth', 'Alicia Vikander', 'Tom Hiddleston'],
    director: 'Sophia Takal',
    poster: 'the-last-kingdom-poster.jpg',
    plot: 'A dramatic tale of power and betrayal in the medieval kingdom of England.',
    rating: 8.0,
    runtime: 134,
    country: 'Germany',
    language: 'English',
  },
  {
    id: 7,
    title: 'Quantum Leap',
    releaseDate: '2024-12-21',
    genre: 'Action',
    actors: ['Tom Cruise', 'Emily Blunt', 'Idris Elba'],
    director: 'John Krasinski',
    poster: 'quantum-leap-poster.jpg',
    plot: 'An elite team of soldiers undertakes a mission to prevent a global catastrophe.',
    rating: 8.6,
    runtime: 120,
    country: 'USA',
    language: 'English',
  },
  {
    id: 8,
    title: 'Under the Neon Lights',
    releaseDate: '2023-05-07',
    genre: 'Musical',
    actors: ['Hugh Jackman', 'Zendaya', 'Ryan Gosling'],
    director: 'Damien Chazelle',
    poster: 'under-the-neon-lights-poster.jpg',
    plot: 'The story of a group of artists struggling to make their mark in the bustling city of Las Vegas.',
    rating: 7.9,
    runtime: 116,
    country: 'USA',
    language: 'English',
  },
];

export default movies;
