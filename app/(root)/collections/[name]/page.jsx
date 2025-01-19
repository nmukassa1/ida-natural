import ProductCard from "@/components/common/ProductCard";
import ProductsSlide from "@/components/common/ProductsSlide";
import { collections } from "@/lib/hooks";
import { products } from "@/lib/database/products";
async function page({params}) {
    const name = (await params).name
    const subMenu = collections.find(collection => collection.title === name).subMenu
    return ( 
        <>

        <div className="pb-[20px] bg-background">

            <div className="flex justify-between mt-8 ">
                <h3>22 products</h3>



                <div>
                    <select name="sort-by" id="" className="bg-transparent border-none">
                        <option value="default">Featured</option>
                        <option value="price">Newest</option>
                        <option value="popularity">Price (high to low)</option>
                        <option value="popularity">Price (low to high)</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>

        </div>

        <div className="flex gap-12 relative">
            {/* {subMenu && (
                <ul className="flex flex-col gap-4 mt-4 overflow-scroll shrink-0 lg:w-[10%]">
                    {subMenu.map((item, index) => (
                        <li key={index} className={`pill-button-sm `}>{item}</li>
                    ))}
                </ul>
            )} */}

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
                {Array(14).fill().map((_, i) => {
                    return (
                        <ProductCard key={i} className="md:min-w-full h-[40vh]" product={products[i]} />
                    )
                })}
            </div>
        </div>

        </>
     );
}

export default page;