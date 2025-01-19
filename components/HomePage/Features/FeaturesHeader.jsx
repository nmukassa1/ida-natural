import PillButton from "@/components/common/PillButton";
import Link from "next/link";

function FeaturesHeader({title}) {
    return ( 
        <div className="global-align-center">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl ">{title}</h1>
                {/* <h1 className="text-2xl "> <strong>Featured</strong> products shop <br />
                our <strong>Top</strong> picks!</h1> */}

                {/* <h2 className="text-right text-md w-[400px]">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero nihil, error rerum cum numquam veniam.</h2> */}
                <PillButton className="px-[20px] py-[10px]">
                    <Link href="/collections/features">
                    Featured Products
                        {/* <div className="pill-button">Featured Products</div> */}
                    </Link>

                </PillButton>
            </div>

            {/* <div className="flex justify-end mt-4">
            </div> */}
        </div>
     );
}

export default FeaturesHeader;