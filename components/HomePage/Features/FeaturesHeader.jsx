import Link from "next/link";

function FeaturesHeader() {
    return ( 
        <div className="global-align-center">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl "> <strong>Featured</strong> products shop <br />
                our <strong>Top</strong> picks!</h1>

                <h2 className="text-right text-xl w-[600px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nihil, error rerum cum numquam veniam.</h2>
            </div>

            <div className="flex justify-end mt-4">
                <Link href="/collections/features">
                    <div className="pill-button">Featured Products</div>
                </Link>
            </div>
        </div>
     );
}

export default FeaturesHeader;