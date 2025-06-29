function Footer() {
    return (
        <>
            <div className="p-5 grid grid-cols-1 md:grid-cols-3 text-center text-kuning">
                <div className="md:flex items-center justify-center hidden">
                    <img src="/elude_logo.svg" alt=""/>
                    <p className="text-2xl">Radiobody Studio</p>
                </div>
                <div className="flex justify-center items-center gap-5">
                    <p className="font-jersey text-4xl">Elude: The Nusantara</p>
                </div>
                <div className="hidden md:flex justify-center items-center ">
                    <a href="https://senryou.itch.io/elude-the-nusantara" type="button" className="py-2.5 px-5 mb-2 mt-5 border font-jersey text-xl text-kuning border-kuning bg-[#331A3D] flex items-center justify-center gap-2">
                        <img src="/icons/itch.svg" alt="itch.io"/>
                        Visit Itch.io
                    </a>
                </div>
            </div>
            <div>
                <p className="p-5 md:mt-5 text-center text-xs font-thin text-kuning">Copyright © 2025 Radiobody Studio </p>
            </div>
        </>
    )
}

export default Footer;