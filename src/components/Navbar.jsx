import { useState } from 'react'; // Import useState

function Navbar() {
    const list_item = ["Home", "About", "Values", "Footer"]; // Ensure "Footer" matches the section ID
    const social_item = [
        {name: "Instagram", path: "instagram.svg", link:"https://youtu.be/dQw4w9WgXcQ?si=od3Ev2IXCX9bhKMl"},
        {name: "Facebook", path: "facebook.svg", link: "https://youtu.be/dQw4w9WgXcQ?si=od3Ev2IXCX9bhKMl"},
        {name: "Youtube", path: "youtube.svg", link: "https://youtu.be/dQw4w9WgXcQ?si=od3Ev2IXCX9bhKMl"},
    ];

    const [isMenuOpen, setIsMenuOpen] = useState(false); // State to control mobile menu visibility

    const handleScroll = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMenuOpen(false); // Close the menu after clicking a link
        }
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <nav className="w-full z-20 slide-in-top">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="https://elude.my.id" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="/elude_logo.svg" className="h-8" alt="Elude Logo"/>
                        <span className="self-center text-xl md:text-3xl whitespace-nowrap text-kuning font-jersey ">Elude : The Nusantara</span>
                    </a>
                    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
                        <ul className=" flex-row px-4 py-2 text-kuning w-full space-x-4 hidden md:hidden lg:flex">
                            {social_item.map((item, index) => (
                                <li key={index}>
                                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                                        <img src={`/icons/${item.path}`} alt={item.name.toLowerCase()} />
                                    </a>
                                </li>
                            ))}
                        </ul>
                        {/* Hamburger Button */}
                        <button
                            onClick={toggleMenu} // Use React's onClick
                            type="button"
                            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-kuning rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-kuning "
                            aria-controls="navbar-sticky"
                            aria-expanded={isMenuOpen} // Reflect menu state
                        >
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                            </svg>
                        </button>
                    </div>

                    {/* Mobile Menu / Desktop Menu Container */}
                    <div
                        // Conditional classes for mobile menu overlay
                        className={`
                            items-center justify-between w-full md:flex md:w-auto md:order-1
                            ${isMenuOpen
                            ? 'fixed inset-0 z-50 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.9)] transition-transform duration-300 ease-in-out transform translate-x-0'
                            : 'fixed inset-0 z-50 flex flex-col justify-center items-center bg-[rgba(0,0,0,0.9)] transition-transform duration-300 ease-in-out transform translate-x-full md:relative md:flex md:transform-none md:bg-transparent md:inset-auto'
                        }
                            // Important: On medium screens and up, ensure it's always visible as flex
                            md:flex md:relative md:bg-transparent md:transform-none md:translate-x-0
                        `}
                        id="navbar-sticky"
                    >
                        <ul className="flex flex-col p-4 md:p-0 mt-4 md:space-x-9 lg:space-x-14 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 rounded-lg bg-[rgba(0,0,0,0.5)] md:bg-transparent">
                            {list_item.map((item, index) => (
                                <li key={index}>
                                    <a
                                        href={`#${item.toLowerCase()}`}
                                        className="block py-2 px-3 text-kuning md:p-0 font-jersey text-3xl md:text-xl hover:text-white" // Adjust text size for mobile menu
                                        onClick={(e) => {
                                            e.preventDefault();
                                            handleScroll(item.toLowerCase());
                                        }}
                                        aria-current="page">{item}
                                    </a>
                                </li>
                            ))}
                            {/* Social items for mobile menu */}
                            <ul className="flex flex-row px-4 py-2 text-kuning w-full space-x-4 mt-8 md:hidden justify-center">
                                {social_item.map((item, index) => (
                                    <li key={index}>
                                        <a href={item.link} target="_blank" rel="noopener noreferrer">
                                            <img src={`/icons/${item.path}`} alt={item.name.toLowerCase()} className="w-8 h-8" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;