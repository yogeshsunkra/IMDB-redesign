
import React from "react";
import { useState, useEffect, useRef } from 'react';
import PlayIcon from 'src/assets/playIcon.svg?react';
import RatingIcon from 'src/assets/ratingIcon.svg?react';
import Arrow from 'src/assets/arrow.svg?react';
import { useHomePageSections } from "src/hooks/useHomePageSections";
import { simplifiedApiResponse } from "src/utils/utilsData";
import Skeleton from "../Skeleton";
import { NavLink } from "react-router-dom";
import Error from "../Error";


const HeroComponent = () => {


    const {
        data: sections,
        isLoading: loading,
        error: error,
        refetch
    } = useHomePageSections("fan-fav")

    const [items, setItems] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideDirection, setSlideDirection] = useState("next");
    const intervalRef = useRef(null);

    useEffect(() => {

        console.log("ERROR HERO",error);

        if (sections && !loading && !error) {
            const normalizedItems = simplifiedApiResponse(sections?.data?.data?.list);
            setItems(normalizedItems.slice(0,8));
            setActiveIndex(0);
            setSlideDirection("next");
        }

    }, [sections, loading])


    useEffect(() => {
        if (items.length < 3) return;

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
        }

        intervalRef.current = setInterval(() => {
            setSlideDirection("next");
            setActiveIndex(prev => (prev + 1) % items.length);
        }, 10000);

        return () => clearInterval(intervalRef.current);

    }, [items.length])

    const isLoading = loading || items.length === 0;

    if(error){
        return(
            <Error onRetry={refetch} className="!min-h-screen"/>
        )
    }
    
    const loaderArray = Array.from({ length: 3 });

    const query = isLoading ? loaderArray : [items[activeIndex]];
    const currentItem = query[0];

    const upNext = isLoading? loaderArray : Array.from({ length: Math.min(3, items.length - 1) }, (_, index) => {
        return items[(activeIndex + 1 + index) % items.length];
    }).filter(Boolean);


    const handleNext = () => {
        if (isLoading || items.length < 2) return;

        setSlideDirection("next");
        setActiveIndex(prev => (prev + 1) % items.length);

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }

    const handlePrev = () => {
        if (isLoading || items.length < 2) return;

        setSlideDirection("prev");
        setActiveIndex(prev => (prev - 1 + items.length) % items.length);

        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    }










    return (
        <div className='w-full  h-[70vw] md:h-[50vw] xl:max-h-[40vw]  shadow-md border-b-2 border-b-dark-2/10 '>

            <div className="flex w-full h-full gap-4  md:p-4 ">


                {/* ***** Hero slider section ****** */}
                <div className={`relative w-full xl:w-[75%] h-full rounded-2xl overflow-hidden ${isLoading ? "bg-dark-5" : "animate-none bg-dark-4"} bg-opacity-30 backdrop-blur-xl`}>

                    {query && (



                        <>





                            <div
                                key={`${currentItem?.id || 'loading'}-${slideDirection}`}
                                className={`w-full min-h-[90%] shadow-black hero-slide `}
                                style={{
                                    backgroundImage: currentItem?.trailerImage ? `url(${currentItem.trailerImage})` : undefined,
                                    backgroundRepeat: 'no-repeat',
                                    backgroundSize: "cover",
                                    backgroundPosition: "top , center"
                                }}
                            >
                            </div>

                            <div key={`${currentItem?.id || 'loading'}-content-${slideDirection}`} className={`absolute bottom-0 left-0 w-full h-max  flex px-4 z-50  p-2 hero-content-slide ${isLoading ? "bg-transparent backdrop-blur-0": "bg-gradient-to-t from-dark-3 from-25% via-dark-3 via-40% to-transparent to-50% backdrop-blur-[1px]"}`}>


                                <Skeleton loading={isLoading} className="w-[30%] h-max rounded-tl-none rounded-2xl overflow-hidden" skeletonClass=" aspect-[2/3]">
                                    <NavLink>
                                        <img key={currentItem?.id} src={currentItem?.image} alt="IMAGE" className="w-full aspect-[2/3] object-cover" loading="lazy" />
                                    </NavLink>

                                </Skeleton>
                                <div className="flex flex-col w-full h-max 
                        self-end gap-2 md:gap-4 p-2">

                                    <Skeleton loading={isLoading} className="w-full flex gap-2 md:gap-4 justify-between items-center">

                                        <div  className="flex gap-4 items-center">
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
                                    </Skeleton>
                                    <Skeleton loading={isLoading} className=" h4 md:h1">{currentItem?.title}</Skeleton>
                                    <Skeleton loading={isLoading} className=" p1 md:h4">{currentItem?.title}</Skeleton>
                                    <Skeleton loading={isLoading} className=" p2">

                                        <div className="flex gap-2">

                                            <RatingIcon />

                                        </div>
                                        <div></div>

                                    </Skeleton>
                                    {/* <div></div> */}

                                </div>

                            </div>

                        </>

                    )



                    }



                </div>



                {/******  Up Next Section ******/}
                <div className={`hidden xl:flex w-[25%] flex-col justify-between p-2  gap-4 ${loading ? "bg-dark-4 bg-opacity-30 backdrop-blur-xl" : "bg-none"} `}>

                    {/* <div className="w-full h-max py-2">
                        <span className="text-white h4 font-600 leading-3">Up next ...</span>
                    </div> */}

                    {upNext?.map((e, index) => {

                        return (
                            <div key={`${e?.id || index}-${activeIndex}`} className="w-full h-max flex z-50 backdrop-blur-3xl shadow-md bg-gradient-to-br from-dark-4 via-dark-3 to-dark-4/50 rounded-2xl overflow-hidden bg-opacity-30 hero-up-next-card" style={{ animationDelay: `${index * 80}ms` }}>

                                <Skeleton loading={isLoading} className="w-[55%] h-max rounded-md rounded-tl-none overflow-hidden aspect-[2/3]">
                                    <img src={e?.image} alt="IMAGE" className="w-full aspect-[2/3.5] object-cover" />
                                </Skeleton>
                                <div className="flex flex-col w-full h-full 
                         gap-2 p-2">

                                    <div className="w-full flex gap-4 justify-between items-center ">

                                        <Skeleton loading={isLoading} className="flex gap-2 items-center">
                                            <div className="p-2 h-max w-max rounded-full overflow-hidden  border-2 rounded-e-full hover:border-yellow-400 hover:cursor-pointer " >
                                                <PlayIcon className="hover:fill-yellow-400 fill-white" />
                                            </div>

                                            <span className="text-white p2"> 06:42 </span>

                                        </Skeleton>
                                    </div>
                                    <Skeleton loading={isLoading} className=" h4 line-clamp-2">{e?.title}</Skeleton>
                                    <Skeleton loading={isLoading} className=" p2">{e?.title}</Skeleton>
                                    <Skeleton loading={isLoading} className=" p2">

                                        <div className="flex gap-2">

                                            <RatingIcon />

                                        </div>
                                        <div></div>

                                    </Skeleton>
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