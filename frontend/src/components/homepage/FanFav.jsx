
import React from 'react';
import  { useState, useEffect, useRef } from 'react';
import RatingIcon from 'src/assets/ratingIcon.svg?react';
import WatchedIcon from 'src/assets/watchedIcon.svg?react';
import { simplifiedApiResponse } from 'src/utils/utilsData';
import Slider from '../Slider';
import { useHomePageSections } from 'src/hooks/useHomePageSections';
import Error from '../Error';

const FanFav = () => {

    const [fanFav, setFanFav] = useState([]);
    const [isRendered, setIsRendered] = useState(false);

    const ref = useRef();

    const key = ""

    const {
        data: sections,
        isLoading: loading,
        error,
        refetch
    } = useHomePageSections("fan-fav");

    // const toCamelCase = (str) => {
    //     return str
    //         .trim()
    //         .toLowerCase()
    //         .replace(/[^a-z0-9 ]/g, "") // remove special chars
    //         .split(/\s+/) // handle multiple spaces
    //         .map((word, index) =>
    //             index === 0
    //                 ? word
    //                 : word.charAt(0).toUpperCase() + word.slice(1)
    //         )
    //         .join("");
    // };

    useEffect(() => {

        console.log(sections, "data in watch")
        console.log(loading, "loading in watch")


        if (!loading && sections && !isRendered && !error) {

                    console.log("ERROR FAN FAV",error);

            console.log("RENDERED");


            setFanFav(simplifiedApiResponse(sections?.data?.data?.list));


            requestAnimationFrame(() => {
                setIsRendered(true);
            });


        }

    }, [sections, loading, isRendered])

    if(error){
        return(
            <Error onRetry = {refetch}/>
        )
    }


    return (
        <div ref={ref} className='relative w-full overflow-hidden  '>



            {/* ************ Fan Favourites ************* */}


            <div className='w-full h-full flex flex-col' >

                <div className=' flex flex-col px-4 py-2 gap-4  items-center'>

                    <div className='w-full flex gap-4  justify-start'>
                        <span className='px-1 py-2 bg-n-1 rounded-full' />
                        <h1 className='h3 text-dark-1'>Fan Favourites</h1>

                    </div>

                    <p> </p>
                </div>

                <Slider items={fanFav} loading={loading} query={(item) => item} error={error} refetch={refetch} />

            </div >


        </div >

    )
}


export default FanFav

