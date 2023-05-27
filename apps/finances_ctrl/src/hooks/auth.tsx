import { ReactNode, createContext, useContext, useEffect, useState } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';

WebBrowser.maybeCompleteAuthSession();

interface AuthProviderProps {
  children: ReactNode,
}

interface User {
  id: string,
  name: string,
  email: string,
  avatar?: string,
}

interface AuthContextProps {
  user: User,
  requested: boolean,
  googleSignIn: () => void,
}

const AuthContext = createContext({} as AuthContextProps)

export function useAuth(){
  return useContext(AuthContext)
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [token, setToken] = useState<string | undefined>()
  const [user, setUser] = useState<User | undefined>()
  const [requested, setRequested] = useState<boolean>(false)

  const [request, response, promptAsync] = Google.useAuthRequest({
    expoClientId: "218542519618-qq12no7rkl9vlhrnvq4jk685hjh1vrdc.apps.googleusercontent.com",
    androidClientId: "218542519618-lvlqlsq2ok5rpm4gbrmo46nhp5e092st.apps.googleusercontent.com",
    iosClientId: "218542519618-lvlqlsq2ok5rpm4gbrmo46nhp5e092st.apps.googleusercontent.com",
  },
  )

  useEffect(() => {
    if (response?.type === "success") {
      setToken(response?.authentication?.accessToken)
      getUser()
    }
  }, [response, token])

  useEffect(() => {
    setRequested(!requested)
  }, [request])

  const getUser = async () => {
    try {
      const response = await fetch(
        "https://www.googleapis.com/userinfo/v2/me",
        { headers: { Authorization: `Bearer ${token}` } },
      )
      const { id, email, name, picture: avatar } = await response.json()
      setUser({ id, email, name, avatar })
    } catch (error) {}
  }

  return (
    <AuthContext.Provider value={{ user, requested, googleSignIn: promptAsync }}>
      {children}
    </AuthContext.Provider>
  )
}
