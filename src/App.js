import "./App.css";
import { DarkModeProvider } from "./Context/DarkModeContext"
import Homepage from "./homepage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {


  return (
    <DarkModeProvider>
      <div className="App">
        <Navbar />
        <Homepage />
        <Footer />
      </div>
    </DarkModeProvider>
  );
}

export default App;
