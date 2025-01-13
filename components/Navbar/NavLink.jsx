import Link from "next/link";


function NavLink({href, className, title}) {
    return ( 
        <Link href={href} className={`${className}`}>{title}</Link>
     );
}


export default NavLink;