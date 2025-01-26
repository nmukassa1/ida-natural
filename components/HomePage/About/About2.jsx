import ImagePlaceholder from "@/components/common/ImagePlaceholder";

function About2() {
    // return ( 
    //     <div className="container mx-auto py-24">
    //         <div className="border-2 border-black rounded-lg h-[70vh] grid grid-cols-1 lg:grid-cols-2">
    //             <div className="text-center flex flex-col items-center justify-center gap-4">
    //                 <h1 className=" text-4xl">Our Story</h1>
    //                 <p className="w-1/2">We are committed to crafting high-quality, natural products that promote healing and well-being for families, inspired by the transformative power of nature..</p>
    //                 {/* <p className="w-1/2">Born during lockdown, our journey began with a natural cream that healed my grandson's skin condition. We are dedicated to crafting high-quality products using the finest natural ingredients for families seeking safe and effective solutions.</p> */}
    //                 {/* <p className="w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aliquid veritatis sint ut doloremque, odio quo, iste distinctio architecto.</p> */}
    //                 <button className="pill-button mt-4">learn more</button>
    //             </div>
    //             <div className="hidden lg:block overflow-hidden">
    //                 <ImagePlaceholder className="w-[20%]"/>
    //             </div>
    //         </div>
    //     </div>
    //  );
    return ( 
        <div className="h-[70vh] mt-[100px] grid place-content-center bg-gray-200">
                <div className="text-center flex flex-col items-center justify-center gap-4">
                    <h1 className="text-4xl text-center mb-8">Our Story</h1>
                    <p className="w-1/2">
                    We are committed to crafting high-quality, natural products that promote healing and well-being for families, inspired by the transformative power of nature..
                    </p>
                    <button className="pill-button mt-4">learn more</button>
            </div>
        </div>
     );
}

export default About2;