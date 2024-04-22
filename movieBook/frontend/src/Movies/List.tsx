import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Movie } from '../Movie';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteMovie, fetchMovies } from './movie.api';
import { Link, useNavigate } from 'react-router-dom';

export function List() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { data, error, isLoading } = useQuery<Movie[]>({
    queryKey: ['movies'],
    queryFn: fetchMovies,
  });

  const mutation = useMutation({
    mutationFn: deleteMovie,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['movies'] });
    },
  });

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  let content = <div></div>;

  if (isLoading) {
    content = <div>Loading...</div>;
  }

  if (data && data.length > 0) {
    content = (
      <div>
        {data.map((movie) => (
          <div key={movie.id}>
            {movie.title}
            <IconButton
              aria-label="delete"
              color="secondary"
              onClick={() => mutation.mutate(movie.id)}
            >
              <DeleteIcon />
            </IconButton>
            <IconButton
              aria-label="delete"
              color="primary"
              onClick={() => navigate('/edit/' + movie.id)}
            >
              <EditIcon />
            </IconButton>
          </div>
        ))}
      </div>
    );
  }

  if (data && data.length === 0) {
    content = <div>Keine Daten</div>;
  }

  return (
    <div>
      <h1>List works</h1>
      {content}
      <Link to="/create">Neu</Link>
    </div>
  );
}
