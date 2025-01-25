"use client"
import { useEffect, useState } from "react";
import CartToggle from "../Cart/CartToggle";
import Navbar from "../Navbar/Navbar";
import BrandLogoButton from "./BrandLogoButton";
import { Menu } from "lucide-react";

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
        <header className={`z-[999] sticky top-0 transition-bg duration-300 relative text-[#f3e9e9] bg-[#212121]`}>
            <div className="w-[90vw] md:container mx-auto flex items-center justify-between h-[70px]">
                <Navbar />
                <button className="md:hidden"><Menu /></button>
                <BrandLogoButton />

                <div className="ml-auto">
                    <CartToggle />
                </div>
            </div>
        </header>
     );
}

export default Header;