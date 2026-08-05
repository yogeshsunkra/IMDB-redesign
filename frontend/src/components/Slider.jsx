import React, { lazy, Suspense, useEffect, useRef, useState } from 'react';
const RatingIcon = lazy(() => import('src/assets/ratingIcon.svg?react'));
const RateIcon = lazy(() => import('src/assets/rateIcon.svg?react'));
const PlayIcon = lazy(() => import('src/assets/playIcon.svg?react'));
const BookmarkIcon = lazy(() => import('src/assets/bookmarkIcon.svg?react'));
const Arrow = lazy(() => import('src/assets/arrow.svg?react'));
const DisabledArrow = lazy(() => import('src/assets/arrowDisabled.svg?react'));
import { NavLink } from 'react-router-dom';
import Skeleton from './Skeleton';
import Error from './Error';

const LazyIcon = ({ icon: Icon, className }) => (
    <Suspense fallback={<span className={`inline-block h-5 w-5 ${className || ''}`} />}>
        <Icon className={className} />
    </Suspense>
);

const Slider = ({ items, loading, query, error, type , refetch }) => {

    const sliderRef = useRef(null);

    const [boxIndex, setBoxIndex] = useState(0);
    const [visibleCards, setVisibleCards] = useState(1);


    const cardWidth = 190;
    const gap = 24;

    // const{loading = true;

    /*
        CALCULATE HOW MANY CARDS FIT
    */

    useEffect(() => {

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

        if(error){
            return(
                <Error onRetry={refetch}/>
            )
        }



    const safeItems = Array.isArray(items) ? items : [];

    const maxIndex =
        safeItems.length > 0 ? Math.ceil(safeItems.length / visibleCards) - 1 : 0;

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

    const loaderArray = Array.from({ length: 7 });

    const queryItem = loading ? loaderArray : safeItems;



    return (

        <div className='w-full'>

            {/* BUTTONS */}

            <div className='w-full flex items-center justify-end gap-3 p2'>

                <button
                    onClick={handlePrev}
                    className='bg-dark-4 bg-opacity-50  text-white p-2 rounded-full overflow-hidden'
                >
                    <LazyIcon icon={Arrow} className='rotate-90' />
                </button>

                <button
                    onClick={handleNext}
                    className='bg-dark-4 bg-opacity-50  text-white p-2 rounded-full overflow-hidden'
                >
                    <LazyIcon icon={Arrow} className='-rotate-90' />
                </button>
            </div>

            {/* VIEWPORT */}

            <div
                ref={sliderRef}
                className={`overflow-x-scroll w-full h-max bg-none animate-none`}
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

                    {

                        queryItem?.map((item, index) => {

                            const currentItem = query(item);
                            // console.log(currentItem , "currentItem");

                            return (

                                currentItem?.id?.toString().toLowerCase().startsWith("n", 0) || type === "celeb" ?
                                    <div

                                        key={index}
                                        id={loading ? index : currentItem?.id}
                                        className={`relative flex-shrink-0  h-max gap-4}`}
                                        style={{
                                            width: `${cardWidth}px`
                                        }}
                                    >

                                        <Skeleton loading={loading} className='relative overflow-hidden !rounded-full w-full h-full  aspect-[3/3] ' skeletonClass='rounded-full'
                                            style={{
                                                // width : `${cardWidth}`,
                                                // height : `${cardWidth}`,
                                            }}>

                                            <NavLink
                                                to={(`/search/celeb/${currentItem?.id}`)}>

                                                <img
                                                    id={currentItem?.id}
                                                    src={currentItem?.image || currentItem?.primaryImage}
                                                    alt="No image"
                                                    loading='lazy'
                                                    className='aspect-[3/3] w-full object-cover object-top text-center '
                                                />

                                            </NavLink>


                                        </Skeleton>

                                        <NavLink
                                            to={(`/search/celeb/${currentItem?.id}`)} className='flex w-full p-4 p1 text-white justify-center'>
                                            {currentItem?.name}
                                        </NavLink>

                                        <div className='absolute top-1/2 left-0 rounded-full overflow-hidden z-50'>
                                            <LazyIcon icon={BookmarkIcon} />

                                        </div>

                                    </div>
                                    :

                                    //*************** */ Title Cards **********
                                    <div

                                        key={index}
                                        id={loading ? index : currentItem?.id}
                                        className={`flex-shrink-0  rounded-xl overflow-hidden rounded-tl-none h-auto bg-dark-4 bg-opacity-50 `}
                                        style={{
                                            width: `${cardWidth}px`
                                        }}
                                    >

                                        <Skeleton loading={loading} className='relative overflow-hidden bg-dark-4 aspect-[2/3]'>

                                            <NavLink
                                                to={`/search/title/${currentItem?.id}`}
                                            >
                                                <img
                                                    id={currentItem?.id}
                                                    src={currentItem?.image || currentItem?.primaryImage}
                                                    alt={currentItem?.title || currentItem?.primaryTitle}
                                                    loading='lazy'
                                                    className='aspect-[2/3] w-full object-cover bg-dark-3'
                                                />
                                            </NavLink>

                                            <div className='absolute top-0 left-0'>
                                                <LazyIcon icon={BookmarkIcon} />

                                            </div>



                                        </Skeleton>

                                        <div className='text-white mt-2 grid grid-flow-2 px-2 py-auto gap-4 flex-shrink-0'>

                                            <div className='flex flex-col gap-4'>
                                                <Skeleton loading={loading} className='flex gap-4 items-center '>
                                                    <div className='flex items-center gap-1'>
                                                        <LazyIcon icon={RatingIcon} />
                                                        <p>{currentItem?.rating || currentItem?.averageRating}</p>
                                                    </div>

                                                    <LazyIcon icon={RateIcon} />
                                                </Skeleton>


                                                <Skeleton loading={loading} className='flex h-14 items-start ' skeletonClass='bg-dark-5/30'>
                                                    <p className='line-clamp-2 overflow-hidden'>{currentItem?.title || currentItem?.primaryTitle}</p>
                                                </Skeleton>

                                            </div>


                                            <Skeleton loading={loading} className='flex flex-col gap-2'>

                                                <button className="line-clamp-1 text-blue-500 bg-dark-4 bg-opacity-80 rounded-3xl px-4 py-3 overflow-hidden p2">
                                                    <p className='line-clamp-1'>
                                                        Watch options
                                                    </p>
                                                </button>


                                                <button className="flex items-center gap-2 justify-center line-clamp-1 text-white bg-none  rounded-3xl px-4 py-3 overflow-hidden p2 hover:bg-dark-4"  >
                                                    <LazyIcon icon={PlayIcon} />
                                                    <p className='line-clamp-1'>Trailer</p>
                                                </button>

                                            </Skeleton>

                                        </div>

                                    </div>

                            );

                        })

                    }

                </div>


            </div>




        </div>

    );

};

export default Slider;