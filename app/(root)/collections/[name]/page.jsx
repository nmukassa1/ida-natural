import ProductCard from "@/components/common/ProductCard";
import ProductsSlide from "@/components/common/ProductsSlide";
import { collections } from "@/lib/hooks";

async function page({params}) {
    const name = (await params).name
    const subMenu = collections.find(collection => collection.title === name).subMenu
    return ( 
        <>

        <div className="sticky top-[70px] pb-[20px] bg-white">
            {subMenu && (
                <ul className="flex gap-2 mt-4">
                    {subMenu.map((item, index) => (
                        <li key={index} className={`pill-button-sm `}>{item}</li>
                    ))}
                </ul>
            )}

            <div className="flex justify-between mt-8 ">
                <h3>22 products</h3>
                <div>
                    <select name="sort-by" id="">
                        <option value="default">Featured</option>
                        <option value="price">Newest</option>
                        <option value="popularity">Price (high to low)</option>
                        <option value="popularity">Price (low to high)</option>
                        <option value="rating">Rating</option>
                    </select>
                </div>
            </div>

        </div>

            <div className="flex gap-6 mt-4 grid grid-cols-4">
                    {Array(14).fill().map((_, i) => {
                        return (
                            <ProductCard key={i} className="w-full" />
                        )
                    })}
                </div>
        </>
     );
}

export default page;