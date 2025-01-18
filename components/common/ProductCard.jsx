import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";

function ProductCard({className, product}) {
    if (!product) {
        return null; // Return null if product is undefined
    }

    return ( 
        <Link href={`/product/${product.slug}`}>
            <div className={`${className} md:min-w-[300px] rounded-lg overflow-hidden shrink-0 shadow-sm`}>
                <div className="h-[180px] md:h-[270px]">
                    <ImagePlaceholder />
                </div>

                <div className="flex items-center justify-between px-2 md:px-4 py-6 bg-[#f0e0ef]">
                        <h3 className="text-sm md:text-base whitespace-nowrap overflow-hidden text-ellipsis w-3/4">{product.name}</h3>
                        <p className="text-sm md:text-base">£{product.price}</p>
                </div>
            </div>
        </Link>
     );
}

export default ProductCard;