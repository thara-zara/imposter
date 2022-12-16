import Hero from "./components/Hero/Hero";
import Pcs from "./components/PCS/Pcs";
import Player from "./components/Slider/Player";
import What from "./components/What/What";
import Map from "./components/Roadmap/Map";
import Team from "./components/Team/Team";
import Brand from "./components/Brand/Brand";
import Faq from "./components/FAQ/Faq";
import Comm from "./components/Community/Comm";
import Foot from "./components/Footer/Foot";


function App() {
  return (
    <div className="App">
      <Hero/>
      <What/>
      <Pcs/>
      <Player/>
      <Map/>
      <Team/>
      <Faq/>
      <Comm/>
      <Foot/>
    </div>
  );
}

export default App;
