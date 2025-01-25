import { FunctionComponent } from 'react';
import { FlatList, View } from 'react-native';

import { CardListLayout } from './layout';
import { GameCard } from '../game-card';

interface CardListProps {}

const sortedData = [
  {
    id: 1,
    name: 'Game 1',
    playersList: [
      { id: 11, name: 'Player 1', count: 22233 },
      { id: 2, name: 'Player 2', count: 42 },
      { id: 3, name: 'Player 3', count: 12 },
      { id: 33, name: 'Player 4', count: 12 },
      { id: 31, name: 'Player 5', count: 12 },
    ],
  },
  {
    id: 2,
    name: 'Game 2',
    playersList: [
      { id: 11, name: 'Player 1', count: 22233 },
      { id: 2, name: 'Player 2', count: 42 },
      { id: 3, name: 'Player 3', count: 12 },
      { id: 33, name: 'Player 4', count: 12 },
      { id: 31, name: 'Player 5', count: 12 },
    ],
  },
  {
    id: 3,
    name: 'Game 3',
    playersList: [
      { id: 11, name: 'Player 1', count: 22233 },
      { id: 2, name: 'Player 2', count: 42 },
      { id: 3, name: 'Player 3', count: 12 },
      { id: 33, name: 'Player 4', count: 12 },
      { id: 31, name: 'Player 5', count: 12 },
      { id: 321, name: 'Player 5', count: 12 },
      { id: 3111, name: 'Player 5', count: 12 },
      { id: 3221, name: 'Player 5', count: 12 },
    ],
  },
];

export const CardList: FunctionComponent<CardListProps> = () => {
  return (
    <CardListLayout
      list={
        <FlatList
          data={sortedData}
          disableScrollViewPanResponder
          renderItem={({ item }) => (
            <View className="p-3">
              <GameCard
                id={item.id}
                gameName={item.name}
                playersList={item.playersList}
                date="22.01.2021"
              />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      }
    />
  );
};
