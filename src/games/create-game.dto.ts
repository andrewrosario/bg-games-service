import { IsString, IsInt } from 'class-validator';

export class CreateGameDto {
  @IsString()
  name: string;

  @IsInt()
  yearReleased: number;

  @IsString()
  description: string;
}