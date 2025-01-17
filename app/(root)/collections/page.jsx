"use client"
import ProductCard from "@/components/common/ProductCard";
import Features from "@/components/HomePage/Features/Features";
import {products} from '@/lib/database/products'
import { collections } from "@/lib/database/products";


function CollectionsPage() {
   if(!products) return null
   
    return ( 
      <div className="mt-4">
         <div className="sticky top-[70px] pb-[20px] bg-white">
            {/* {collections && (
                <ul className="flex gap-2 mt-4 overflow-scroll">
                    {collections.map((item, index) => (
                        <li key={index} className={`pill-button-sm `}>{item}</li>
                    ))}
                </ul>
            )} */}

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

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
           {products.map((product) => (
               <ProductCard product={product} key={product.id} />
           ))}
        </div>
      </div>
     );
}

export default CollectionsPage;