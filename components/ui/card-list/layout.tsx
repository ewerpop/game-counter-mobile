import { FunctionComponent } from 'react';
import { View } from 'react-native';

interface CardListProps {
  list: React.ReactNode;
}

export const CardListLayout: FunctionComponent<CardListProps> = ({ list }) => {
  return <View>{list}</View>;
};
