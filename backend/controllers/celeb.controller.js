// import Person from "../models/celeb.model.js";
// import axios from "axios";


// const celebController = async (req, res) => {

//     try {

//         const id = req.params.id;
//         console.log(id, "PARAMS ID");
//         let person = await Person.findOne({ id })

//         if (person) {

//             console.log("Found in database")

//             return res.json(person);

//         }
//         else {
//             console.log("person not found")


//             const options = {
//                 method: 'GET',
//                 url: 'https://imdb-scraper3.p.rapidapi.com/api/v1/name/detail',
//                 params: { id: id },
//                 headers: {
//                     'x-rapidapi-key': process.env.API_KEY,
//                     'x-rapidapi-host': 'imdb-scraper3.p.rapidapi.com',
//                     'Content-Type': 'application/json'
//                 }
//             };

//             console.log(options.url);
//             console.log(options.params);


//             const response = await axios.request(options);
//             console.log("axios fetched")

//             person = new Person({
//                 id: id,
//                 data: response.data,
//             })

//             await person.save();
//             res.status(200).json(person);
//             // console.log("data",person);


//         }
//     } catch (err) {
//         // res.status(500).json({ error: err.message })

//         console.error("AXIOS ERROR RESPONSE:", err.response?.data || err.message);
//         res.status(500).json({ error: err.response?.data || err.message });
//     }

// }

// export default celebController



// import express from "express";
// import dotenv from "dotenv";
// import HomepageSection from "../models/home.model.js";
// import axios from "axios";

// dotenv.config();



// const today = new Date()
// const currentMonth = (today.getMonth() + 1).toString().padStart(2, '0');
// const currentDay = today.getDate().toString().padStart(2, '0');


// const isCacheValid = (cache, days) => {

//         const numericDays = Number(days);

//         if (numericDays > 0) {

//                 const now = Date.now();
//                 const cacheDuration = 24 * 3600 * 1000 * days;
//                 const lastUpdated = new Date(cache.updatedAt).getTime();

//                 const durationCheck = now - lastUpdated < cacheDuration

//                 return durationCheck;
//         }

//         const todayDate = new Date().toDateString();
//         const cacheDate = new Date(cache.updatedAt).toDateString();
//         const dateCheck = todayDate === cacheDate;
//         console.log(todayDate, " : ", cacheDate, " : ", dateCheck, "dateCheck");


//         return dateCheck;


// }


// const request = [
//         {
//                 name: "personOverview",
//                 url: 'https://imdb-com.p.rapidapi.com/actor/get-overview',
//                 days: "30",
//                 key: "overview"
//         },
//         {
//                 name: "personKnownFor",
//                 url: 'https://imdb-com.p.rapidapi.com/actor/get-know-for',
//                 days: '30',
//                 key: "knownFor"
//         },
//         {
//                 name: "personTrivia",
//                 url: 'https://imdb-com.p.rapidapi.com/actor/get-trivia',
//                 days: '30',
//                 key: "trivia"
//         },
//         {
//                 name: "personQuotes",
//                 url: `https://imdb-com.p.rapidapi.com/actor/get-quotes`,
//                 days: "30",
//                 key: "quotes"
//         },

// ];


// const celebController = async (req, res) => {


//         //ID = nm00000001

//         const id = req.params.id;
// //         console.log(id, "PARAMS ID");
//         let person = await Person.findOne({ id })

//         const request = sections.find(section => section.key === key);

//         if (!person) {
//                 return res.status(404).json({
//                         success: false,
//                         message: `No person for "${id}"`,
//                 });
//         }

//         const loadSection = async (name, url, days,id) => {


//                 try {

//                         const cache = await HomepageSection.findOne({ id });


//                         if (cache && isCacheValid(cache, days)) {

//                                 console.log(`Cache HIT → ${name} ${days}`);
//                                 return { name, data: cache.data, category }
//                         }
//                         else {

//                                 const options = {
//                                         method: "GET",
//                                         url: url,
//                                         headers: {
//                                                 'x-rapidapi-key': process.env.API_KEY,
//                                                 'x-rapidapi-host': 'imdb188.p.rapidapi.com'
//                                         }
//                                 }

//                                 const response = await axios.request(options);
//                                 const result = await response.data;

//                                 console.log(`FETCHING FROM API → ${name}`);
//                                 // console.log("data", result)

//                                 await HomepageSection.findOneAndUpdate(
//                                         { name }, //filter object
//                                         {
//                                                 $set: {
//                                                         data: result,
//                                                         category,
//                                                         updatedAt: new Date()
//                                                 }
//                                         }, // items going to update if found
//                                         {
//                                                 upsert: true,
//                                                 new: true,
//                                                 setDefaultsOnInsert: true,

//                                         }//if not found .. creates new object
//                                 );
//                                 return ({ name, data: result, category });
//                         }

//                 } catch (error) {
//                         console.error(`Initial load failed for ${name}: ${error.message}`);
//                         console.error(`API ERROR for ${name}:`, {
//                                 message: error.message,
//                                 status: error.response?.status,
//                                 data: error.response?.data,
//                                 headers: error.response?.headers
//                         });
//                         return { name, error: true };
//                 }

//         }


//         const result = await loadSection(request.name, request.url, request.days, request.category);


//         res.status(200).json(result);
//         // return initialResult;

// }

// export default celebController;




import Person from "../models/celeb.model.js";
import axios from "axios";
import express from "express";
import dotenv from "dotenv";

const celebController = async (req, res) => {
    try {
        const { id } = req.params;

        console.log(id, "PARAMS ID");

        // Check cache
        let person = await Person.findOne({ id });

        if (person) {
            console.log("Found in database");
            return res.status(200).json(person);
        }

        console.log("Person not found. Fetching from API...");

        const requests = [
            {
                name: "personOverview",
                url: 'https://imdb-com.p.rapidapi.com/actor/get-overview',
                key: "overview",
            },
            {
                name: "personKnownFor",
                url: 'https://imdb-com.p.rapidapi.com/actor/get-know-for',
                // Verify endpoint
                key: "knownFor",
            },
            {
                name: "awards",
                url: 'https://imdb-com.p.rapidapi.com/actor/get-awards-summary',
                key: "awards",
            },
            {
                name: "personQuotes",
                url: 'https://imdb-com.p.rapidapi.com/actor/get-quotes',
                key: "quotes",
            },
            {
                name: "personImages",
                url: 'https://imdb-com.p.rapidapi.com/actor/get-images',
                key: "images",
            },
        ];

        // Fetch all APIs in parallel
        const responses = await Promise.allSettled(
            requests.map(async (request) => {

                console.log(request.url, "REQUEST URL");
                console.log(typeof request.url, "TYPE OF");


                const options = {
                    method: 'GET',
                    url: request.url,
                    params: {
                        nconst: id
                    },
                    headers: {
                        "x-rapidapi-key": process.env.API_KEY,
                        'x-rapidapi-host': 'imdb-com.p.rapidapi.com',
                        'Content-Type': 'application/json'
                    },
                };
                const response = await axios.request(options);
                console.log(response.data);
                const result = response.data;



                return {
                    key: request.key,
                    data: result,
                };
            })
        );

        // Store all responses in one object
        const personData = {};

        responses.forEach((result) => {
            if (result.status === "fulfilled") {
                personData[result.value.key] = result.value.data;
            } else {
                console.error("Request Failed:", result.reason?.response?.data || result.reason);

                // Optional: keep failed requests as null
                personData[result.reason] = null;
            }
        });

        // Save to MongoDB
        person = new Person({
            id,
            data: personData,

        });

        await person.save();

        console.log("Saved to database");
        console.log(personData, "person Data");

        return res.status(200).json(person);
    } catch (err) {
        console.error("AXIOS ERROR:", err.response?.data || err.message);

        return res.status(500).json({
            success: false,
            error: err.response?.data || err.message,
        });
    }
};

export default celebController;