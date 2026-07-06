
import React from 'react';
import  { useState, useEffect, useRef } from 'react';
import RatingIcon from 'src/assets/ratingIcon.svg?react';
import WatchedIcon from 'src/assets/watchedIcon.svg?react';
import { simplifiedApiResponse } from 'src/utils/utilsData';
import Slider from '../Slider';
import { useHomePageSections } from 'src/hooks/useHomePageSections';

const FanFav = () => {

    const [fanFav, setFanFav] = useState([]);
    const [isRendered, setIsRendered] = useState(false);

    const ref = useRef();

    const key = ""

    // const { sections, loading } = useContext(DataContext);
    const {
        data: sections,
        isLoading: loading,
        error
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


        if (!loading && sections && !isRendered) {


            console.log("RENDERED");


            setFanFav(simplifiedApiResponse(sections.data.data.list));


            // sections?.watch?.forEach((e) => {

            //   const name = toCamelCase(e.name);

            //   switch (name) {
            //     case "weekTop10":

            //       setWeekTopTen(simplifiedApiResponse(e.data.data));
            //       break;
            //     case "fanFavourites":

            //       setFanFav(simplifiedApiResponse(e.data.data.list));
            //       break;

            //     default:
            //       break;
            //   }

            // })

            requestAnimationFrame(() => {
                setIsRendered(true);
            });
            // console.log(loading, "QUERY loading");
            // console.log(sections, "QUERY SEC");

        }

    }, [sections, loading, isRendered])



    // console.log(weekTopTen, "10");
    // console.log(fanFav, "fan");

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

                <Slider items={fanFav} loading={loading} query={(item) => item} error={error} />

            </div >





        </div >

    )
}


export default FanFav

