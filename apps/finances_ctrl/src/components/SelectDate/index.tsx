import React, { useCallback } from 'react';
import { addMonths, subMonths, format } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import { Container, Title, Button, Icon } from './styles';

interface Props {
  date: Date,
  onChange: (date: Date) => void,
}

type ActionType = 'next' | 'previous'

export default function Date ({ date, onChange }: Props) {
  const handleChange = useCallback((action: ActionType) => {
    if (action === "next") {
      onChange(addMonths(date, 1))
    }
    if (action === "previous") {
      onChange(subMonths(date, 1))
    }
  }, [date, onChange])

  return (
    <Container>
      <Button onPress={() => handleChange('previous')}>
        <Icon name="chevron-left" />
      </Button>
      <Title>{format(date, 'MMMM, yyyy', { locale: ptBR })}</Title>
      <Button onPress={() => handleChange('next')}>
        <Icon name="chevron-right" />
      </Button>
    </Container>
  )
}
