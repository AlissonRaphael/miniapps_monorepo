import React, { useCallback } from 'react';
import { View, Text } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from '@react-navigation/native';

import Theme from './src/global/theme';
import Routes from './src/routes/app.routes';

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
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </ThemeProvider>
    // </View>
  )
}
