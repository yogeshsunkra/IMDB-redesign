import express from "express";
import mongoose from "mongoose";
import axios from "axios";
import dotenv from 'dotenv';
import Title from "../models/title.model.js"

dotenv.config()


const titleController = async (req, res) => {

    const id = req.params.id;
    const cacheDuration = 24 * 3600 * 1000 * 10;
    const now = Date.now()

    try {
        const options = {
            method: 'GET',
            url: 'https://imdb146.p.rapidapi.com/v1/title/',
            params: { id: id },
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': 'imdb146.p.rapidapi.com'
            }
        };

        let title = await Title.findOne({ id: id });



        if (title) {
            const valid = now - new Date(title.createdAt).getTime() < cacheDuration;
            if (valid) {
                console.log("data", title)
                return res.json(title);
            }


        }

        const response = await axios.request(options);

        title = new Title({
            id: id,
            data: response.data,
        })

        await title.save();
        res.status(200).json(title);




    }
    catch (err) {
        console.error("AXIOS ERROR RESPONSE:", err.response?.data || err.message);
        res.status(500).json({ error: err.response?.data || err.message });
    }
}

export default titleController;