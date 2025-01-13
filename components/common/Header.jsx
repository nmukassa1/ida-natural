import CartToggle from "../Cart/CartToggle";
import Navbar from "../Navbar/Navbar";
import BrandLogoButton from "./BrandLogoButton";

function Header() {
    return ( 
        <header className="h-[70px] global-align-center flex items-center justify-between sticky top-0 bg-white">
            <BrandLogoButton />
            <Navbar />
            <CartToggle />
        </header>
     );
}

export default Header;