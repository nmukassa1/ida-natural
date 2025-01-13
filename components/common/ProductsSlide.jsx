import ProductCard from "@/components/common/ProductCard";
import FeaturesRemote from "../HomePage/Features/FeaturesRemote";

function ProductsSlide() {
    return ( 
        <>
            <div className="global-align-left overflow-x-scroll">
                <div className="flex gap-4 mt-4">
                    {Array(5).fill().map((_, i) => {
                        let position;
                        if(i === 4) position = 'global-align-margin-right'

                        return (
                            <ProductCard key={i} className={position} />
                        )
                    })}
                </div>
            </div>  
            {/* <FeaturesRemote /> */}
        </>
     );
}

export default ProductsSlide;