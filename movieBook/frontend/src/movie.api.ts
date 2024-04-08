export async function fetchMovies() {
  const response = await fetch('/api/movies');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
}

export async function deleteMovie(id: number) {
  const response = await fetch(`/api/movies/${id}`, {
    method: 'DELETE',
  });
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
}
