import "./App.css";
import Card from "./components/Card";
import Destination from "./components/Destination";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import Journeys from "./components/Journeys";
import NewAge from "./components/NewAge";
import Testimonials from "./components/Testimonials";
import Travel from "./components/Travel";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <HeroSection
          firstHeading="Take the world for ride"
          secondHeading="Journeys that can't be beat "
        />
        <Card />
        <Destination />
        <Experience />
        <Travel />
        <Journeys />
        <NewAge />
        <Testimonials />
        <Footer />
      </header>
    </div>
  );
}

export default App;
