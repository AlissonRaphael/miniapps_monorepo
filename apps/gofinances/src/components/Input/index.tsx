import { TextInputProps } from 'react-native/types'

import { Input } from './styles'

export default function InputForm (props: TextInputProps) {
  return (
    <Input {...props} />
  )
}
