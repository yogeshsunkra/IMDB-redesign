
import React from "react";
import { createContext, useState, useEffect } from "react";
import { homePageSections } from "src/api/apiCalling";
import { DataContext } from "./DataContext";

export const DataProvider = ({ children }) => {

    const [searched, setSearched] = useState([]);
    const [loading, setLoading] = useState(true);

//     const isValid = (cache) =>{

//         const parsed = JSON.parse(cache);

//         const timeStamp = parsed.date;

//         const today = new Date().toISOString().split("T")[0];

//         const expired = today === timeStamp;

//         return expired ;

// }




    useEffect(() => {


        const cached = localStorage.getItem('lastSearchedData');

        console.log("DATA CONTEXT")


        if (cached)  {

            const parsed = JSON.parse(cached);
            setSearched(parsed);
            setLoading(false);
            return ;
        }

    },[])




    return (
        <DataContext.Provider value={
            {
                searched,
                loading
            }
        }>
            {children}
        </DataContext.Provider>
    )


}