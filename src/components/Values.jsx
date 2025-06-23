function Values() {
    return (
        <>
            <div className="p-5">
                <div className="md:mt-30 text-kuning font-jersey">
                    <h1 className="text-center md:text-left text-3xl md:text-6xl lg:text-7xl">Values</h1>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-10 gap-5 md:gap-24 text-kuning font-jersey">
                    <div className="p-5 border border-kuning min-h-60 flex flex-col justify-around bg-[#331A3D]/90 rounded-lg">
                        <p className="text-center text-3xl md:text-4xl">Stunning Retro Art Style</p>
                        <p className="text-justify text-xl md:text-2xl">
                            Enjoy retro-style visuals inspired by classic games like Sonic and Super Mario Bros.
                        </p>
                    </div>
                    <div className="border border-kuning rounded-lg">
                        <img className="rounded-lg" src="/images/values.svg" alt="values images"/>
                    </div>
                    <div className=" p-5 border border-kuning min-h-60 flex flex-col justify-around bg-[#331A3D]/90 rounded-lg">
                        <p className="text-center text-2xl md:text-4xl">Dynamic & Diverse Levels</p>
                        <p className="text-justify text-xl">
                            Talk through 5 unique levels, from platform mazes to city rooftop jumps, with ever-increasing challenges.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Values;