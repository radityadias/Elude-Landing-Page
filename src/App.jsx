import './App.css'
import Navbar from "./components/Navbar.jsx";
import Home from './components/Home.jsx';
import About from './components/About.jsx';

function App() {
    return (
        <>
            <section id="home" className="bg-[url('../../public/images/backgrounds/background_1.svg')] h-screen">
                <Navbar />
                <Home />
            </section>
            <section id="about" className="bg-[url('../../public/images/backgrounds/background_2.svg')] h-screen">
                <About />
            </section>
            <section id="values" className="bg-[url('../../public/images/backgrounds/background_3.svg')] h-screen">
                <div className="h-screen flex items-center justify-center">
                    <div className="grid grid-cols-1 justify-center">
                        <div className="text-center slide-in-top">
                            <h1 className="font-jersey text-3xl text-kuning md:text-6xl lg:text-8xl">ELUDE : THE NUSANTARA</h1>
                        </div>
                        <div className="flex items-center justify-center font-jersey text-kuning p-5 slide-in-bottom">
                            <ul className="list-disc list-inside text-xl md:text-3xl lg:text-4xl">
                                <li>Muhammad Raditya Nur Aziz | 22.11.4733 </li>
                                <li>Muhammad Azhar Firdaus | 22.11.4695</li>
                                <li>Taufiq Kurniawan Akbar | 22.11.4719</li>
                                <li>Alvin Haris Suherdi | 22.11.4711</li>
                                <li>Tigor Neilson Sinaga | 22.11.4725</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default App
