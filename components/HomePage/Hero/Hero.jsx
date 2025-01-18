import Link from "next/link";
import ValueProposition from "./ValueProposition";

function Hero() {
    return ( 
        <div className="px-4 md:px-8 py-8 md:py-[4rem] flex items-center">
            <ValueProposition />
        </div>
     );
}

export default Hero;