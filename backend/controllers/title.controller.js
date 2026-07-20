// import express from "express";
// import mongoose from "mongoose";
// import axios from "axios";
// import dotenv from 'dotenv';
// import Title from "../models/title.model.js"

// dotenv.config()


// const titleController = async (req, res) => {

//     const id = req.params.id;
//     const cacheDuration = 24 * 3600 * 1000 * 10;
//     const now = Date.now()

//     try {

        

//         const options = {
//             method: 'GET',
//             url: 'https://imdb-scraper3.p.rapidapi.com/api/v1/title/detail',
//             params: { id: 'tt4154796' },
//             headers: {
//                 'x-rapidapi-key': process.env.API_KEY,
//                 'x-rapidapi-host': 'imdb-scraper3.p.rapidapi.com',
//                 'Content-Type': 'application/json'
//             }
//         };

//         let title = await Title.findOne({ id: id });



//         if (title) {
//             const valid = now - new Date(title.createdAt).getTime() < cacheDuration;
//             if (valid) {
//                 console.log("data", title)
//                 return res.json(title);
//             }


//         }

//         const response = await axios.request(options);

//         title = new Title({
//             id: id,
//             data: response.data,
//         })

//         await title.save();
//         res.status(200).json(title);




//     }
//     catch (err) {
//         console.error("AXIOS ERROR RESPONSE:", err.response?.data || err.message);
//         res.status(500).json({ error: err.response?.data || err.message });
//     }
// }

// export default titleController;


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

        if (numericDays > 0) {

                const now = Date.now();
                const cacheDuration = 24 * 3600 * 1000 * days;
                const lastUpdated = new Date(cache.updatedAt).getTime();

                const durationCheck = now - lastUpdated < cacheDuration

                return durationCheck;
        }

        const todayDate = new Date().toDateString();
        const cacheDate = new Date(cache.updatedAt).toDateString();
        const dateCheck = todayDate === cacheDate;
        console.log(todayDate, " : ", cacheDate, " : ", dateCheck, "dateCheck");


        return dateCheck;


}


const sections = [
        {
                name: "week top 10",
                url: 'https://imdb188.p.rapidapi.com/api/v1/getWeekTop10',
                days: "33",
                category: "watch",
                key: "week-top-ten"
        },
        {
                name: "fan favourites",
                url: 'https://imdb188.p.rapidapi.com/api/v1/getFanFavorites?country=IN',
                days: '35',
                category: "watch",
                key: "fan-fav"
        },
        {
                name: "streaming",
                url: 'https://imdb188.p.rapidapi.com/api/v1/getWhatsStreaming?country=IN',
                days: '30',
                category: "streaming",
                key: "streaming"
        },
        {
                name: "born today",
                url: `https://imdb188.p.rapidapi.com/api/v1/getBornOn?month=${currentMonth}&day=${currentDay}`,
                days: "30",
                category: "celeb",
                key: "born-today"
        },
        {
                name: "upcoming movies",
                url: 'https://imdb188.p.rapidapi.com/api/v1/getUpcomingMovies?region=IN',
                days: '30',
                category: "explore",
                key: "upcoming-movies"
        },
        {
                name: "popular celebrities",
                url: 'https://imdb188.p.rapidapi.com/api/v1/getPopularCelebrities',
                days: '30',
                category: "explore",
                key: "popular-celebrities"
        }
];


const TitleController = async (req, res) => {


        const { key } = req.params;

        const request = sections.find(section => section.key === key);

        if (!request) {
                return res.status(404).json({
                        success: false,
                        message: `No section found for "${key}"`,
                });
        }

        const loadSection = async (name, url, days, category) => {


                try {

                        const cache = await HomepageSection.findOne({ name });


                        if (cache && isCacheValid(cache, days)) {

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


        const result = await loadSection(request.name, request.url, request.days, request.category);


        res.status(200).json(result);
        // return initialResult;

}

export default TitleController;