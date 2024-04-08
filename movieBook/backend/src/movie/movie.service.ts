import { Injectable } from '@nestjs/common';
import { CreateMovie, Movie } from './movie';
import { PrismaService } from 'src/prisma/prisma.service';
import { response } from 'express';

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
    const result = await this.prismaService.movie.create({ data: newMovie });
    return result;
  }

  async updateMovie(id: number, updatedMovie: Movie) {
    const result = await this.prismaService.movie.update({
      where: { id },
      data: updatedMovie,
    });
    return result;
  }

  deleteMovie(id: number) {
    return this.prismaService.movie.delete({ where: { id } });
  }
}
