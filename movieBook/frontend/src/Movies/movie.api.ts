import { CreateMovie, Movie } from '../Movie';

function getToken() {
  const token = localStorage.getItem('access_token');

  return {
    Authorization: `Bearer ${token}`,
  };
}

export async function fetchMovies() {
  const response = await fetch('/api/movies', {
    headers: {
      ...getToken(),
    },
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function deleteMovie(id: number) {
  const response = await fetch(`/api/movies/${id}`, {
    headers: { ...getToken() },
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
}

export async function fetchMovie(id: number): Promise<Movie> {
  const response = await fetch(`/api/movies/${id}`, {
    headers: { ...getToken() },
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function save(movie: CreateMovie): Promise<Movie> {
  let method = 'POST';
  let url = '/api/movies';
  if ((movie as Movie).id) {
    method = 'PUT';
    url = '/api/movies/' + (movie as Movie).id;
  }

  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...getToken(),
    },
    body: JSON.stringify({ ...movie }),
  });

  if (!response.ok) {
    throw new Error('Network response was not ok');
  }

  return response.json();
}
