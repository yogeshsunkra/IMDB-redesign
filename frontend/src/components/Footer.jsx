import React from 'react';
import PlayIcon from 'src/assets/playIcon.svg?react';
import Instagram from 'src/assets/footer/instagram.svg?react';
import Twitter from 'src/assets/footer/twitter.svg?react';
import Youtube from 'src/assets/footer/youtube.svg?react';
import Tiktok from 'src/assets/footer/tiktok.svg?react';
import Facebook from 'src/assets/footer/facebook.svg?react';
import Company from 'src/assets/footer/company.svg?react';
import AdsBtn from 'src/assets/footer/adsBtn.svg?react';
import { useContext } from 'react';
import { DataContext } from 'src/context/DataContext';
import { useState, useEffect } from 'react';

const Footer = () => {


    const { searched, loading } = useContext(DataContext);



    return (
        <div className="flex flex-col gap-6 w-full h-full justify-center items-center  py-4 bg-black">

            {/* Previously viewed or searched  */}
            <div className="w-full lg:w-[80%]  h-full p-4">

                <p className ="h3  text-white"> Recently Viewed</p>

                {searched && !loading ? (

                    <div></div>


                ) : (
                    <div className='w-full h-20 flex  items-center'>
                        <p className="h4 text-dark-1">
                           You have no recently viewed pages
                        </p>
                    </div>
                )






                }



            </div>

            {/* Standard footer */}
            <div className='flex flex-col gap-8 w-full lg:w-[70%] xl:w-[50%] h-full'>

                {/* buttons */}
                <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                    <button className="flex lg:hidden bg-n-1 text-black px-8 py-1 rounded-2xl items-center p3 font-semibold">Get IMDB app</button>
                    <button className="flex  bg-dark-4  text-blue-700 px-8 py-1 rounded-2xl items-center p3">Sign in for more access</button>
                </div>

                {/* social media */}
                <div className='flex w-full h-full gap-4 p-2 justify-center items-center border-2 border-red-700'>
                    {/* instagram */}
                    <div className="w-full h-full flex flex-col justify-center items-center   lg:border-2 lg:border-dark-2 rounded-lg overflow-hidden p-4">
                        <p className='hidden lg:flex h4-bold'>Follow us on</p>
                        <div className='flex w-full h-full gap-4 py-2 justify-center items-center'>
                            <button className='rounded-full p-3 hover:bg-dark-4'>
                                <Twitter />
                            </button>
                            <button className='rounded-full p-3 hover:bg-dark-4'>
                                <Instagram />
                            </button>
                            <button className='rounded-full p-3 hover:bg-dark-4'>
                                <Facebook />
                            </button>
                            <button className='rounded-full p-3 hover:bg-dark-4'>
                                <Youtube />
                            </button>
                            <button className='rounded-full p-3 hover:bg-dark-4'>
                                <Tiktok />
                            </button>
                        </div>

                    </div>

                    {/* QR */}
                    <div className="hidden lg:flex w-full h-[stretch] justify-between items-center   lg:border-2 lg:border-dark-2 rounded-lg overflow-hidden  gap-4 px-4">
                        <div className='flex flex-col'>
                            <p className='hidden lg:flex h4-bold'>Get the IMDB App</p>
                            <p className='hidden lg:flex text-dark-2/50'>For Andriod & IOS</p>
                        </div>

                        <div className='w-32 h-full border-2 border-white'></div>


                    </div>

                </div>

                {/* links */}
                <div className='flex flex-wrap w-full h-max gap-4 py-2 justify-center items-center px-24 '>


                    <a className="text-white p2">HelpSite</a>
                    <a className="text-white p2">IndexIMDbProBox</a>
                    <a className="text-white p3hover:cursor-pointer">Office</a>
                    <a className="text-white p3hover:cursor-pointer">MojoLicense</a>
                    <a className="text-white p3hover:cursor-pointer">IMDb Data</a>
                    <a className="text-white p3hover:cursor-pointer">Press</a>
                    <a className="text-white p3hover:cursor-pointer">RoomAdvertisingJobsConditions</a>
                    <a className="text-white p3 hover:cursor-pointer">UsePrivacy</a>
                    <a className="text-white p3hover:cursor-pointer">Policy</a>
                    <a className="text-white p3 hover:cursor-pointer ">Your Ads Privacy Choices</a>


                    <a className="text-white p3 flex gap-2">
                        <AdsBtn />Your Ads Privacy Choices</a>

                </div>


                {/* copyright */}
                <div className='w-full h-full flex flex-col gap-4 justify-center items-center'>

                    <Company />

                    <p className='p3'>&copy; 2026 IMDB. All rights reserved.</p>

                </div>

            </div>


        </div>
    )

}


export default Footer;