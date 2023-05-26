import { ReactNode, createContext, useContext } from 'react';

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
}

const AuthContext = createContext({} as AuthContextProps)

export function useAuth(){
  return useContext(AuthContext)
}

export function AuthProvider({ children }: AuthProviderProps) {
  const user = {
    id: '1',
    name: 'Alisson Raphael',
    email: 'test@test.com',
    avatar: "",
  }

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  )
}
