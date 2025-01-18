import { UIText } from 'components/ui/text';
import { FunctionComponent, useMemo } from 'react';
import { FlatList, View } from 'react-native';

interface Player {
  id: number;
  name: string;
  count: number;
}
interface PlayersListProps {
  data: Player[];
}
const Data = [
  { id: 1, name: 'Player 1', count: 22233 },
  { id: 2, name: 'Player 2', count: 42 },
  { id: 3, name: 'Player 3', count: 12 },
  { id: 33, name: 'Player 3', count: 12 },
  { id: 31, name: 'Player 3', count: 12 },
  { id: 32, name: 'Player 3asdfads', count: 12 },
  { id: 34, name: 'Player 3', count: 12 },
  { id: 37, name: 'Player 3', count: 12 },
];

export const PlayersList: FunctionComponent<PlayersListProps> = ({ data = Data }) => {
  const sortedData = useMemo(() => data.sort((a, b) => b.count - a.count), [data]);
  return (
    <FlatList
      data={sortedData}
      renderItem={({ item }) => (
        <View className="mb-1 w-[100%] flex-row justify-between border-b-2">
          <UIText
            className="line-clamp-1 w-[65%] overflow-hidden text-ellipsis text-nowrap"
            size="body2">
            {item.name}
          </UIText>
          <UIText
            className="line-clamp-1 w-[35%] overflow-hidden text-ellipsis text-nowrap pr-2 text-right"
            size="body2">
            {item.count}
          </UIText>
        </View>
      )}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default PlayersList;
