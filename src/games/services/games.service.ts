import { Injectable } from '@nestjs/common';
import { Game } from '../game.interface'

@Injectable()
export class GamesService {
  private readonly games: Game[] = []
  
  create(game: Game) {
    this.games.push(game)
  }

  findAll(): Game[] {
    return this.games
  }
}

