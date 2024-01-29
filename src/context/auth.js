import { CR_U } from '@utils/constant';
import Helper from '@utils/Helper';
import Cookies from 'js-cookie';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const authenticate = async ({ username, password }) => {
    if (password === CR_U) {
      await Cookies.set('heavyrotation', true, { path: '/', expires: Helper.generate30m() });
      await Cookies.set(
        'river',
        JSON.stringify({ username }, { path: '/', expires: Helper.generate30m() })
      );
      setUser({ name: username ?? 'anonymous' });

      return 'ok';
    } else {
      logout();
    }
  };

  const logout = async () => {
    await Cookies.remove('heavyrotation', { path: '/' });
    await Cookies.remove('river', { path: '/' });

    setUser(null);
    window.location.reload();
  };

  useEffect(() => {
    const token = Cookies.get('heavyrotation');
    const userdt = Cookies.get('river');

    if (!token) return;

    const payload = { username: userdt ? JSON.parse(userdt)?.username : '', password: CR_U };
    authenticate(payload);
  }, []);

  const token = Cookies.get('heavyrotation');

  return (
    <AuthContext.Provider
      value={{
        user,
        authenticate,
        isAuthenticated: !!user,
        token,
        logout
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
