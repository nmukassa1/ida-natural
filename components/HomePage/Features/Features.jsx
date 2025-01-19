import FeaturesHeader from "./FeaturesHeader";
import ProductsSlide from "../../common/ProductsSlide";

function Features({title}) {
    return ( 
        <div className="mt-8">
            <FeaturesHeader title={title} />
            <ProductsSlide />
        </div>
     );
}

export default Features;