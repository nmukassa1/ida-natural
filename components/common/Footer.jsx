function Footer() {
    return ( 
        <footer className="h-[100px] bg-pink-50 mt-[150px] flex flex-col items-center justify-center text-center">
            <div className="flex gap-4 mb-[100px]">
                <a href="#" className="text-pink-600">contact us</a>
                <a href="#" className="text-pink-600">faq</a>
                <a href="#" className="text-pink-600">shipping & returns</a>
                <a href="#" className="text-pink-600">order tracking</a>
            </div>
            <div className="flex gap-4 mb-2">
                <a href="#" className="text-gray-600">privacy policy</a>
                <a href="#" className="text-gray-600">set my cookie choices</a>
                <a href="#" className="text-gray-600">terms</a>
                <a href="#" className="text-gray-600">accessibility</a>
                <a href="#" className="text-gray-600">cookie policy</a>
            </div>
            <div className="text-gray-500 text-sm pb-6">
                © 2025 coty operations
            </div>
        </footer>
     );
}

export default Footer;