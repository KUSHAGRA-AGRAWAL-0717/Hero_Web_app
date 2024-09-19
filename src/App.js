// import "./App.css";
// import Footer from "./components/Footer.jsx";
// import MainCarousel from "./components/MainCarousel.jsx";
// import Navbar from "./components/Navbar.jsx";

// function App() {
//   return (
//     <div className="App">
//       <Navbar />
//       <div className="content">
//         <MainCarousel />
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default App;

import "./App.css";
import Footer from "./components/Footer.jsx";
import MainCarousel from "./components/MainCarousel.jsx";
import Navbar from "./components/Navbar.jsx";
import SignIn from "./pages/Login.jsx";
import SignUp from "./pages/SignUp.jsx";
import SearchBar from "./pages/SearchBar.jsx";
import SignOut from "./pages/SignOut.jsx";
import ProfilePage from "./pages/Profile.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import necessary components

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<MainCarousel />} /> {/* Home route */}
            <Route path="/signup" element={<SignUp />} />  {/* SignUp route */}
            <Route path="/signin" element={<SignIn />} />  {/* SignIn route */}
            <Route path="/search" element={<SearchBar/>} />
            <Route path="/signout" element={<SignOut/>} />
            <Route path="/profile" element={<ProfilePage/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
