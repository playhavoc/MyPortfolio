import styles from "./App.module.css";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
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
      <Experience />
    </div>
  );
}

export default App;
