
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