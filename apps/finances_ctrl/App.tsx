import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { ThemeProvider } from 'styled-components';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';

import { Theme } from './src/global/theme';
import { AuthProvider } from './src/hooks/auth';
import Routes from './src/routes'

export default function App() {
  // const [theme, setTheme] = useState<string>('light')
  const [fontsLoaded] = useFonts({
    Poppins_400Regular, Poppins_500Medium, Poppins_700Bold
  })

  if (!fontsLoaded) {
    return <View><Text>Loading</Text></View>
  }

  return (
    <ThemeProvider theme={Theme}>
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </ThemeProvider>
  )
}
