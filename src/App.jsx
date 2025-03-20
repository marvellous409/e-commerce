import "./App.css";
import NarBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import ProDuct from "./components/product";
import ArriVal from "./components/arrival";
import Deal from "./components/deal";
import Sellers from "./components/sellers";
import Blog from "./components/blog";
import Latest from  "./components/last";
import Font from  "./components/fooster";

function App() {
  return (
    <div>
      <NarBar />
      <HeroSection />
      <ProDuct />
      <ArriVal />
      <Deal />
      <Sellers />
      <Blog />
      <Latest />
      <Font/>
    </div>
  );
}

export default App;
