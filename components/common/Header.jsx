"use client"
import { useEffect, useState } from "react";
import CartToggle from "../Cart/CartToggle";
import Navbar from "../Navbar/Navbar";
import BrandLogoButton from "./BrandLogoButton";

function Header() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return ( 
        <header className={`h-[70px] z-[999] global-align-center flex items-center justify-between sticky top-0 transition-bg duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
            <BrandLogoButton />
            <Navbar />
            <CartToggle />
        </header>
     );
}

export default Header;