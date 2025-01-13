import ImagePlaceholder from "@/components/common/ImagePlaceholder";

function Info() {
    return ( 
        <div className="global-align-center flex items-center gap-8 my-[5%]">
            {Array(3).fill().map((_, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                    <div className="h-[70px] w-[70px] bg-gray-400 rounded-full overflow-hidden">
                        <ImagePlaceholder />
                    </div>
                    <h1 className="mt-2 mb-4">Natural</h1>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, in ratione fugit, dist.</p>
                </div>
            ))}
        </div>
     );
}

export default Info;