import Link from "next/link";


function BrandLogoButton({className}) {
    return ( 
        <Link href="/" className={`${className} absolute left-1/2 translate-x-[-50%] text-2xl`}>Ida Natural</Link>
     );
}

export default BrandLogoButton;