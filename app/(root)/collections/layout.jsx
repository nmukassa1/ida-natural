"use client"
import CategoriesSlide from "@/components/common/CategoriesSlide";
import CollectionsNavbar from "@/components/common/CollectionsNavbar";
import { usePathname } from 'next/navigation'

function layout({children}) {
    const pathname = usePathname()
    let collectionName = pathname.split("/");
    collectionName = collectionName[collectionName.length - 1];
    collectionName = collectionName.charAt(0).toUpperCase() + collectionName.slice(1);
    
    return ( 
        <div className="global-align-center mb-14">
             <div className="border-2 border-black rounded-2xl px-8 py-4 flex items-end h-[50vh]">

            <h1 className="text-4xl ">{collectionName === 'Collections' ? 'All' : collectionName}</h1> 
             </div>
            {/* <CollectionsNavbar pathname={collectionName.toLowerCase()} /> */}
            {children}
        </div>
     );
}

export default layout;