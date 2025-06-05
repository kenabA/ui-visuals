import About from "./components/about-section/about";
import Hero from "./components/hero-section/hero";
import "./index.css";

function App() {
  return (
    <>
      {/* Later, will integrate react router dom, and migrate the Hero and ABout component to a deeper level on the Landing Page component */}
      <Hero />
      <About />
    </>
  );
}

export default App;
