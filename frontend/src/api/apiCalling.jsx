import { useEffect } from "react";
import axios from "axios";

// export const mainPageItems = () => {

// // const [day,setDay] = useState("01");
// // const [month,setMonth] = useState('01');
// // const [loading,setLoading] = useState(true);
// // const [error,setError] = useState(false);
// // const [data,setData] = useState({
// //     topMovies :[],
// //     streamingNow :[],
// //     bornToday :[],
// //     fanFav :[],
// //     popularCeleb :[],
// //     upcomingMovies:[]
// // });


// // const today = new Date();

// // const currentMonth = today.getMonth()+1;
// // const currentDay = today.getMonth().toString().padStart(2,'0');

// // setDay(currentDay);
// // setMonth(currentMonth.toString().padStart(2,'0'));


// const options = {
// 	method: 'GET',
// 	headers: {
// 		'x-rapidapi-key': import.meta.env.VITE_API_KEY,
// 		'x-rapidapi-host': 'imdb188.p.rapidapi.com'
// 	}
// };


// // useEffect(()=>{

// // const fetchData = async() =>{

// //     try{


//                 // axios.request('https://imdb188.p.rapidapi.com/api/v1/getWeekTop10',options)
// //                 // axios.get('https://imdb188.p.rapidapi.com/api/v1/getWhatsStreaming?country=IN',options),
// //                 // axios.get(`https://imdb188.p.rapidapi.com/api/v1/getBornOn?month=${month}&day=${day}`,options),
// //                 // axios.get('https://imdb188.p.rapidapi.com/api/v1/getFanFavorites?country=IN',options),
// //                 // axios.get('https://imdb188.p.rapidapi.com/api/v1/getPopularCelebrities',options),
// //                 // axios.get('https://imdb188.p.rapidapi.com/api/v1/getUpcomingMovies?region=IN',options)




// //             setData({
// //                 topMovies:response1.data,
// //                 // streamingNow:response2.data,
// //                 // bornToday:response3.data,
// //                 // fanFav:response4.data,
// //                 // popularCeleb:response5.data,
// //                 // upcomingMovies:response6.dataS

// //             });
// //             setLoading(false);
// //             ;


// //     }
// //     catch(err){
// //         setError(true);
// //         setLoading(false);
// //     }

// // }

// // fetchData();

// // },[]);


// // console.log(data);
// // return data;



// }

export const AutoComplete = async (input) => {


	//Api Call 
	const options = {
		method: 'GET',
		url: 'https://imdb-com.p.rapidapi.com/auto-complete',
		params: { query: input },
		headers: {
			'x-rapidapi-key': import.meta.env.VITE_API_KEY,
			'x-rapidapi-host': 'imdb-com.p.rapidapi.com'
		}
	};

	try {
		const response = await axios.request(options);

		const data = response.data;
		return data.data;
	} catch (error) {
		console.error(error, "NOW");
	}


}


export const homePageSections = async () => {

	try {
		const response = await axios.get('http://localhost:5000/api/v1/home_page');

		const data = await response.data;

		const result = data.map(d=>({
    
             name : d.value.name,
             data : d.value.data,
             category:d.value.category,
         }));

	// 	 const result = data.map(d=>({

    //      name : d.value.name,
    //      data : d.value.data

    //  }));

		console.log("data fetched ",result);
		return result; 
	} catch (error) {
		console.error(error, "NOW");
	}



}
export const celebData = async () => {

	try {
		const response = await axios.get('http://localhost:5000/api/v1/home_page');

		const data = response.data;
		console.log("data fetched");
		return data[0];
	} catch (error) {
		console.error(error, "NOW");
	}



}
export const titleData = async () => {

	try {
		const response = await axios.get('http://localhost:5000/api/v1/home_page');

		const data = response.data;
		console.log("data fetched");
		return data[0];
	} catch (error) {
		console.error(error, "NOW");
	}



}