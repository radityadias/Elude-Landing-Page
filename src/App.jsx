import './App.css'
import Navbar from "./components/Navbar.jsx";
import Home from './components/Home.jsx';
import About from "./components/About.jsx";
import Values from "./components/Values.jsx";
import Footer from "./components/Footer.jsx";
import userInterSectionObserver from "./hooks/userInterSectionObserver.js";


function App() {

    const observerOptions = {
        root: null, // defaults to the viewport
        rootMargin: '0px',
        threshold: 0.2,
    };

    const [homeRef, isHomeVisible] = userInterSectionObserver(observerOptions);
    const [aboutRef, isAboutVisible] = userInterSectionObserver(observerOptions);
    const [valuesRef, isValuesVisible] = userInterSectionObserver(observerOptions);
    const [footerRef, isFooterVisible] = userInterSectionObserver(observerOptions);


    return (
        <>
            <section
                id="home"
                className="h-fit md:h-screen bg-no-repeat bg-cover"
            >
                <video
                    className="absolute inset-0 w-full h-full object-cover -z-10"
                    autoPlay
                    loop
                    muted
                    playsInline
                    poster="/images/backgrounds/background_2.svg"
                >
                    <source src="/images/backgrounds/background_1.webm" type="video/webm" />

                    Your browser does not support the video tag.
                </video>
                <div
                    ref={homeRef} // Attach the ref to the content wrapper
                    className={`mx-10 transition-opacity duration-1000 ${isHomeVisible ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Navbar/> {/* Navbar should appear immediately */}
                    <Home/>
                </div>
            </section>

            <section
                id="about"
                className="h-fit md:h-screen bg-no-repeat bg-cover bg-[url('/images/backgrounds/background_2.svg')]"
            >
                <div
                    ref={aboutRef} // Attach the ref to the content wrapper
                    className={`mx-10 transition-opacity duration-1000 ${isAboutVisible ? 'opacity-100' : 'opacity-0'}`}
                >
                    <About/>
                </div>
            </section>

            <section
                id="values"
                className="h-fit md:h-screen bg-no-repeat bg-cover bg-[url('/images/backgrounds/background_3.svg')]"
            >
                <div
                    ref={valuesRef} // Attach the ref to the content wrapper
                    className={`mx-10 transition-opacity duration-1000 ${isValuesVisible ? 'opacity-100' : 'opacity-0'}`}
                >
                    <Values/>
                </div>
            </section>

            <section
                id="footer"
                className="h-full bg-cover bg-[#711C91]"
            >
                <div className="bg-no-repeat md:bg-repeat bg-[url('/images/backgrounds/footer.svg')]">
                    <div
                        ref={footerRef} // Attach the ref to the content wrapper
                        className={`mx-10 transition-opacity duration-1000 ${isFooterVisible ? 'opacity-100' : 'opacity-0'}`}
                    >
                        <Footer/>
                    </div>
                </div>
            </section>
        </>
    )
}

export default App
