import { useStore } from '../state/store.js';

const useAuth = () => {
  const { user, setUser, isLoggedIn, setIsLoggedIn } = useStore((state) => ({
    user: state.user,
    setUser: state.setUser,
    isLoggedIn: state.isLoggedIn,
    setIsLoggedIn: state.setIsLoggedIn,
  }));

  return { user, setUser, isLoggedIn, setIsLoggedIn };
};

export default useAuth;