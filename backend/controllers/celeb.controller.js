import Person from "../models/celeb.model.js";
import axios from "axios";


const celebController = async(req,res) => {

    try {

        const id = req.params.id;
        console.log(id);
        let person = await Person.findOne({ id: id })

        if (person) return res.json(person);
        console.log("Found in database")


        const options = {
            method: 'GET',
            url: 'https://imdb146.p.rapidapi.com/v1/name/',
            params: { id },
            headers: {
                'x-rapidapi-key': process.env.API_KEY,
                'x-rapidapi-host': 'imdb146.p.rapidapi.com'
            }
        };


        const response = await axios.request(options);
        console.log("axios fetched")

        person = new Person({
            id: id,
            data: response.data,
        })

        await person.save();
        res.status(200).json(person);
        // console.log("data",person);



    } catch (err) {
        // res.status(500).json({ error: err.message })

        console.error("AXIOS ERROR RESPONSE:", err.response?.data || err.message);
        res.status(500).json({ error: err.response?.data || err.message });
    }
  
}

export default celebController
