import Link from "next/link";


function BrandLogoButton({className}) {
    return ( 
        <Link href="/" className={`${className}`}>Ida Natural</Link>
     );
}

export default BrandLogoButton;