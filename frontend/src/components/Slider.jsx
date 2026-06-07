import React, { useEffect, useRef, useState } from 'react';
import RatingIcon from 'src/assets/ratingIcon.svg?react';
import RateIcon from 'src/assets/rateIcon.svg?react';
import PlayIcon from 'src/assets/playIcon.svg?react';
import BookmarkIcon from 'src/assets/bookmarkIcon.svg?react';
import Arrow from 'src/assets/arrow.svg?react'
import DisabledArrow from 'src/assets/arrowDisabled.svg?react'

const Slider = ({ items, loading , query}) => {

    const sliderRef = useRef(null);

    const [boxIndex, setBoxIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(1);


    const cardWidth = 190;
    const gap = 24;

    /*
        CALCULATE HOW MANY CARDS FIT
    */

    useEffect(() => {


        console.log("Loading in Slider", loading);
        console.log("items in SLider", items);
        const calculateVisibleCards = () => {

            if (!sliderRef.current) return;

            const containerWidth =
                sliderRef.current.offsetWidth;

            const totalCardWidth =
                cardWidth + gap;

            const cards =
                Math.floor(containerWidth / totalCardWidth);

            setVisibleCards(cards || 1);

        };

        calculateVisibleCards();

        window.addEventListener(
            'resize',
            calculateVisibleCards
        );

        return () => {

            window.removeEventListener(
                'resize',
                calculateVisibleCards
            );

        };

    }, [loading, items]);

    /*
        TOTAL PAGES
    */

    const maxIndex =
        Math.ceil(items.length / visibleCards) - 1;

    /*
        BUTTONS
    */

    const handleNext = () => {

        if (boxIndex < maxIndex) {

            setBoxIndex(prev => prev + 1);

        }
    };

    const handlePrev = () => {

        if (boxIndex > 0) {

            setBoxIndex(prev => prev - 1);

        }


    };

    /*
        TRANSLATE VALUE
    */

    const translateValue =
        boxIndex *
        visibleCards *
        (cardWidth + gap);

    return (

        <div className='w-full'>

            {/* BUTTONS */}

            <div className='w-full flex items-center justify-end gap-3 p2'>

                <button
                    onClick={handlePrev}
                    // disabled={boxIndex >= maxIndex ? true : false}
                    className='bg-dark-4 bg-opacity-50  text-white p-2 rounded-full overflow-hidden'
                >
                    <Arrow className='rotate-90' />
                </button>

                <button
                    onClick={handleNext}
                    // disabled={boxIndex <= 0 ? true : false}
                    className='bg-dark-4 bg-opacity-50  text-white p-2 rounded-full overflow-hidden'
                >
                    <Arrow className='-rotate-90' />
                </button>
            </div>

            {/* VIEWPORT */}

            <div
                ref={sliderRef}
                className={`overflow-x-scroll w-full ${loading ? "h-96 bg-dark-4  animate-pulse" : "h-max bg-none animate-none"}`}
                style={{
                    scrollbarWidth: "none",
                }}>

                {/* TRACK */}

                <div
                    className={`flex gap-7 transition-transform duration-500 ease-in-out p-4`}
                    style={{
                        transform: `translateX(-${translateValue}px)`,

                    }}
                >

                    {items?.map((item, index) => {

                        const currentItem = query(item);
                        // console.log(currentItem , "currentItem");

                        return (

                            currentItem?.id?.toString().toLowerCase().startsWith("n", 0) ?
                                <div
                                    key={index}
                                    className={`relative flex-shrink-0   ${loading ? "h-[190px] animate-pulse bg-gray-700 " : " h-max "}`}
                                    style={{
                                        width: `${cardWidth}px`
                                    }}
                                >

                                    <div className='relative overflow-hidden rounded-full w-full h-full bg-gray-700'
                                        style={{
                                            // width : `${cardWidth}`,
                                            // height : `${cardWidth}`,
                                        }}>
                                        <img
                                            src={currentItem?.image}
                                            alt={currentItem?.name}
                                            loading='lazy'
                                            className='aspect-[3/3] w-full object-cover object-top'
                                        />


                                    </div>

                                    <div className='flex w-full p-4 p1 text-white'>
                                        {currentItem?.name}
                                    </div>

                                    <div className='absolute top-1/2 left-0 rounded-full overflow-hidden z-50'>
                                        <BookmarkIcon />

                                    </div>

                                </div>
                                :

                                //*************** */ Title Cards **********
                                <div
                                    key={index}
                                    className={`flex-shrink-0  rounded-xl overflow-hidden rounded-tl-none ${loading ? "h-96 animate-pulse bg-gray-700 " : "h-auto bg-dark-4 bg-opacity-50 "}`}
                                    style={{
                                        width: `${cardWidth}px`
                                    }}
                                >

                                    <div className='relative overflow-hidden'>
                                        <img
                                            src={currentItem?.image}
                                            alt={currentItem?.title}
                                            loading='lazy'
                                            className='aspect-[2/3] w-full object-cover '
                                        />

                                        <div className='absolute top-0 left-0'>
                                            <BookmarkIcon />

                                        </div>



                                    </div>

                                    <div className='text-white mt-2 grid grid-flow-2 px-2 py-auto gap-4 flex-shrink-0'>

                                        <div className='flex flex-col gap-4'>
                                            <div className='flex gap-4 items-center'>
                                                <div className='flex items-center gap-1'>
                                                    <RatingIcon />
                                                    <p>{currentItem?.rating}</p>
                                                </div>

                                                <RateIcon />
                                            </div>


                                            <div className='flex h-14 items-start'>
                                                <p className='line-clamp-2 overflow-hidden'>{currentItem?.title}</p></div>

                                        </div>


                                        <div className='flex flex-col gap-2'>

                                            <button className="line-clamp-1 text-blue-500 bg-dark-4 bg-opacity-80 rounded-3xl px-4 py-3 overflow-hidden p2">
                                                <p className='line-clamp-1'>
                                                    Watch options
                                                </p>
                                            </button>


                                            <button className="flex items-center gap-2 justify-center line-clamp-1 text-white bg-none  rounded-3xl px-4 py-3 overflow-hidden p2 hover:bg-dark-4"  >
                                                <PlayIcon />
                                                <p className='line-clamp-1'>Trailer</p>
                                            </button>

                                        </div>

                                    </div>

                                </div>

                        );

                    })}

                </div>


            </div>

        </div>

    );

};

export default Slider;