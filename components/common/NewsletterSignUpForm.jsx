function NewsletterSignUpForm() {
    return ( 
        <div className="flex justify-center items-center mb-14">
            <div>
                <h1 className="text-xl mb-6">Sign up for updates:</h1>
                <form action="">
                    <input className="w-[560px] border-2 border-black rounded-md p-2 focus:outline-none" type="text" placeholder="Enter your email address" />
                    <button className="border-2 border-black px-4 py-2 ml-6">Sign Up</button>
                </form>
            </div>
        </div>
     );
}

export default NewsletterSignUpForm;