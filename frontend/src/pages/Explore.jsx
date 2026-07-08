
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { queryData } from 'src/constants/data';
import { useState, useEffect } from 'react';
import { use } from 'react';
import { simplifiedApiResponse } from 'src/utils/utilsData';
import RatingIcon from 'src/assets/ratingIcon.svg?react';
import BookmarkIcon from 'src/assets/bookmarkIcon.svg?react';
import RateIcon from 'src/assets/rateIcon.svg?react';
import WatchedIcon from 'src/assets/watchedIcon.svg?react';


const Explore = () => {

    const params = useParams();
    const key = params.key;
    console.log(params.key, "KEY")

    const config = queryData.find(item => item.queryKey === key);

    const [items, setItems] = useState();


    const {
        data,
        isLoading,
        error
    } = useQuery({

        queryKey: [config.queryKey],
        queryFn: () => config.api(config.queryKey),
        enabled: !!config,
        staleTime: 30 * 60 * 1000
    },
    );

    useEffect(() => {
        if (data) {

            setItems(simplifiedApiResponse(data?.data))
            console.log(items, "Explore API Response");
        }
    }, [data]);


    return (
        <div className=" flex flex-col w-full h-max border-2 border-red-600">


            <div className="w-full  border-2 border-green-600 ">

                <p className="text-2xl capitalize">{data?.name}</p>

                <h1 className="text-3xl">
                    EXPLORE {config.title}
                </h1>

            </div>

            {/* Dynamic List */}

            <div className="flex gap-4 w-full h-full border-2 border-green-600 p-4">
                {/* Filters Tab */}
                <div className="hidden xl:flex w-[30%] h-full border-2 border-yellow-500"></div>

                {/* List Tab */}
                <div className='w-full h-full  p-2 '>
                    {/* menu or navigation */}
                    <div></div>

                    <div className="w-full h-full flex flex-col gap-4">
                        {/* Content */}
                        <div className=" w-full h-max flex flex-col  bg-dark-4 bg-opacity-40  backdrop-blur-3xl border-b-2 border-dark-2/50 py-2">

                            {/* card */}
                            <div className="flex gap-2 w-full h-max  p-2 items-center">
                                {/* Image */}
                                <div className="max-w-20  h-max  rounded-xl rounded-tr-none overflow-hidden ">

                                    <img className="aspect-[2/3] object-cover" src='https://m.media-amazon.com/images/M/MV5BZTA0MzU0YzItZWRjZC00YzllLWFmYjMtZWYzZDgyYzRjYTg5XkEyXkFqcGc@._V1_.jpg' />

                                </div>

                                {/* Details */}
                                <div className="flex flex-col gap-2 w-full h-full  py-2 text-dark-1">

                                    <div className=' flex  gap-2 px-2 '>
                                        {/* #1 tag */}
                                        <div className='relative text-white   font-semibold p3'> 1 .


                                        </div>

                                        {/* Title */}
                                        <div>
                                            <p className='text-white  font-extrabold'>Obsession</p>
                                        </div>


                                    </div>



                                    {/* Title
                                <div className='w-full  px-2'>
                                    <span className="flex gap-4 items-center">
                                        <h1 className="p1 text-n-1">1.</h1>
                                        <h1 className="h4 font-semibold text-white">Obsession</h1>
                                    </span>
                                </div> */}

                                    {/* title details */}
                                    <div className='flex gap-3 place-items-center px-2 p2'>

                                        <p>2026</p>
                                        <p>1h 56m</p>
                                        <p>A</p>

                                    </div>

                                    {/* Ratings */}
                                    <div className='w-full  flex gap-4 px-2 p2'>

                                        <div className='flex gap-1  font-medium place-items-center'>
                                            <RatingIcon className="w-[1.125rem] h-auto " />
                                            <p>7.2</p>
                                        </div>
                                        <div className='flex gap-1  font-medium place-items-center'>
                                            <WatchedIcon className="w-[1.125rem] h-auto " />
                                            <p className='text-blue-500 '>Mark as Watched</p>
                                        </div>

                                    </div>


                                </div>




                            </div>
                            {/* Synopsis */}

                            <div className='w-full p2 line-clamp-3 px-4'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium doloribus nemo veniam facere adipisci hic, ullam dicta, quae nostrum ipsa voluptas tempora id quibusdam aut non ad repellendus omnis ea esse deleniti explicabo laudantium, quidem atque? Hic harum minus tenetur quibusdam. Vitae nisi soluta impedit doloribus enim corporis veniam!
                            </div>


                        </div>


                        {/* Content */}
                        <div className=" w-full h-max flex flex-col  bg-dark-4 bg-opacity-40  backdrop-blur-3xl border-b-2 border-dark-2/50 py-2">

                            {/* card */}
                            <div className="flex gap-2 w-full h-max  p-2 items-center">
                                {/* Image */}
                                <div className="max-w-20  h-max  rounded-xl rounded-tr-none overflow-hidden ">

                                    <img className="aspect-[2/3] object-cover" src='https://m.media-amazon.com/images/M/MV5BZTA0MzU0YzItZWRjZC00YzllLWFmYjMtZWYzZDgyYzRjYTg5XkEyXkFqcGc@._V1_.jpg' />

                                </div>

                                {/* Details */}
                                <div className="flex flex-col gap-2 w-full h-full  py-2 text-dark-1">

                                    <div className=' flex  gap-2 px-2 '>
                                        {/* #1 tag */}
                                        <div className='relative text-white   font-semibold p3'> 1 .


                                        </div>

                                        {/* Title */}
                                        <div>
                                            <p className='text-white  font-extrabold'>Obsession</p>
                                        </div>


                                    </div>



                                    {/* Title
                                <div className='w-full  px-2'>
                                    <span className="flex gap-4 items-center">
                                        <h1 className="p1 text-n-1">1.</h1>
                                        <h1 className="h4 font-semibold text-white">Obsession</h1>
                                    </span>
                                </div> */}

                                    {/* title details */}
                                    <div className='flex gap-3 place-items-center px-2 p2'>

                                        <p>2026</p>
                                        <p>1h 56m</p>
                                        <p>A</p>

                                    </div>

                                    {/* Ratings */}
                                    <div className='w-full  flex gap-4 px-2 p2'>

                                        <div className='flex gap-1  font-medium place-items-center'>
                                            <RatingIcon className="w-[1.125rem] h-auto " />
                                            <p>7.2</p>
                                        </div>
                                        <div className='flex gap-1  font-medium place-items-center'>
                                            <WatchedIcon className="w-[1.125rem] h-auto " />
                                            <p className='text-blue-500 '>Mark as Watched</p>
                                        </div>

                                    </div>


                                </div>




                            </div>
                            {/* Synopsis */}

                            <div className='w-full p2 line-clamp-3 px-4'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium doloribus nemo veniam facere adipisci hic, ullam dicta, quae nostrum ipsa voluptas tempora id quibusdam aut non ad repellendus omnis ea esse deleniti explicabo laudantium, quidem atque? Hic harum minus tenetur quibusdam. Vitae nisi soluta impedit doloribus enim corporis veniam!
                            </div>


                        </div>

                        {/* Content */}
                        <div className=" w-full h-max flex flex-col  bg-dark-4 bg-opacity-40  backdrop-blur-3xl border-b-2 border-dark-2/50 py-2">

                            {/* card */}
                            <div className="flex gap-2 w-full h-max  p-2 items-center">
                                {/* Image */}
                                <div className="max-w-20  h-max  rounded-xl rounded-tr-none overflow-hidden ">

                                    <img className="aspect-[2/3] object-cover" src='https://m.media-amazon.com/images/M/MV5BZTA0MzU0YzItZWRjZC00YzllLWFmYjMtZWYzZDgyYzRjYTg5XkEyXkFqcGc@._V1_.jpg' />

                                </div>

                                {/* Details */}
                                <div className="flex flex-col gap-2 w-full h-full  py-2 text-dark-1">

                                    <div className=' flex  gap-2 px-2 '>
                                        {/* #1 tag */}
                                        <div className='relative text-white   font-semibold p3'> 1 .


                                        </div>

                                        {/* Title */}
                                        <div>
                                            <p className='text-white  font-extrabold'>Obsession</p>
                                        </div>


                                    </div>



                                    {/* Title
                                <div className='w-full  px-2'>
                                    <span className="flex gap-4 items-center">
                                        <h1 className="p1 text-n-1">1.</h1>
                                        <h1 className="h4 font-semibold text-white">Obsession</h1>
                                    </span>
                                </div> */}

                                    {/* title details */}
                                    <div className='flex gap-3 place-items-center px-2 p2'>

                                        <p>2026</p>
                                        <p>1h 56m</p>
                                        <p>A</p>

                                    </div>

                                    {/* Ratings */}
                                    <div className='w-full  flex gap-4 px-2 p2'>

                                        <div className='flex gap-1  font-medium place-items-center'>
                                            <RatingIcon className="w-[1.125rem] h-auto " />
                                            <p>7.2</p>
                                        </div>
                                        <div className='flex gap-1  font-medium place-items-center'>
                                            <WatchedIcon className="w-[1.125rem] h-auto " />
                                            <p className='text-blue-500 '>Mark as Watched</p>
                                        </div>

                                    </div>


                                </div>




                            </div>
                            {/* Synopsis */}

                            <div className='w-full p2 line-clamp-3 px-4'>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium doloribus nemo veniam facere adipisci hic, ullam dicta, quae nostrum ipsa voluptas tempora id quibusdam aut non ad repellendus omnis ea esse deleniti explicabo laudantium, quidem atque? Hic harum minus tenetur quibusdam. Vitae nisi soluta impedit doloribus enim corporis veniam!
                            </div>


                        </div>



                    </div>



                    {/* pagination */}
                    <div></div>
                </div>
            </div>



        </div>

    )
}

export default Explore;