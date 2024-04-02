
export function Newsletter() {

    return (
        <div className="w-screen h-[60vh] lg:h[50vh]">
            <h1 className="text-black text-4xl font-extrabold pt-20 pl-10">NEVER MISS A RECIPE.</h1>
            <p className='text-2xl font-bold p-10'>Sign up for the newsletter to be the first to know about new recipes!</p>
            <div className="pl-10">
                <input type="text" placeholder="Enter Your Email" className="outline outline-black p-3" />
                <button className="text-black text-bold text-xl p-3">Join Now</button>
            </div>
            <h4 className="pt-10 pl-10">
                By signing up you agree to receive recurring automated marketing messages from Recipe App. View Terms and Privacy.
            </h4>
        </div>
    )
}