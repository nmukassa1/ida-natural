import ProductsSlide from "./ProductsSlide";
import { collections } from "@/lib/hooks";

function CategoriesSlide() {
    const products = collections.flatMap(collection => collection.subMenu);
    console.log(products);
    
    
    return ( 
        <div className="mt-8">
            <div className="global-align-center">
                <h1 className="text-4xl">Collections</h1>
                <ul className="flex gap-2 mt-4 overflow-scroll">
                    {products.map((product, index) => (
                        <li key={index} className="text-lg pill-button-sm cursor-pointer">{product}</li>
                    ))}
                </ul>
            </div>
            <ProductsSlide />
        </div>  
     );
}

export default CategoriesSlide;