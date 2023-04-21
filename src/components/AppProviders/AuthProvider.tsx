import { createContext, useContext, useEffect, useState } from 'react';

// Apperently, this is just a demostration, you can customize your own AuthProvider or using third-party library like r
// Okta, Auth0, etc.

export default function AuthProvider ({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AuthedUser | null>(null);

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (token) {
      const user = JSON.parse(atob(token.split('.')[1]));
      setUser(user);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  setUser: () => {}
});

export const useAuthedUser = () => {
  const { user } = useContext(AuthContext);

  return user;
};

export interface AuthContextType {
  setUser: (user: AuthedUser | null) => void;
  user: AuthedUser | null;
}
