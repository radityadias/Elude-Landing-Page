import '../css/About.css'

function About() {
    return (
        <>
            <div className="p-5">
                <div className="grid grid-cols-1 md:grid-cols-2 mt-20 md:mt-40">
                    <div className="order-2 md:order-1 flex justify-center md:pr-5">
                        <div id="indicators-carousel" className="relative w-64 md:w-full" data-carousel="static">
                            {/* Carousel wrapper */}
                            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                                {/* Item 1 */}
                                <div className="hidden duration-700 ease-in-out ring" data-carousel-item="active">
                                    <video
                                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border-4 border-kuning rounded-lg"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        poster="/images/about.svg"
                                    >
                                        <source src="/images/about.webm" type="video/webm" />

                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                {/* Item 2 */}
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <video
                                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border-4 border-kuning rounded-lg"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        poster="/images/about.svg"
                                    >
                                        <source src="/images/about.webm" type="video/webm" />

                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                {/* Item 3 */}
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <video
                                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border-4 border-kuning rounded-lg"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        poster="/images/about.svg"
                                    >
                                        <source src="/images/about.webm" type="video/webm" />

                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                {/* Item 4 */}
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <video
                                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border-4 border-kuning rounded-lg"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        poster="/images/about.svg"
                                    >
                                        <source src="/images/about.webm" type="video/webm" />

                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                                {/* Item 5 */}
                                <div className="hidden duration-700 ease-in-out" data-carousel-item>
                                    <video
                                        className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 border-4 border-kuning rounded-lg"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        poster="/images/about.svg"
                                    >
                                        <source src="/images/about.webm" type="video/webm" />

                                        Your browser does not support the video tag.
                                    </video>
                                </div>
                            </div>

                            {/* Slider indicators */}
                            <div className="absolute z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse bottom-8 md:bottom-10 left-1/2">
                                <button type="button" className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-white" aria-current="true"
                                        aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                <button type="button" className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-kuning" aria-current="false"
                                        aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                <button type="button" className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-kuning" aria-current="false"
                                        aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                <button type="button" className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-kuning" aria-current="false"
                                        aria-label="Slide 4" data-carousel-slide-to="3"></button>
                                <button type="button" className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-kuning" aria-current="false"
                                        aria-label="Slide 5" data-carousel-slide-to="4"></button>
                            </div>

                            {/* Slider controls */}
                            <button type="button"
                                    className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-2 md:px-4 cursor-pointer group focus:outline-none"
                                    data-carousel-prev>
                                    <span className="inline-flex items-center justify-center md:w-8 md:h-8 w-6 h-6 rounded-full bg-kuning">
                                        <svg width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.646447 4.35355C0.451184 4.15829 0.451184 3.84171 0.646447 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646447 4.35355ZM10 4V4.5H1V4V3.5H10V4Z" fill="#331A3D"/>
                                        </svg>
                                        <span className="sr-only">Previous</span>
                                    </span>
                            </button>
                            <button type="button"
                                    className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-2 md:px-4 cursor-pointer group focus:outline-none"
                                    data-carousel-next>
                                    <span className="inline-flex items-center justify-center md:w-8 md:h-8 w-6 h-6 rounded-full bg-kuning">
                                        <svg className="scale-[-1]" width="10" height="8" viewBox="0 0 10 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0.646447 4.35355C0.451184 4.15829 0.451184 3.84171 0.646447 3.64645L3.82843 0.464466C4.02369 0.269204 4.34027 0.269204 4.53553 0.464466C4.7308 0.659728 4.7308 0.976311 4.53553 1.17157L1.70711 4L4.53553 6.82843C4.7308 7.02369 4.7308 7.34027 4.53553 7.53553C4.34027 7.7308 4.02369 7.7308 3.82843 7.53553L0.646447 4.35355ZM10 4V4.5H1V4V3.5H10V4Z" fill="#331A3D"/>
                                        </svg>
                                        <span className="sr-only">Next</span>
                                    </span>
                            </button>
                        </div>
                    </div>
                    <div className="order-1 md:order-2 flex items-center justify-center">
                        <div className="text-center md:text-right text-kuning font-jersey">
                            <div className="mb-10">
                                <h1 className="text-3xl md:text-6xl lg:text-7xl ">About</h1>
                                <p className="text-2xl">It's about the game actually</p>
                            </div>
                                <p className="text-kuning text-justify pl-0 md:ml-5">
                                    This 2D platformer combines logic-based puzzles with futuristic
                                    trap-dodging challenges. Each level offers a combination of clever
                                    strategy and fast-paced action, wrapped in a stunning sci-fi world
                                    with a touch of Indonesian culture. Experience the satisfaction of
                                    solving tricky puzzles and escaping thrilling futuristic traps!
                                    With stunning visuals and addictive gameplay, Elude the Nusantara
                                    offers a unique experience that will keep you coming back for more.
                                </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;