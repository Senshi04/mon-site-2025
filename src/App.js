import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Projet from "./components/Projet/Projet";
import Parcours from "./components/Parcours/Parcours";
import APropos from "./components/APropos/APropos";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Parcours />
      <Projet />
      <APropos />
      <Footer />
    </div>
  );
}

export default App;
