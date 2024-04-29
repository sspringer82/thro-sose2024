import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Movie } from '../Movie';
import {
  AppBar,
  Box,
  Button,
  Fab,
  IconButton,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Toolbar,
  Typography,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteMovie, fetchMovies } from './movie.api';
import { Link, useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AddIcon from '@mui/icons-material/Add';
import './List.scss';
import Rating from './Rating';

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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Genre</TableCell>
              <TableCell>Release Date</TableCell>
              <TableCell>Rating</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((movie) => (
              <TableRow key={movie.id}>
                <TableCell>{movie.title}</TableCell>
                <TableCell>{movie.genres}</TableCell>
                <TableCell>
                  {new Date(movie.releaseDate).getFullYear()}
                </TableCell>
                <TableCell>
                  <Rating movie={movie} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  if (data && data.length === 0) {
    content = <div>Keine Daten</div>;
  }

  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Top Movies
            </Typography>
            <Button color="inherit">Logout</Button>
          </Toolbar>
        </AppBar>
      </Box>
      {content}
      <Fab
        color="primary"
        aria-label="add"
        className="add"
        component={Link}
        to="/create"
      >
        <AddIcon />
      </Fab>
      {/* <Link to="/create">Neu</Link> */}
    </div>
  );
}
