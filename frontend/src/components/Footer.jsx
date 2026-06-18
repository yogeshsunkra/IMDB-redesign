import React from 'react';

const Footer = () => {


    return (
        <div className="w-full h-full">

            {/* Previously viewed or searched  */}
            <div></div>

            {/* Standard footer */}
            <div>

                {/* buttons */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                    <button className = "flex lg:hidden bg-n-1 text-black px-8 py-1 rounded-2xl items-center p3 font-semibold">Get IMDB app</button>
                    <button className = "flex  bg-dark-4  text-blue-700 px-8 py-1 rounded-2xl items-center p3">Sign in for more access</button>
                </div>

                {/* social media */}
                <div></div>

                {/* links */}
                <div></div>

                {/* copyright */}
                <div></div>

            </div>


        </div>
    )

}


export default Footer;