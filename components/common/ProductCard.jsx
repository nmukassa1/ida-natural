import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";


function ProductCard({className, product, animation, duration}) {
    if (!product) {
        return null; // Return null if product is undefined
    }

    return ( 
        <div 
            className={`${className} shrink-0 md:w-full`}
            data-aos={animation}
            data-aos-duration={duration}
            >
            <Link href={`/product/${product.slug}`} className="w-fit">
            <div className="h-[300px] md:h-[60vh] rounded-2xl md:rounded-[50px] overflow-hidden" >
                <ImagePlaceholder />
            </div>

            <div className="flex flex-col items-center justify-center px-2 md:px-4 py-6">
                    <p className="text-sm md:text-base text-center md:whitespace-nowrap overflow-hidden text-ellipsis">{product.name}</p>
                    <p className="text-sm md:text-base">£{product.price}</p>
            </div>
            </Link>
        </div>
     );
}

export default ProductCard;