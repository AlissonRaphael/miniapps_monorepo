import React from 'react';
import { SvgProps } from 'react-native-svg';
import { TouchableOpacityProps } from 'react-native';

import {
  Button,
  Logo,
  Label,
} from './styles';

interface SocialButtonProps extends TouchableOpacityProps {
  name: string,
  icon: React.FC<SvgProps>,
  onPress: () => void,
}

export default function SocialButton ({ name, icon: SVG, onPress, ...props }: SocialButtonProps) {
  return (
    <Button onPress={onPress} {...props} >
      <Logo>
        <SVG />
      </Logo>
      <Label>{name}</Label>
    </Button>
  )
}
