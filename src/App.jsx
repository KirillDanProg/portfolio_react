import './App.scss';
import {Main} from "./components/main/Main";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import Offers from "./components/offers/Offers";
import Contacts from "./components/contacts/Contacts";
import Footer from "./components/footer/Footer";
import Sidebar from "./components/nav/Sidebar";

function App() {

    return (
            <div className="App">
                <Sidebar/>
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
