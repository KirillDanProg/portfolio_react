import "./App.scss";
import { Main } from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Contacts from "./components/contacts/Contacts";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <Main />
        <Skills />
        <Projects />
        <Contacts />
        <Footer />
      </div>
    </div>
  );
}

export default App;
