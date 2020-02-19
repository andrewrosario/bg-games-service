export interface Game {
    id: string;
    name: string;
    description: string;
    yearReleased: number;
    genre: GameGenre;
}

export enum GameGenre {
    COOPERATIVE = 'COOPERATIVE',
    SILLY = 'SILLY',
}