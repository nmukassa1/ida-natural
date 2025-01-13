import ProductsSlide from "./ProductsSlide";

function CategoriesSlide() {
    return ( 
        <div className="mt-8">
            <div className="global-align-center">
                <h1 className="text-4xl">Collections</h1>
                <ul className="flex gap-2 mt-4">
                    <li>
                        <button className="pill-button-sm">Shampoo</button>
                    </li>
                    <li>
                        <button className="pill-button-sm">Oils</button>
                    </li>
                    <li>
                        <button className="pill-button-sm">Bath Bombs</button>
                    </li>
                    <li>
                        <button className="pill-button-sm">Scents</button>
                    </li>
                </ul>
            </div>
            <ProductsSlide />
        </div>  
     );
}

export default CategoriesSlide;