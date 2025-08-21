import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import Projet from "./components/Projet/Projet";
import Parcours from "./components/Parcours/parcours";
import APropos from "./components/APropos/APropos";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Parcours />
      <Projet />
      <APropos />
    </div>
  );
}

export default App;
