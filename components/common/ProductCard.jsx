import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";

function ProductCard({className, product}) {
    if (!product) {
        return null; // Return null if product is undefined
    }

    return ( 
        <Link href={`/product/${product.slug}`}>
            <div className={`${className} md:min-w-[300px] border-2 border-black rounded-lg overflow-hidden shrink-0`}>
                <div className="h-[180px] md:h-[270px]">
                    <ImagePlaceholder />
                </div>

                <div className="flex items-center justify-between px-2 md:px-4 py-2">
                    <div>
                        <h3 className="text-sm md:text-base">{product.name}</h3>
                        <p className="text-sm md:text-base">£{product.price}</p>
                    </div>
                    <div className="bg-black text-white h-[40px] w-[40px] md:h-[60px] md:w-[60px] rounded-full grid place-content-center text-sm md:text-base">
                        View
                    </div>
                </div>
            </div>
        </Link>
     );
}

export default ProductCard;