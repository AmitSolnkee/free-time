import "./App.css";
import Gallery from "./Component/Gallery";
import Letter from "./Component/Letter";
import MainComponent from "./Component/MainComponent";
import Nav from "./Component/Nav";
import { Routes, Route } from "react-router-dom";
import Wishlist from "./Component/Wishlist";
import About from "./Component/About";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#fef9f8" }}>
      <Nav />

      <Routes>
        <Route path="/" element={<MainComponent />} />
        <Route path="/envelope" element={<Letter />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
