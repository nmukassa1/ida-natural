import Link from "next/link";
import { useState } from "react";


function NavLink({href, className, title}) {
    const [underline, setUnderline] = useState('w-0')
  

    return ( 
        <Link href={href} className={`${className} font-medium`} onMouseOver={() => setUnderline('w-full')} onMouseLeave={() => setUnderline('w-0')}>
            {title}
            <div className={`h-[2px] ${underline} rounded-full bg-[#FFD95A] transition-all duration-300`}></div>
        </Link>
     );
}


export default NavLink;