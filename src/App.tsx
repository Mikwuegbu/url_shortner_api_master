import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ShortnenUrl from "./components/ShortnenUrl";
import Footer from "./components/Footer";

const App = () => (
  <>
    <div className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <ShortnenUrl />
      <Footer />
    </div>
  </>
);

export default App;
