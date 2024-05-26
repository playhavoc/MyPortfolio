import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Hero } from "./components/Me/Hero";
import { Skills } from "./components/Skills/Skills";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
      <Skills />
    </div>
  );
}

export default App;
