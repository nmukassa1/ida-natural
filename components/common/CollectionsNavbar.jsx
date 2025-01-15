import {collections } from "@/lib/hooks";
import Link from "next/link";
function CollectionsNavbar({pathname}) {
    console.log(pathname);
    
    return ( 
        <ul className="flex gap-2 mt-4">
            {collections.map((collection, index) =>{
                const { title, href} = collection;
                return (
                    <Link href={href} key={index}>
                        <button className={`pill-button-sm ${pathname === title ? 'bg-black text-white' : 'hover:bg-black hover:text-white'} `}>{title.charAt(0).toUpperCase() + title.slice(1)}</button>
                    </Link>
                )
            })}
        </ul>
     );
}

export default CollectionsNavbar;