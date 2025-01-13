function PillButton({children, className}) {
    return ( 
        <div className={`${className} pill-button`}>
            {children}
        </div>
     );
}

export default PillButton;