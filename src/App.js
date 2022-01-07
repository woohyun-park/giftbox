// import NavContainer from "./containers/NavContainer";
// import BodyContainer from "./containers/BodyContainer";
import { useState, useEffect } from "react";
import AppRouter from "./components/Router";
import { authService } from "./fbase";

function App() {
  const [init, setInit] = useState(false);
  const [userObj, setUserObj] = useState(null);
  useEffect(() => {
    authService.onAuthStateChanged((user) => {
      if (user) {
        setUserObj(user);
      }
      setInit(true);
    });
  }, []);
  return (
    <>
      {init ? (
        <AppRouter isLoggedIn={userObj} userObj={userObj} />
      ) : (
        "Initializing"
      )}
    </>
  );
}

export default App;
