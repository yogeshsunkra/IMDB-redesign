import React from "react";
import axios from "axios";


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
		throw error;
	}


}


export const homePageSections = async (key) => {

	try {
		console.log(key,"API KEY ")
		const response = await axios.get(`http://localhost:5000/api/v1/home_page/${key}`);

		const data = await response.data;

		// const result = data.map(d=>({
    
        //      name : d.value.name,
        //      data : d.value.data,
        //      category:d.value.category,
        //  }));

		


		console.log("data fetched ",data);
		return data; 
	} catch (error) {
		console.error(error, "NOW");
		throw error;
	}



}
export const celebData = async (id) => {

	try {
		const response = await axios.get(`http://localhost:5000/api/v1/person/${id}`);

		const data = await response.data;
		console.log("data fetched");
		return data;
	} catch (error) {
		console.error(error, "NOW");
		throw error;
	}



}
export const titleData = async (id) => {

	try {
		const response = await axios.get(`http://localhost:5000/api/v1/title/${id}`);

		const data = await response.data;
		console.log("data fetched");
		return data;
	} catch (error) {
		console.error(error, "NOW");
		throw error;
	}



}