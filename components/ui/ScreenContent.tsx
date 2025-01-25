import clsx from 'clsx';
import { View } from 'react-native';

type ScreenContentProps = {
  children?: React.ReactNode;
  className?: string;
};

export const ScreenContent = ({ children, className }: ScreenContentProps) => {
  return <View className={clsx(' flex-1 items-center justify-center', className)}>{children}</View>;
};
