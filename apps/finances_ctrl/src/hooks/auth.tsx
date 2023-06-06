import { ReactNode, createContext, useCallback, useContext, useEffect, useState } from 'react';
import { Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import * as AppleAuthentication from 'expo-apple-authentication';

import { $users } from '../global/storage';

WebBrowser.maybeCompleteAuthSession();

interface AuthProviderProps {
  children: ReactNode,
}

interface User {
  id: string,
  name: string,
  email: string,
  avatar?: string | null,
}

interface AuthContextProps {
  user: User,
  googleSignIn: () => void,
  appleSignIn: () => void,
  signOut: () => void,
}

const AuthContext = createContext({} as AuthContextProps)

export function useAuth(){
  return useContext(AuthContext)
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | undefined>()
  const [user, setUser] = useState<User>({} as User)

  const loadTransactions = async () => {
    const user = await AsyncStorage.getItem($users)
    if (user) {
      setUser(JSON.parse(user || "[]"))
    }
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "218542519618-qq12no7rkl9vlhrnvq4jk685hjh1vrdc.apps.googleusercontent.com",
    androidClientId: "218542519618-lvlqlsq2ok5rpm4gbrmo46nhp5e092st.apps.googleusercontent.com",
    iosClientId: "218542519618-lvlqlsq2ok5rpm4gbrmo46nhp5e092st.apps.googleusercontent.com",
  })

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response?.authentication?.accessToken)
      getUser()
    }
  }, [response, token])

  const getUser = useCallback(async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        { headers: { Authorization: `Bearer ${token}` } },
      )
      const { id, email, name, picture: avatar } = await response.json()
      const user = { id, email, name, avatar }
      setUser(user)
      await AsyncStorage.setItem($users, JSON.stringify(user))
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível se autenticar')
    }
  }, [])

  const appleSignIn = useCallback(async () => {
    try {
      const credential = await AppleAuthentication.signInAsync({
        requestedScopes: [
          AppleAuthentication.AppleAuthenticationScope.FULL_NAME,
          AppleAuthentication.AppleAuthenticationScope.EMAIL,
        ]
      })

      if (credential) {
        const user = {
          id: String(credential.user),
          email: credential.email!,
          name: credential.fullName?.givenName!,
          avatar: null,
        }
        setUser(user)
        await AsyncStorage.setItem($users, JSON.stringify(user))
      }
    } catch (error) {
      console.log(error)
      Alert.alert('Não foi possível se autenticar')
    }
  }, [])

  const signOut = useCallback(async () => {
    setUser({} as User)
    await AsyncStorage.removeItem($users)
  }, [])

  return (
    <AuthContext.Provider value={{ user, googleSignIn: promptAsync, appleSignIn, signOut }}>
      {children}
    </AuthContext.Provider>
  )
}
