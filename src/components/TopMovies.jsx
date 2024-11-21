import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TopMovies = () => {

    const [data, setData] = useState();

    useEffect(()=>{
        const topMovies = async ()=>{

            // const options = {
            //     method: 'GET',
            //     // url: 'https://imdb188.p.rapidapi.com/api/v1/getWeekTop10',
            //     url: 'https://imdb188.p.rapidapi.com/api/v1/getFanFavorites',

            //     headers: {
            //         'x-rapidapi-key': '39870e17b3mshfb238bcfd1a9944p199473jsneaa09393eaf2',
            //         'x-rapidapi-host': 'imdb188.p.rapidapi.com'
            //     }
            // };
        
            // try {
            //     const response = await axios.request(options);
            //     setData(response.data);
            //     console.log(response.data);
            // } catch (error) {
            //     console.error(error);
            // }
    
        }
    
        
        topMovies();
    },[])
    
    
    return (
        <div>

        </div>
    )
}

export default TopMovies
