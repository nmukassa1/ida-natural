import {categories} from '@/lib/database/products'
import Link from "next/link";
import ImagePlaceholder from "./ImagePlaceholder";
function CollectionsNavbar({pathname}) {
    console.log(pathname);
    
    return ( 
        <ul className="grid grid-cols-6 gap-2 mt-4">
            {categories.map((category, index) =>{
                // const { title, href} = collection;
                return (
                    <Link href={'#'} key={index}>
                        <div className="lg:h-[60vh] relative">
                            {category.img ? (<img src={category.img} alt={category.title} className="h-full object-cover" />) : <ImagePlaceholder />}
                            {/* <ImagePlaceholder /> */}
                            <p className='absolute bottom-4 left-4'>{category.title}</p>
                        </div>
                    </Link>
                )
            })}
        </ul>
     );
}

export default CollectionsNavbar;