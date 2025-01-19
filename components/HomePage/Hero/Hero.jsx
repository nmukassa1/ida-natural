import Link from "next/link";
import ValueProposition from "./ValueProposition";

function Hero() {
    return ( 
        <div id="hero" className="px-4 md:px-8 py-8 md:py-[7rem] flex items-center border-b-2">
            <ValueProposition />
        </div>
     );
}

export default Hero;