import { Control, Controller } from 'react-hook-form';
import { TextInputProps } from 'react-native/types';

import { Input } from './styles';

export interface InputProps extends TextInputProps {
  name: string,
}

interface InputFormProps extends InputProps {
  control: Control,
}

export default function InputForm ({ name, control, ...props }: InputFormProps) {
  return (
    <Controller 
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <Input name={name} onChangeText={onChange} value={value} {...props} />
      )}
    />
  )
}
