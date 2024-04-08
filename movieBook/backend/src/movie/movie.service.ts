import { Injectable, NotFoundException } from '@nestjs/common';
import data from './data';
import { CreateMovie, Movie } from './movie';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MovieService {
  constructor(private readonly prismaService: PrismaService) {}

  getAllMovies() {
    return this.prismaService.movie.findMany();
  }

  getMovieById(id: number) {
    return this.prismaService.movie.findUnique({ where: { id } });
  }

  async createMovie(newMovie: CreateMovie) {
    const result = this.prismaService.movie.create({ data: newMovie });
    return result;
  }

  updateMovie(id: number, updatedMovie: Movie) {
    const index = data.findIndex((movie) => movie.id === id);
    data[index] = updatedMovie;
    return updatedMovie;
  }

  deleteMovie(id: number) {
    const index = data.findIndex((movie) => movie.id === id);
    data.splice(index, 1);
  }
}
