import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";

function ProductCard({className}) {
    return ( 
        <Link href='/product/'>
            <div className={`${className} w-[300px] border-2 border-black rounded-lg overflow-hidden shrink-0`}>
                <div className="h-[270px]">
                    <ImagePlaceholder />
                </div>

                <div className="flex items-center justify-between px-4 py-2">
                    <div>
                        <h3>Body Scrub</h3>
                        <p>£15</p>
                    </div>
                        <div className="bg-black text-white h-[60px] w-[60px] rounded-full grid place-content-center">
                            View
                        </div>
                </div>
            </div>
        </Link>
     );
}

export default ProductCard;