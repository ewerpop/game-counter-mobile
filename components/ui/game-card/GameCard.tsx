import { FunctionComponent } from 'react';

import { GameCardLayout } from './layout';
import PlayersList from './ui/PlayersList';

interface GameCardProps {}

export const GameCard: FunctionComponent<GameCardProps> = () => {
  return (
    <GameCardLayout playersList={<PlayersList />} date="12.12.2022" gameName="Уно игра номер 1" />
  );
};
