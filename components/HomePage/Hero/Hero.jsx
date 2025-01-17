import Link from "next/link";
import ValueProposition from "./ValueProposition";

function Hero() {
    return ( 
        <div className="global-align-center">
            <div className="border-2 border-black rounded-2xl px-8 py-[4rem] flex items-center">
               <ValueProposition />
            </div>
        </div>
     );
}

export default Hero;