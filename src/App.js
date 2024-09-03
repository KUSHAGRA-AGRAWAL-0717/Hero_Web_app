import "./App.css";
import Footer from "./components/Footer.jsx";
import MainCarousel from "./components/MainCarousel.jsx";
import Navbar from "./components/Navbar.jsx";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <MainCarousel />
      </div>
      <Footer />
    </div>
  );
}

export default App;
