import { useState } from "react";
import "./App.css";
import Header from "./Header";
import Main from "./Main";

function App() {
  const [selectedMoon, setSelectedMoon] = useState(false);

  const handleSelectedMoon = () => {
    setSelectedMoon(true);
  };

  const handleSelectedSun = () => {
    setSelectedMoon(false);
  };

  return (
    <div className={`${selectedMoon ? "app-moon" : "app-sun"} `}>
      <Header
        selectedMoon={selectedMoon}
        handleSelectedMoon={handleSelectedMoon}
        handleSelectedSun={handleSelectedSun}
      />
      <Main />
    </div>
  );
}

export default App;
