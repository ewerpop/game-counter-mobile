import { FunctionComponent } from 'react';

import { GameCardLayout } from './layout';
import PlayersList from './ui/PlayersList';

export interface Player {
  id: number;
  name: string;
  count: number;
}
interface GameCardProps {
  id: any;
  date: string;
  gameName: string;
  playersList: Player[];
}

export const GameCard: FunctionComponent<GameCardProps> = ({ date, gameName, id, playersList }) => {
  return (
    <GameCardLayout
      playersList={<PlayersList data={playersList} cardId={id} />}
      date={date}
      gameName={gameName}
    />
  );
};
