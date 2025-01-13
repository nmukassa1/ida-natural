import Link from "next/link";

function ValueProposition() {
    return ( 
        <div className="value-proposition">
            <h1 className="text-[4rem] leading-[4rem] font-bold">Because Natural Beauty <br /> Deserves Natural Care.</h1>
            <h2 className="w-[600px] mt-4">Handcrafted beauty products made with integrity, sustainability, and love. Rediscover your skin’s natural radiance.</h2>
            <div className="mt-10">
                <Link href="/shop" className="pill-button">Shop</Link>
            </div>
        </div>
     );
}

export default ValueProposition;