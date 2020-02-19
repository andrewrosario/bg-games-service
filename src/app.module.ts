import { Module } from '@nestjs/common';
// import { GraphQLModule } from '@nestjs/graphql';
import { GamesService } from './games/games.service';
import { GamesModule } from './games/games.module'
import { GamesController } from './games/games.controller';

@Module({
  imports: [
    // GraphQLModule.forRoot({
    //   debug: false,
    //   playground: true,
    //   autoSchemaFile: 'schema.gql'
    // }),
    GamesModule,
  ],
  controllers: [GamesController],
  providers: [GamesService],
})
export class AppModule {}
``