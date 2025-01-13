function FeaturesRemote() {
    return ( 
        <div className="flex items-center gap-8 global-align-center mt-4">
            <div className="grow-1 w-full bg-gray-400 h-[4px]">
                <div className="w-1/3 bg-black h-full"></div>
            </div>

            <div className="flex gap-2">
                <button className="text-white bg-black h-[50px] w-[50px] grid place-content-center rounded-full">{'<'}</button>
                <button className="text-white bg-black h-[50px] w-[50px] grid place-content-center rounded-full">{'>'}</button>
            </div>
        </div>
     );
}

export default FeaturesRemote;