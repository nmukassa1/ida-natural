import Link from "next/link";
import ProductsSlide from "./ProductsSlide";
import { collections } from "@/lib/database/products";

function Collections() {
    const products = collections.flatMap(collection => collection.subMenu);
    // console.log(products);
    
    
    return ( 
        // <div className="container mx-auto mt-[100px]">
        <div className="mt-[100px]">
            <h1 className="text-4xl text-center mb-8">Shop Collections</h1>

            <div className="flex items-center gap-6 overflow-scroll">
                {collections.map((collection, index) => (
                    <Link href={`/collections/${collection.name}`} key={collection.id} className={`${index === 0 && 'ml-4 lg:ml-[95px]'} ${index === collections.length -1 && 'mr-4 lg:mr-[95px]'} h-[30vw] w-[30vw] md:h-[50vh] md:w-[50vh] shrink-0 rounded-2xl md:rounded-[50px] bg-gray-200 grid place-content-center`}>
                        <h2 className="text-2xl">{collection.title}</h2>
                    </Link>
                ))}
            </div>
        </div>  
     );
}

export default Collections;