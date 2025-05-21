import './App.css'
import navbar from './components/Navbar.jsx'
import Navbar from "./components/Navbar.jsx";

const social_item = [
    {name: "Instagram", path: "instagram.svg", link:"https://youtu.be/dQw4w9WgXcQ?si=od3Ev2IXCX9bhKMl"},
    {name: "Facebook", path: "facebook.svg", link: "https://youtu.be/dQw4w9WgXcQ?si=od3Ev2IXCX9bhKMl"},
    {name: "Youtube", path: "youtube.svg", link: "https://youtu.be/dQw4w9WgXcQ?si=od3Ev2IXCX9bhKMl"},
]

function App() {
    return (
        <>
            <Navbar />
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
                    <div>
                        <ul className="px-4 py-2 text-kuning w-full space-x-4 flex justify-center md:flex lg:hidden">
                            {social_item.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link}>
                                        <img src={`/icons/${item.path}`} alt={item.name.toLowerCase()} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>


        </>
    )
}

export default App
