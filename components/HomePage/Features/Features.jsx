import FeaturesHeader from "./FeaturesHeader";
import ProductsSlide from "../../common/ProductsSlide";
import ProductCarousel from "@/components/common/ProductCarousel";
import {products} from '@/lib/database/products'

function Features({title}) {
    return ( 
        <div className="container mx-auto mt-8">
            <FeaturesHeader title={title} />
            <ProductCarousel products={products} />
            {/* <ProductsSlide /> */}
        </div>
     );
}

export default Features;