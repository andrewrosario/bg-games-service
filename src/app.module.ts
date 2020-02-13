import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { GraphQLModule } from '@nestjs/graphql';
import { GamesService } from './games/services/games.service';
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
  controllers: [AppController, GamesController],
  providers: [AppService, 
              GamesService],
})
export class AppModule {}
