import './App.css'
import Navbar from "./components/Navbar.jsx";
import Home from './components/Home.jsx';
import About from "./components/About.jsx";
import Values from "./components/Values.jsx";
import Footer from "./components/Footer.jsx";


function App() {
    return (
        <>
            <section id="home" className="h-fit md:h-screen bg-no-repeat bg-cover bg-[url('/images/backgrounds/background_1.gif')]">
                <div className="mx-10">
                    <Navbar/>
                    <Home/>
                </div>
            </section>
            <section id="about" className="h-fit md:h-screen bg-no-repeat bg-cover bg-[url('/images/backgrounds/background_2.svg')]">
                <div className="mx-10">
                    <About/>
                </div>
            </section>
            <section id="values" className="h-fit md:h-screen bg-no-repeat bg-cover bg-[url('/images/backgrounds/background_3.svg')]">
                <div className="mx-10">
                    <Values/>
                </div>
            </section>
            <section id="Footer" className="h-full bg-cover bg-[#711C91]">
                <div className="bg-no-repeat md:bg-repeat bg-[url('/images/backgrounds/footer.svg')]">
                    <div className="mx-10">
                        <Footer/>
                    </div>
                </div>

            </section>

        </>
    )
}

export default App
