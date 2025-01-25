import Link from "next/link";


function NavLink({href, className, title}) {
    return ( 
        <Link href={href} className={`${className} font-medium`}>{title}</Link>
     );
}


export default NavLink;