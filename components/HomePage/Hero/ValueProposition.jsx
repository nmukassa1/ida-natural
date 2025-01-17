import Link from "next/link";

function ValueProposition() {
    return ( 
        <div className="value-proposition">
            <h1 className="text-[2rem] md:text-[4rem] leading-[2.25rem] md:leading-[4rem] font-bold">Because Natural Beauty <br className="hidden md:block" /> Deserves Natural Care.</h1>
            <h2 className="w-full md:w-[600px] mt-4 text-sm md:text-base">Handcrafted beauty products made with integrity, sustainability, and love. Rediscover your skin's natural radiance.</h2>
            <div className="mt-6 md:mt-10">
                <Link href="/collections" className="pill-button">Shop</Link>
            </div>
        </div>
     );
}

export default ValueProposition;