import ImagePlaceholder from "@/components/common/ImagePlaceholder";

function Info() {
    return ( 
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-center gap-8 pb-24">
            {[
                {
                    title: "Vegan",
                    description: "Our entire collection is vegan and cruelty free.",
                    icon: "🐰" // Placeholder for the vegan icon
                },
                {
                    title: "Fast & Free Shipping",
                    description: "Doorstep delivery to most of the US.",
                    icon: "📦" // Placeholder for the shipping icon
                },
                {
                    title: "Recyclable",
                    description: "All packaging is recyclable and eco conscious.",
                    icon: "♻️" // Placeholder for the recyclable icon
                }
            ].map((item, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                    <div className="">
                        <span className="text-3xl">{item.icon}</span>
                    </div>
                    <h1 className="mt-2 mb-4 font-bold text-3xl">{item.title}</h1>
                    <p className="text-xl text-gray-600">{item.description}</p>
                </div>
            ))}
        </div>
     );
}

export default Info;