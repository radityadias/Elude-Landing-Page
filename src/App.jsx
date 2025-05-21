import './App.css'

function App() {
    return (
        <>
            <div className="h-screen flex items-center justify-center">
                <div className="grid grid-cols-1 justify-center">
                    <div className="text-center slide-in-top">
                        <h1 className="font-jersey text-9xl text-kuning">ELUDE : THE NUSANTARA</h1>
                    </div>
                    <div className="flex items-center justify-center font-jersey text-kuning p-5 slide-in-bottom">
                        <ul className="list-disc list-inside text-5xl">
                            <li>Muhammad Raditya Nur Aziz | 22.11.4733 </li>
                            <li>Muhammad Azhar Firdaus | 22.11.4695</li>
                            <li>Taufiq Kurniawan Akbar | 22.11.4719</li>
                            <li>Alvin Haris Suherdi | 22.11.4711</li>
                            <li>Tigor Neilson Sinaga | 22.11.4725</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App
