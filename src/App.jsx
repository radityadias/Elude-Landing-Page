import './App.css'
import Navbar from "./components/Navbar.jsx";
import Home from './components/Home.jsx';
import About from "./components/About.jsx";
import Values from "./components/Values.jsx";


function App() {
    return (
        <>
            <section id="home" className="h-screen bg-[url('/images/backgrounds/background_1.gif')]">
                <div className="mx-10">
                    <Navbar/>
                    <Home/>
                </div>
            </section>
            <section id="about" className="h-screen bg-[url('/images/backgrounds/background_2.svg')]">
                <div className="mx-10">
                    <About/>
                </div>
            </section>
            <section id="values" className="h-screen bg-[url('/images/backgrounds/background_3.svg')]">\
                <div className="mx-10">
                    <Values/>
                </div>
            </section>

        </>
    )
}

export default App
