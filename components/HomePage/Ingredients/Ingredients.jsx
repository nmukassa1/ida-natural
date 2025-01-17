import ImagePlaceholder from "@/components/common/ImagePlaceholder";
import RoundedContainer from "@/components/common/RoundedContainer";

function Ingredients() {
    return ( 
        <RoundedContainer className="p-6 flex flex-col mt-12">
            <h1 className="text-4xl">Ingredients</h1>
            <div className="grid lg:grid-cols-2 gap-12 grow mt-6">
                <div className="rounded-md overflow-hidden">
                    <ImagePlaceholder />
                </div>
                <div className="grid grid-cols-2 gap-8">
                    {Array(4).fill().map((_, index) => (
                        <div key={index} className="rounded-md overflow-hidden">
                            <ImagePlaceholder />
                        </div>
                    ))}
                </div>
            </div>
        </RoundedContainer>
     );
}

export default Ingredients;