import { FunctionComponent } from 'react';
import { View } from 'react-native';

import { UIText } from '../text';

interface GameCardLayoutProps {
  gameName: string;
  date: string;
  playersList: React.ReactNode;
}

export const GameCardLayout: FunctionComponent<GameCardLayoutProps> = ({
  gameName,
  date,
  playersList,
}) => {
  return (
    <View className="h-[160px] w-[100%] flex-row items-center justify-around rounded-lg border bg-white">
      <View className="flex h-[85%] w-[45%] justify-between">
        <View className="h-[69%] w-[100%]">
          <UIText size="body1">{gameName}</UIText>
        </View>
        <View className="h-[15%] w-[100%]">
          <UIText size="body3">{date}</UIText>
        </View>
      </View>
      <View className="flex h-[90%] w-[50%] items-start justify-start  text-start">
        {playersList}
      </View>
    </View>
  );
};
