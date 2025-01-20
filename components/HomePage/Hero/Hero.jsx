import Link from "next/link";
import ValueProposition from "./ValueProposition";

function Hero() {
    return ( 
        <div id="hero" className="py-8 md:py-[7rem] flex items-center border-b-2 container mx-auto">
            <ValueProposition />
        </div>
     );
}

export default Hero;