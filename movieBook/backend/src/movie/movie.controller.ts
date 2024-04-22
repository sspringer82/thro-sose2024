import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateMovie, Movie } from './movie';
import { MovieService } from './movie.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Controller('movies')
@UseGuards(AuthGuard)
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Get()
  getAllMovies() {
    return this.movieService.getAllMovies();
  }
  @Get(':id')
  getMovieById(@Param('id') id: string) {
    const parsedId = parseInt(id, 10);
    return this.movieService.getMovieById(parsedId);
  }
  @Post()
  createMovie(@Body() newMovie: CreateMovie) {
    const createdMovie = this.movieService.createMovie(newMovie);
    return createdMovie;
  }
  @Put(':id')
  updateMovie(@Param('id') id: string, @Body() updatedMovie: Movie) {
    return this.movieService.updateMovie(parseInt(id, 10), updatedMovie);
  }
  @Delete(':id')
  deleteMovie(@Param('id') id: string) {
    return this.movieService.deleteMovie(parseInt(id, 10));
  }
}
