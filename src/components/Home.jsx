function Home() {
    const social_item = [
        {name: "Instagram", path: "instagram.svg", link:"https://youtu.be/dQw4w9WgXcQ?si=od3Ev2IXCX9bhKMl"},
        {name: "Facebook", path: "facebook.svg", link: "https://youtu.be/dQw4w9WgXcQ?si=od3Ev2IXCX9bhKMl"},
        {name: "Youtube", path: "youtube.svg", link: "https://youtu.be/dQw4w9WgXcQ?si=od3Ev2IXCX9bhKMl"},
    ]

    return (
        <>
            <div className="p-5">
                <div className="grid grid-cols-2 gap-1 mt-20">
                    <div
                        className="col-span-2 slide-in-top font-jersey text-3xl text-kuning md:text-6xl lg:text-8xl text-center md:text-left lg:text-left">
                        <h1>ELUDE :</h1>
                        <h1>THE NUSANTARA</h1>
                    </div>
                    <div className="col-span-2 md:col-span-1 lg:col-span-1 text-kuning font-jersey text-2xl text-center md:text-left lg:text-left">
                        <p>Welcome to the futuristic world of Elude the Nusantara – a sci-fi adventure that will test
                            your brain and reflexes!</p>
                        <p className="mt-5">Come on, start your adventure now! Download Elude the Nusantara on itch.io
                            and conquer every challenge!</p>
                    </div>
                </div>
                <div className="flex justify-center md:justify-start">
                    <button type="button" className="py-2.5 px-2 mb-2 mt-5 border font-jersey text-xl text-kuning border-kuning bg-[#331A3D] flex items-center justify-center gap-2">
                        <img src="/icons/itch.svg" alt="itch.io"/>
                        Visit Itch.io
                    </button>
                </div>
            </div>
        </>
    )
}

export default Home