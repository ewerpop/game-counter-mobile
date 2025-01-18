import React, { FC } from 'react';
import { Text } from 'react-native';

type TextProps = {
  size: 'h1' | 'h2' | 'body1' | 'body2' | 'body3' | 'body4' | 'body5' | 'body6';
  weight?: 'regular' | 'medium' | 'semiBold' | 'bold';
  className?: string;
  children?: React.ReactNode;
};

const sizeClasses = {
  h1: 'text-4xl leading-[44px]',
  h2: 'text-[32px] leading-[34px] sm:leading-[38px]',
  body1: 'text-2xl leading-[34px]',
  body2: 'text-base leading-[24px] sm:text-xl sm:leading-[28px]',
  body3: 'text-xs sm:text-[16px] leading-[19px] sm:leading-[24px]',
  body4: 'text-[16px] leading-[24px]',
  body5: 'text-[14px] leading-[19px]',
  body6: 'text-[12px] leading-[19.2px]',
};

const weightClasses = {
  regular: 'font-normal',
  medium: 'font-medium',
  semiBold: 'font-semibold',
  bold: 'font-bold',
};

export const UIText: FC<TextProps> = ({ size, weight = 'regular', className, children }) => {
  const colorClass = 'text-primaryBlack';
  const fontSizeClass = sizeClasses[size];
  const fontWeightClass = weightClasses[weight];

  return (
    <Text
      className={`tracking-wide ${fontSizeClass} ${fontWeightClass} ${colorClass}  
        ${className ? (className as string) : ''}`}>
      {children}
    </Text>
  );
};
