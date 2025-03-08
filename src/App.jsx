import { useState } from "react";
import Navbar from "./Navbar";
import Home from "./Home";

const App = () => {
  const [isHome, setIsHome] = useState(true);

  return (
    <>
      <Navbar triggerHome={() => setIsHome(true)} />

      {isHome && <Home />}
    </>
  );
};
export default App;
