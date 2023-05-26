import React from 'react';
import { SvgProps } from 'react-native-svg';

import {
  Button,
  Logo,
  Label,
} from './styles';

interface SocialButtonProps {
  name: string,
  icon: React.FC<SvgProps>,
  onPress: () => void,
}

export default function SocialButton ({ name, icon: SVG, onPress }: SocialButtonProps) {
  return (
    <Button onPress={onPress}>
      <Logo>
        <SVG />
      </Logo>
      <Label>{name}</Label>
    </Button>
  )
}
