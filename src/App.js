import './App.css';
import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Offers from "./components/offers/Offers";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <Offers/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
