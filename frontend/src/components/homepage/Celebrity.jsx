
import React from 'react';
import { useEffect, useState, useRef } from "react";
import Slider from "../Slider";
import { simplifiedApiResponse } from 'src/utils/utilsData';
import { useHomePageSections } from 'src/hooks/useHomePageSections';


const Celebrity = () => {

    const [bornToday, setBornToday] = useState([]);
    const [isRendered, setIsRendered] = useState(false);
    const ref = useRef();

    const {
        data: sections,
        isLoading: loading,
        error,
        refetch
    } = useHomePageSections("born-today")

    useEffect(() => {


        if (!loading && sections && isRendered) {


            const data = sections.data?.data?.list;


            setBornToday(simplifiedApiResponse(data))
            console.log(bornToday, 'BORN TODAY');

            // sections?.celeb?.map((e) => {
            //     const data = e.data?.data?.list;


            //     setBornToday(simplifiedApiResponse(data))
            //     console.log(bornToday, 'BORN TODAY');
            // })

        }

        requestAnimationFrame(() => {
            setIsRendered(true);
        });

    }, [sections, loading, isRendered])

    return (
        <div ref={ref} className="relative w-full h-max py-12 overflow-hidden ">

            <div className='absolute  flex  top-16  w-full h-[50%] justify-center items-start '>

                <span className='text-[clamp(2rem,14vw,12rem)]  text-gray-400 font-extrabold opacity-5 -z-20 '>  Born Today
                </span>
            </div>


            <div className=' flex flex-col w-max px-4 py-2 gap-1 '>

                <div className='flex gap-4 items-center justify-center'>
                    <span className='px-1 py-2 bg-n-1 rounded-full' />
                    <h1 className='h3 text-dark-1'>Born Today</h1>

                </div>

                <p className='text-dark-2 p1'> on may 27</p>
            </div>



            <Slider items={bornToday} loading={loading} query={(item) => item} error={error} type="celeb" refetch={refetch}/>

        </div>
    )

}

export default Celebrity;
