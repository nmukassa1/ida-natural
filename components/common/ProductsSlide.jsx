import ProductCard from "@/components/common/ProductCard";
import {products} from "@/lib/database/products";

function ProductsSlide() {
    return ( 
        <>
            <div className="global-align-left overflow-x-scroll">
                <div className="grid grid-cols-2 md:grid-cols-initial md:flex gap-4 mt-4">
                    {Array(5).fill().map((_, i) => {
                        let position;
                        if(i === 4) position = 'global-align-margin-right'

                        return (
                            <ProductCard key={i} className={position} product={products[i]} />
                        )
                    })}
                </div>
            </div>  
        </>
     );
}

export default ProductsSlide;