
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useParams } from 'react-router-dom';
import { queryData } from 'src/constants/data';
import { useState, useEffect } from 'react';
import { use } from 'react';


const Explore = () => {

    const params = useParams();
    const key = params.key;
    console.log(params.key, "KEY")

    const config = queryData.find(item => item.queryKey === key);


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
            console.log(data , "useeffect");
        }
    }, [data]);




    // const [ items , setItems] = useState();

    // const useDynamicData = () => {


    //     queryData.map((query, index) => {

    //         console.log("QueryData Passed", query.queryKey)

    //         if (query.queryKey === params.key) {

    //             console.log("QueryKey Passed", query.queryKey)

    //             return useQuery({

    //                 queryKey: [query.key],
    //                 queryFn: async () => {

    //                     const data = await query.api;

    //                     return data;

    //                 },

    //                 staleTime: 30 * 60 * 1000

    //             });

    //         }


    //     })



    // }




    // useEffect = (() => {

    //     if (dynamicData && !loading) {

    //         console.log("dynamicData", dynamicData);
    //     }

    // }, [dynamicData , loading])

    return (
        <div className ="h-screen w-full">

            <h1 className="text-3xl">
                EXPLORE {config.title}
            </h1>

        </div>

    )
}

export default Explore;