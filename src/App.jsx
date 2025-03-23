import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ProDuct from "./components/product";
import ArriVal from "./components/arrival";
import Deal from "./components/deal";
import Sellers from "./components/sellers";
import Accessories from "./components/accessories";
import Men from "./components/men";
import Women from "./components/women";
import Latest from "./components/last";
import Font from "./components/fooster";

function Home() {
  return (
    <>
      <HeroSection />
      <ProDuct />
      <ArriVal />
      <Deal />
      <Sellers />
      <Latest />
    </>
  );
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/men" element={<Men />} />
        <Route path="/women" element={<Women />} />
        <Route
          path="*"
          element={
            <div className="text-center mt-10">
              <h1 className="text-2xl font-bold">Page 404 Not Found</h1>
              <Link to="/" className="text-blue-500 underline">
                Go Back Home
              </Link>
            </div>
          }
        />
      </Routes>
      <Font />
    </Router>
  );
}

export default App;
