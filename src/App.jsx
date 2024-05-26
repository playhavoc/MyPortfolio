import styles from "./App.module.css";
import { Hero } from "./components/Me/Hero";
import { Navbar } from "./components/navbar/Navbar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
