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
        <header className={`z-[999] sticky top-0 transition-bg duration-300 relative ${isScrolled ? 'bg-white' : 'bg-transparent'}`}>
            <div className="container mx-auto flex items-center justify-between h-[70px]">
                <Navbar />
                <BrandLogoButton />
                <CartToggle />
            </div>
        </header>
     );
}

export default Header;