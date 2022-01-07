import { useState, useEffect } from "react";
import AppRouter from "./components/Router";
import { authService } from "./fbase";

function App({ user, wishlist, onSetUser, onAddWish }) {
  const [init, setInit] = useState(false);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      onSetUser(user);
      setInit(true);
    });
  }, []);
  return (
    <>{init ? <AppRouter isLoggedIn={user} user={user} /> : "Initializing"}</>
  );
}

export default App;
