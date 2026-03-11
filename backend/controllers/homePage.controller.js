import express from "express";
import dotenv from "dotenv";
import HomepageSection from "../models/home.model.js";
import axios from "axios";

dotenv.config();



const today = new Date()
const currentMonth = (today.getMonth() + 1).toString().padStart(2, '0');
const currentDay = today.getDate().toString().padStart(2, '0');


const isCacheValid = (cache, days) => {

        const numericDays = Number(days);

        if (numericDays > 0){

        const now = Date.now();
        const cacheDuration = 24 * 3600 * 1000 * days;
        const lastUpdated = new Date(cache.updatedAt).getTime();
        // console.log(lastUpdated,"LU");
        // console.log(now,"N");
        // console.log(cacheDuration,"CD");
        const durationCheck = now - lastUpdated < cacheDuration
        // console.log(durationCheck,"durationCheck");

        return durationCheck;
        }

        const todayDate = new Date().toDateString();
        const cacheDate = new Date(cache.updatedAt).toDateString();
        const dateCheck = todayDate === cacheDate;
        console.log(todayDate," : ",cacheDate," : ",dateCheck,"dateCheck");


        return  dateCheck;


}




const homePageController = async (req, res) => {

        const sections = [
                {
                        name: "week top 10",
                        url: 'https://imdb188.p.rapidapi.com/api/v1/getWeekTop10',
                        days: "3",
                        category: "watch"
                },
                {
                        name: "fan favourites",
                        url: 'https://imdb188.p.rapidapi.com/api/v1/getFanFavorites?country=IN',
                        days: '5',
                        category: "watch"
                },
                {
                        name: "streaming",
                        url: 'https://imdb188.p.rapidapi.com/api/v1/getWhatsStreaming?country=IN',
                        days: '30',
                        category: "streaming"
                },
                {
                        name: "born today",
                        url: `https://imdb188.p.rapidapi.com/api/v1/getBornOn?month=${currentMonth}&day=${currentDay}`,
                        days: "0",
                        category: "celeb"
                },
                {
                        name: "upcoming movies",
                        url: 'https://imdb188.p.rapidapi.com/api/v1/getUpcomingMovies?region=IN',
                        days: '30',
                        category: "explore"
                }
        ];



        const loadSection = async (name, url, days, category) => {


                try {


                        const cache = await HomepageSection.findOne({ name });


                        if (cache && isCacheValid(cache,days)) {

                                 console.log(`Cache HIT → ${name} ${days}`);
                                return { name, data: cache.data, category }
                        }
                        else {
                                 
                                const options = {
                                        method: "GET",
                                        url: url,
                                        headers: {
                                                'x-rapidapi-key': process.env.API_KEY,
                                                'x-rapidapi-host': 'imdb188.p.rapidapi.com'
                                        }
                                }

                                const response = await axios.request(options);
                                const result = await response.data;

                                console.log(`FETCHING FROM API → ${name}`);
                                // console.log("data", result)

                                await HomepageSection.findOneAndUpdate(
                                        { name }, //filter object
                                        {
                                                $set: {
                                                        data: result,
                                                        category,
                                                        updatedAt: new Date()
                                                }
                                        }, // items going to update if found
                                        {
                                                upsert: true,
                                                new: true,
                                                setDefaultsOnInsert: true,

                                        }//if not found .. creates new object
                                );
                                return ({ name, data: result, category });
                        }


                } catch (error) {
                        console.error(`Initial load failed for ${name}: ${error.message}`);
                        console.error(`API ERROR for ${name}:`, {
                                message: error.message,
                                status: error.response?.status,
                                data: error.response?.data,
                                headers: error.response?.headers
                        });
                        return { name, error: true };
                }


        }

        //initial parallel load 

        const initialResult = await Promise.allSettled(
                sections.map((section) => loadSection(section.name, section.url, section.days, section.category)


                ));

        // initialResult.map((r) => {
        //         if (r.status === "fulfilled") {
        //                 const { name, data, } = r.value;
        //                 console.log(name," &",data)
        //                 return { name, success: true, data };
        //         } else {
        //                 // rejected should be rare because loadSection catches errors, but handle defensively
        //                 return {
        //                         name: "unknown",
        //                         success: false,
        //                         error: true,
        //                         reason: r.reason?.message || String(r.reason),
        //                 };
        //         }
        // });

        res.status(200).json(initialResult);
        // return initialResult;


}

export default homePageController;