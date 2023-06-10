import React, { useEffect, useState } from 'react';
import { VictoryChart, VictoryGroup, VictoryArea, VictoryPolarAxis, VictoryLabel, VictoryTheme } from 'victory-native';
import { useTheme } from 'styled-components';

import ActivityIndicator from '../ActivityIndicator';

import { Container, Content, Text } from './styles';

interface ChartProps {
  categories: Category[]
}

interface Category {
  id: number,
  deposit: number,
  withdrawal: number,
  max: number,
  name: string,
  color: string,
}

type Amounts = {
  x: string,
  y: number
}

type Maxima = {
  [key: string]: number
}


export default function Chart({ categories }: ChartProps) {
  const [data, setData] = useState<Amounts[][]>()
  const [maxima, setMaxima] = useState<Maxima>()
  const { colors: { success, attention }} = useTheme()

  useEffect(() => {
    const deposits: Amounts[] = []
    const withdrawals: Amounts[] = []
    const maxima: Maxima = {}

    categories.forEach(category => {
      const { deposit, withdrawal, max, name } = category
      deposits.push({ x: name, y: deposit/max })
      withdrawals.push({ x: name, y: withdrawal/max })
      maxima[name] = max
    })

    setData([ deposits, withdrawals ])
    setMaxima(maxima)

  }, [categories])

  if (!data || !maxima) {
    return <ActivityIndicator />
  }

  const [ deposits, withdrawals ] = data
  if (!deposits.length || !withdrawals.length) {
    return <Content>
      <Text>Registros Insuficientes</Text>
    </Content>
  }

  return (
    <Container>
      <VictoryChart polar theme={VictoryTheme.material} domain={{ y: [ 0, 1 ] }}>
        <VictoryGroup
          colorScale={[success, attention]}
          style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
        >
          {data.map((data, i) => <VictoryArea key={i} data={data}/>)}
        </VictoryGroup>
      {
        Object.keys(maxima).map((key, i) => {
          return (
            <VictoryPolarAxis key={i} dependentAxis
              style={{
                axisLabel: { padding: 10 },
                axis: { stroke: "none" },
                grid: { stroke: "grey", strokeWidth: 0.25, opacity: 0.5 }
              }}
              tickLabelComponent={<VictoryLabel labelPlacement="perpendicular"/>}
              labelPlacement="perpendicular"
              axisValue={i + 1} label={key}
              tickFormat={(t) => `${Math.ceil(t * maxima[key])}$`}
              tickValues={[0.25, 0.5, 0.75]}
            />
          );
        })
      }
        <VictoryPolarAxis
          labelPlacement="parallel"
          tickFormat={() => ""}
          style={{
            axis: { stroke: "none" },
            grid: { stroke: "grey", opacity: 0.5 }
          }}
        />
      </VictoryChart>
    </Container>
  )
}
