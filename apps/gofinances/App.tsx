import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';

import Dashboard from './src/screens/Dashboard';

import Theme from './src/global/theme';

SplashScreen.preventAutoHideAsync()

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_500Medium, Poppins_700Bold
  })

  const onLayoutView = useCallback(async () => {
    if (!fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return <View><Text>Loading</Text></View>
  }

  return (
    <View style={{ flex: 1 }} onLayout={onLayoutView}>
      <ThemeProvider theme={Theme}>
        <Dashboard />
      </ThemeProvider>
    </View>
  )
}
