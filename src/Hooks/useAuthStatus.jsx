import { useState, useEffect, useRef } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
export const useAuthStatus = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const isMounted = useRef(true);
  useEffect(() => {
    if (isMounted) {
      const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setLoggedIn(true);
        }
      });
    }
    return () => {
      isMounted.current = false;
    };
  }, []);
  return loggedIn;
};
