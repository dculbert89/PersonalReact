import { Contact } from "./components/Contact/Contact";
import { Footer } from "./components/Footer/Footer";
import { Intro } from "./components/Intro/Intro";
import { Navbar } from "./components/NavBar/NavBar";
import { Portfolio } from "./components/Portfolio/Portfolio";
import { Skills } from "./components/Skills/Skills";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Skills />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
