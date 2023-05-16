import React, { useEffect, useState } from "react";
import { VictoryChart, VictoryGroup, VictoryArea, VictoryPolarAxis, VictoryLabel, VictoryTheme } from "victory-native";
import { useTheme } from "styled-components";

import ActivityIndicator from "../ActivityIndicator";


export default function Chart({ categories }) {
  const { colors: { success, attention }} = useTheme()

  useEffect(() => {
    const deposits = []
    const withdrawals = []
    const maxima = {}

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

  return (
    <Container>
      <VictoryChart polar
        theme={VictoryTheme.material}
        domain={{ y: [ 0, 1 ] }}
      >
        <VictoryGroup colorScale={[success, attention]}
          style={{ data: { fillOpacity: 0.2, strokeWidth: 2 } }}
        >
          {data.map((data, i) => {
            return <VictoryArea key={i} data={data}/>;
          })}
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
              tickLabelComponent={
                <VictoryLabel labelPlacement="perpendicular"/>
              }
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
