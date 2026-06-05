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


		console.log("data fetched ",result);
		return result; 
	} catch (error) {
		console.error(error, "NOW");
	}



}
export const celebData = async () => {

	try {
		const response = await axios.get('http://localhost:5000/api/v1/celeb');

		const data = response.data;
		console.log("data fetched");
		return data[0];
	} catch (error) {
		console.error(error, "NOW");
	}



}
export const titleData = async () => {

	try {
		const response = await axios.get('http://localhost:5000/api/v1/title');

		const data = response.data;
		console.log("data fetched");
		return data[0];
	} catch (error) {
		console.error(error, "NOW");
	}



}