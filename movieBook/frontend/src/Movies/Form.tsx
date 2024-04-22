import { useForm } from 'react-hook-form';
import { CreateMovie, Movie } from '../Movie';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { fetchMovie, save } from './movie.api';

export function Form() {
  const { id } = useParams<{ id: string }>();
  const { handleSubmit, register, reset } = useForm<CreateMovie>();

  useEffect(() => {
    if (id) {
      fetchMovie(parseInt(id)).then((data) => reset(data));
    }
  }, [id]);

  const navigate = useNavigate();

  async function onSubmit(data: CreateMovie | Movie) {
    save(data);
    navigate('/');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="title">Title</label>
      <input {...register('title')} type="text" id="title" name="title" />
      <label htmlFor="releaseDate">Release Date</label>
      <input
        {...register('releaseDate')}
        type="text"
        id="releaseDate"
        name="releaseDate"
      />
      <label htmlFor="genres">Genres</label>
      <input {...register('genres')} type="text" id="genres" name="genres" />
      <label htmlFor="actors">Actors</label>
      <input {...register('actors')} type="text" id="actors" name="actors" />
      <label htmlFor="director">Director</label>
      <input
        {...register('director')}
        type="text"
        id="director"
        name="director"
      />
      <label htmlFor="poster">Poster</label>
      <input {...register('poster')} type="text" id="poster" name="poster" />
      <label htmlFor="plot">Plot</label>
      <input {...register('plot')} type="text" id="plot" name="plot" />
      <label htmlFor="rating">Rating</label>
      <input {...register('rating')} type="number" id="rating" name="rating" />
      <label htmlFor="runtime">Runtime</label>
      <input
        {...register('runtime')}
        type="number"
        id="runtime"
        name="runtime"
      />
      <label htmlFor="country">Country</label>
      <input {...register('country')} type="text" id="country" name="country" />
      <label htmlFor="language">Language</label>
      <input
        {...register('language')}
        type="text"
        id="language"
        name="language"
      />
      <button type="submit">Submit</button>
    </form>
  );
}
