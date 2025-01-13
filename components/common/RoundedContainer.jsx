function RoundedContainer({children, className}) {
    return ( 
        <div className="global-align-center">
            <div className={`${className} border-2 border-black rounded-lg h-[70vh]`}>
                {children}
            </div>
        </div>
     );
}

export default RoundedContainer;