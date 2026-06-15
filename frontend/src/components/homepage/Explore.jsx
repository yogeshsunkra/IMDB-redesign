
import React, { useEffect, useRef } from 'react';
import { useState } from 'react';
import { useHomePageSections } from 'src/hooks/useHomePageSections';
import Slider from '../Slider';
import { simplifiedApiResponse } from 'src/utils/utilsData';




const Explore = () => {

    const [providerIndex, setProviderIndex] = useState(0);
    const [providerData, setProviderData] = useState([]);
    const [streamingData, setStreamingData] = useState([]);




    const {
        data: sections,
        isLoading: loading,
        error
    } = useHomePageSections();


    useEffect(() => {

        if (sections && !loading) {

            // console.log(sections, "streamingData");



            sections?.streaming?.forEach((item) => {

                setStreamingData(item?.data?.data);


            })


            if (streamingData) {
                console.log(streamingData[providerIndex]?.edges, "streamingData");
                setProviderData(simplifiedApiResponse(streamingData[providerIndex]?.edges));

                console.log(providerData, "providerData", providerIndex);
            }






        }



    }, [sections, providerIndex, loading])

    const handleClick = (index) => {

        if (providerIndex != index) {
            setProviderIndex(index);
            // setProviderData(simplifiedApiResponse(data));
        }

        console.log(index,"providerIndex");

    }

    //     const providerData = simplifiedApiResponse(
    //   streamingData?.[providerIndex]?.edges || []
    // );

    return (
        <div className='relative w-full h-full py-12'>

            {/* Logic is to map ott appps and assigning that data to slider below */}
            {/* // Slider only shows the selected ott app data ... */}


            <div className='absolute  flex  top-16  w-full h-[50%] justify-center items-start md:flex cursor-not-allowed pointer-events-none'>

                <span className='text-[clamp(2rem,14vw,12rem)]  text-gray-400 font-extrabold opacity-5 -z-20 '>  Explore
                </span>
            </div>

            <div className='w-full flex flex-col '>

                <div className=' flex flex-col px-4 py-2 gap-4  items-center'>

                    <div className='w-full flex gap-4 items-center justify-start'>
                        <span className='px-1 py-2 bg-n-1 rounded-full' />
                        <h1 className='h3 text-dark-1'>Streaming</h1>

                    </div>

                    <p> </p>
                </div>

                <div className='w-full h-max flex gap-4 p-4'>

                    {streamingData?.map((item, index) => {
                        return (
                            <button key={index} className="p-2 items-center justify-center text-black bg-white rounded-xl overflow-hidden hover:bg-yellow-500" onClick={() => handleClick(index)}>
                                {item.providerName}
                            </button>


                        )
                    })}

                </div>

                <Slider items={providerData} loading={loading} query={(item) => item}  error = {error}/>


            </div>

        </div>
    )
}

export default Explore
