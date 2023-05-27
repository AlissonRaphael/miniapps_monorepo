import { TouchableOpacityProps } from 'react-native/types';

import { Button, Label } from './styles';

interface ButtonFormProps extends TouchableOpacityProps {
  label: string
}

export default function ButtonForm ({ label, ...props }: ButtonFormProps) {
  return (
    <Button {...props}>
      <Label>{label}</Label>
    </Button>
  )
}
