import { Controller, Get, Post, Param, Body, ValidationPipe, ParseIntPipe } from '@nestjs/common';
import { CreateGameDto } from './create-game.dto';
import { GamesService } from './games.service';
import { Game } from './game.interface';

@Controller('games')
export class GamesController {
  constructor(private readonly gamesService: GamesService) {}

  @Post()
  async create(
    @Body(new ValidationPipe()) createGameDto: CreateGameDto) {
    this.gamesService.create(createGameDto)
  }

  @Get()
  async findAll(): Promise<Game[]> {
    return this.gamesService.findAll()
  }

  @Get(':id')
  async show(@Param('id', new ParseIntPipe()) id) {
    return `Show params id ${id}`
  }
}