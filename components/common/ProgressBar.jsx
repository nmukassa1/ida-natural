function ProgressBar({children, progress, className}) {
    return ( 
        <div className={`${className} flex items-center gap-12`}>
            <div className="progress-bar w-full h-[6px] bg-gray-200 rounded-full">
                <div className={`h-full w-1/4 bg-black rounded-full transition duration-150 ease-linear`}></div>
                {/* <div className={`h-full w-[${progress}%] bg-black rounded-full transition duration-150 ease-linear`}></div> */}
            </div>

            <div className="carousel-buttons flex items-center gap-6">
                {children}
            </div>
        </div>
     );
}

export default ProgressBar;