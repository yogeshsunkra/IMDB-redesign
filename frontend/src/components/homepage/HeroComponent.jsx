
import React from "react";
import { useState, useEffect } from 'react';
import PlayIcon from 'src/assets/playIcon.svg?react';
import RatingIcon from 'src/assets/ratingIcon.svg?react';
import Arrow from 'src/assets/arrow.svg?react';


const HeroComponent = () => {


    // const [currentIndex, setCurrentIndex] = useState(0);
    const [items, setItems] = useState([
        {
            title: "Billa",
            img: 'https://m.media-amazon.com/images/M/MV5BZTA0MzU0YzItZWRjZC00YzllLWFmYjMtZWYzZDgyYzRjYTg5XkEyXkFqcGc@._V1_.jpg'
        },
        {
            title: "Kalki 2898AD",
            img: 'https://m.media-amazon.com/images/M/MV5BMGRjZTQ0YzUtYWJjMS00OGY1LTkwNjMtYjYwZmFmNTY3MGZkXkEyXkFqcGc@._V1_FMjpg_UY1600_.jpg'
        },
        {
            title: "Salaar",
            img: 'https://m.media-amazon.com/images/M/MV5BNTU0ZjYxOWItOWViMC00YWVlLWJlMGUtZjc1YWU0NTlhY2ZhXkEyXkFqcGc@._V1_FMjpg_UY1500_.jpg'
        },
        {
            title: "Baahubali",
            img: 'https://m.media-amazon.com/images/M/MV5BNWM5MDQzNmQtZmQwZS00MjZlLTgzMTAtMzUwNDNiNTQwODRiXkEyXkFqcGc@._V1_FMjpg_UX1905_.jpg'
        },
        {
            title: "Saaho",
            img: 'https://m.media-amazon.com/images/M/MV5BZDFiM2Q3MTktNDY2MS00NmZhLThhNTItYTljZjkyODc4MjQzXkEyXkFqcGc@._V1_FMjpg_UX500_.jpg'
        },
        {
            title: "Darling",
            img: 'https://m.media-amazon.com/images/M/MV5BZWMxNjE4MjMtOGIxMS00YTliLWI5YzgtYjQ2NzNhMDIzYjRiXkEyXkFqcGc@._V1_FMjpg_UY768_.jpg'
        },

    ]);


    const handleNext = () => {

        setItems(prev => [...prev.slice(1), prev[0]]);
        console.log(items, "items");
        console.log(currentItem, "currentitem");
        console.log(upNext, "upNext");

    }
    const handlePrev = () => {

        setItems(prev => [prev[prev.length - 1], ...prev.slice(0, prev.length - 1)]);

    }

    const currentItem = items[0];

    const upNext = items.slice(1,4);


    return (
        <div className='w-full  h-[70vw] md:h-[50vw] xl:max-h-[40vw]  shadow-md '>

            <div className="flex w-full h-full gap-4  md:p-4 ">


                {/* ***** Hero slider section ****** */}
                <div className="relative w-full xl:w-[75%] h-full rounded-2xl overflow-hidden">

                    <div className=" w-full h-[75%] shadow-black "
                        style={{
                            backgroundImage: `url(${currentItem.img})`,
                            backgroundRepeat: 'no-repeat',
                            backgroundSize: "cover",
                            backgroundPosition: "top , center"
                        }}
                    >
                    </div>

                    <div className="absolute bottom-0 left-0 w-full h-max  flex px-4   bg-gradient-to-t from-dark-3 from-25% via-dark-3 via-50% to-transparent to-60% z-50 backdrop-blur-[1px] p-2">

                        <div className="w-[30%] h-max rounded-tl-none rounded-2xl overflow-hidden">
                            <img src={currentItem?.img} alt="IMAGE" className="w-full aspect-[2/3] object-cover" />
                        </div>
                        <div className="flex flex-col w-full h-max 
                        self-end gap-2 md:gap-4 p-2">

                            <div className="w-full flex gap-2 md:gap-4 justify-between items-center ">

                                <div className="flex gap-4 items-center">
                                    <div className="p-2 md:p-4 h-max w-max rounded-full overflow-hidden border-2 rounded-e-full hover:border-yellow-400 hover:cursor-pointer " >
                                        <PlayIcon className="hover:fill-yellow-400 fill-white" />
                                    </div>

                                    <span className="text-white p3 md:p1"> 06:42 </span>

                                </div>

                                <div className="flex gap-2 md:gap-4 justify-center items-center">
                                    <button className=" bg-none backdrop-blur-2xl backdrop-filter-none p-4 rounded-full overflow-hidden rotate-90 bg-transparent/[0.02]" onClick={() => handlePrev()}>
                                        <Arrow className="fill-white stroke-white" />
                                    </button>
                                    <button className=" bg-none backdrop-blur-2xl backdrop-filter-none p-4 rounded-full overflow-hidden -rotate-90 " onClick={() => handleNext()}>
                                        <Arrow />
                                    </button>
                                    <button></button>
                                </div>
                            </div>
                            <div className=" h4 md:h1">{currentItem.title}</div>
                            <div className=" p1 md:h4">{currentItem.title}</div>
                            <div className=" p2">

                                <div className="flex gap-2">

                                    <RatingIcon />

                                </div>
                                <div></div>

                            </div>
                            {/* <div></div> */}

                        </div>

                    </div>

                </div>



                {/******  Up Next Section ******/}
                <div className="hidden xl:flex w-[25%] flex-col justify-between p-2  ">

                    {/* <div className="w-full h-max py-2">
                        <span className="text-white h4 font-600 leading-3">Up next ...</span>
                    </div> */}

                    {upNext.map((e, index) => {

                        return (
                    <div key = {index} className="  w-full h-max   flex  z-50 backdrop-blur-3xl shadow-md bg-gradient-to-br from-dark-4 via-dark-3 to-dark-3 rounded-2xl overflow-hidden ">

                        <div className="w-[55%] h-max rounded-md rounded-tl-none overflow-hidden">
                            <img src={e.img} alt="IMAGE" className="w-full aspect-[2/3.5] object-cover" />
                        </div>
                        <div className="flex flex-col w-full h-full 
                         gap-2 p-2">

                            <div className="w-full flex gap-4 justify-between items-center ">

                                <div className="flex gap-2 items-center">
                                    <div className="p-2 h-max w-max rounded-full overflow-hidden  border-2 rounded-e-full hover:border-yellow-400 hover:cursor-pointer " >
                                        <PlayIcon className="hover:fill-yellow-400 fill-white" />
                                    </div>

                                    <span className="text-white p2"> 06:42 </span>

                                </div>
                            </div>
                            <div className=" h4 line-clamp-2">{e.title}</div>
                            <div className=" p2">{e.title}</div>
                            <div className=" p2">

                                <div className="flex gap-2">

                                    <RatingIcon />

                                </div>
                                <div></div>

                            </div>
                            {/* <div></div> */}

                        </div>

                    </div>

                        )
                    })}

                </div>

            </div>


        </div>
    )
};

export default HeroComponent;