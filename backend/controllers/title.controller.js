import Title from "../models/title.model.js";
import axios from "axios";
import express from "express";
import dotenv from "dotenv";

const titleController = async (req, res) => {
    try {
        const { id } = req.params;

        console.log(id, "PARAMS ID");

        // Check cache
        let title = await Title.findOne({ id });

        if (title) {
            console.log("Found in database");
            return res.status(200).json(title);
        }

        console.log("Title not found. Fetching from API...");

        const requests = [
            {
                name: "titleOverview",
                url: `https://imdb236.p.rapidapi.com/api/imdb/${id}`,
                key: "overview",
            },
            {
                name: "similarTitle",
                url: `https://imdb236.p.rapidapi.com/api/imdb/${id}/similar`,
                // Verify endpoint
                key: "similarTitle",
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
                    headers: {
                        "x-rapidapi-key": process.env.API_KEY,
                        'x-rapidapi-host': 'imdb236.p.rapidapi.com',
                        'Content-Type': 'application/json'
                    },
                };
                const response = await axios.request(options);
                // console.log(response.data);
                const result = response.data;



                return {
                    key: request.key,
                    data: result,
                };
            })
        );

        // Store all responses in one object
        const titleData = {};

        responses.forEach((result) => {
            if (result.status === "fulfilled") {
                titleData[result.value.key] = result.value.data;
            } else {
                console.error("Request Failed:", result.reason?.response?.data || result.reason);

                // Optional: keep failed requests as null
                titleData[result.reason] = null;
            }
        });

        // Save to MongoDB
        title = new Title({
            id,
            data: titleData,

        });

        await title.save();

        console.log("Saved to database");
        console.log(titleData, "person Data");

        return res.status(200).json(title);
    } catch (err) {
        console.error("AXIOS ERROR:", err.response?.data || err.message);

        return res.status(500).json({
            success: false,
            error: err.response?.data || err.message,
        });
    }
};

export default titleController;