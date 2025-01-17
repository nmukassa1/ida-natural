import ImagePlaceholder from "@/components/common/ImagePlaceholder";

function About2() {
    return ( 
        <div className="global-align-center mt-8">
            <div className="border-2 border-black rounded-lg h-[70vh] grid grid-cols-1 lg:grid-cols-2">
                <div className="text-center flex flex-col items-center justify-center gap-4">
                    <h1 className=" text-4xl">Our Story</h1>
                    <p className="w-1/2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, aliquid veritatis sint ut doloremque, odio quo, iste distinctio architecto.</p>
                    <button className="pill-button mt-4">learn more</button>
                </div>
                <div className="hidden lg:block">
                    <ImagePlaceholder className="w-[20%]"/>
                </div>
            </div>
        </div>
     );
}

export default About2;