"use client"
import CategoriesSlide from "@/components/common/CategoriesSlide";
import { usePathname } from 'next/navigation'

function layout({children}) {
    const pathname = usePathname()
    let collectionName = pathname.split("/");
    collectionName = collectionName[collectionName.length - 1];
    collectionName = collectionName.charAt(0).toUpperCase() + collectionName.slice(1);
    
    return ( 
        <div className="global-align-center">
            <h1 className="text-4xl ">{collectionName}</h1> 
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
            {children}
        </div>
     );
}

export default layout;