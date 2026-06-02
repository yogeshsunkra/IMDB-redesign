
import React from 'react';
import { useEffect, useState, useRef } from "react";
import Slider from "../Slider";
import { useContext } from "react";
import { DataContext } from "src/context/DataContext";
import { simplifiedApiResponse } from 'src/utils/utilsData';

const Celebrity = () => {

    const [bornToday, setBornToday] = useState([]);
    const [isRendered, setIsRendered] = useState(false);
    const ref = useRef();

    const { sections, loading } = useContext(DataContext);

    useEffect(() => {

        sections?.value?.celeb?.map((e) => {

            const data = e.data?.data?.list;


            setBornToday(simplifiedApiResponse(data));
            setIsRendered(true);
            console.log(bornToday, 'BORN TODAY');


        })

    }, [sections])

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



            <Slider items={bornToday} loading={loading} />

        </div>
    )

}

export default Celebrity;
