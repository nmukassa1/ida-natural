import Link from "next/link";


function BrandLogoButton({className}) {
    return ( 
        <Link href="/" className={`${className} brand-logo absolute left-1/2 translate-x-[-50%] text-4xl font-bold `}>Ida Natural</Link>
     );
}

export default BrandLogoButton;