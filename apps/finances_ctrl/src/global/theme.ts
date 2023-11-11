const fonts = {
  regular: 'Poppins_400Regular',
  medium: 'Poppins_500Medium',
  bold: 'Poppins_700Bold',
}

export const LightTheme = {
  primary: '#5d3c6f',
  secondary: '#e67386',
  secondary_light: 'rgba(255,135,44,0.3)',
  success: '#12A454',
  success_light: 'rgba(18,164,84,0.5)',
  attention: '#E83F5B',
  attention_light: 'rgba(232,63,91,0.5)',
  shape: '#fff',
  title: '#363f5f',
  text: '#969CB2',
  text_invert: '#f0f0f0',
  text_light: '#ffffff',
  text_dark: '#000000',
  background: '#f8f8f8'
}

export const DarkTheme = {
  primary: '#32203c',
  secondary: '#994c59',
  secondary_light: 'rgba(255,135,44,0.3)',
  success: '#12A454',
  success_light: 'rgba(18,164,84,0.5)',
  attention: '#a82d41',
  attention_light: 'rgba(232,63,91,0.5)',
  shape: '#161616',
  title: '#363f5f',
  text: '#bec4d5',
  text_invert: '#28292d',
  text_light: '#000',
  text_dark: '#ffffff',
  background: '#1d1e20'
}

export const Theme = {
  fonts: {
    regular: 'Poppins_400Regular',
    medium: 'Poppins_500Medium',
    bold: 'Poppins_700Bold',
  },
  color: {
    primary: '#5d3c6f',
    secondary: '#e67386',
    secondary_light: 'rgba(255,135,44,0.3)',
    success: '#12A454',
    success_light: 'rgba(18,164,84,0.5)',
    attention: '#E83F5B',
    attention_light: 'rgba(232,63,91,0.5)',
    shape: '#fff',
    title: '#363f5f',
    text: '#969CB2',
    text_invert: '#f0f0f0',
    text_light: '#ffffff',
    text_dark: '#000000',
    background: '#f8f8f8'
  }
}

// export default (name: string) => ({ color: name === 'light' ? LightTheme : DarkTheme, fonts })