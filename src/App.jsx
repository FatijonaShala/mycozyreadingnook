import React, { useState } from "react";
import "./App.css";
import { DarkModeProvider } from "./Context/DarkModeContext";
import ReadingNook from "./components/ReadingNook";
import CoffeeShop from "./components/CoffeeShop";
import Library from "./components/Library";
import Seaside from "./components/Seaside";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const [currentSpace, setCurrentSpace] = useState("nook");

  const changeAmbientSpace = () => {
    const spaces = ["nook", "coffeeShop", "library", "seaside"];
    const newSpace = spaces[Math.floor(Math.random() * spaces.length)];
    setCurrentSpace(newSpace);
  };

  return (
    <DarkModeProvider>
      <div className="App">
        <Navbar changeAmbientSpace={changeAmbientSpace} />
        {/* {currentSpace === "nook" && <Homepage />}
        {currentSpace === "coffeeShop" && <CoffeeShop />} */}
        {currentSpace === "nook" && (
          <ReadingNook changeAmbientSpace={changeAmbientSpace} />
        )}
        {currentSpace === "coffeeShop" && (
          <CoffeeShop changeAmbientSpace={changeAmbientSpace} />
        )}
        {currentSpace === "library" && (
          <Library changeAmbientSpace={changeAmbientSpace} />
        )}
        {currentSpace === "seaside" && (
          <Seaside changeAmbientSpace={changeAmbientSpace} />
        )}
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;
