import Person from "../models/celeb.model.js";
import axios from "axios";


const celebController = async (req, res) => {

    try {

        const id = req.params.id;
        console.log(id, "PARAMS ID");
        let person = await Person.findOne({ id })

        if (person) {

            console.log("Found in database")

            return res.json(person);

        }
        else {
            console.log("person not found")


            const options = {
                method: 'GET',
                url: 'https://imdb-scraper3.p.rapidapi.com/api/v1/name/detail',
                params: { id: id },
                headers: {
                    'x-rapidapi-key': process.env.API_KEY,
                    'x-rapidapi-host': 'imdb-scraper3.p.rapidapi.com',
                    'Content-Type': 'application/json'
                }
            };

            console.log(options.url);
            console.log(options.params);


            const response = await axios.request(options);
            console.log("axios fetched")

            person = new Person({
                id: id,
                data: response.data,
            })

            await person.save();
            res.status(200).json(person);
            // console.log("data",person);


        }
    } catch (err) {
        // res.status(500).json({ error: err.message })

        console.error("AXIOS ERROR RESPONSE:", err.response?.data || err.message);
        res.status(500).json({ error: err.response?.data || err.message });
    }

}

export default celebController
