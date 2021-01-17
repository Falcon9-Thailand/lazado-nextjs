import React, {
  useState,
  useContext,
  useEffect,
  createContext,
  ReactNode,
} from "react";
import { auth } from "src/Firebase/firebaseConfigure";

const AuthContext = createContext({});

export const ProviderAuth = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  const providerAuth = useProviderAuth();
  return (
    <AuthContext.Provider value={providerAuth}>{children}</AuthContext.Provider>
  );
};

export const useProviderAuth = () => {
  const [user, setUser] = useState<null | object>(null);

  const signin = ({ email, password }) => {
    return auth.signInWithEmailAndPassword(email, password).then((res) => {
      setUser(res.user);
      return res.user;
    });
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((snapUser) => {
      if (snapUser) {
        setUser(snapUser);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return {
    user,
    signin,
  };
};

export const useAuth = () => useContext(AuthContext);