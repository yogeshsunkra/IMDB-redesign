
import React from "react";
import { createContext, useState, useEffect } from "react";
import { homePageSections } from "src/api/apiCalling";
import { DataContext } from "./DataContext";

export const DataProvider = ({ children }) => {

    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);

    const isValid = (cache) =>{

        const parsed = JSON.parse(cache);

        const timeStamp = parsed.date;

        const today = new Date().toISOString().split("T")[0];

        const expired = today === timeStamp;

        return expired ;

}




    useEffect(() => {


        const cached = localStorage.getItem('homePageData');

        console.log("DATA CONTEXT")


        if ((cached) && (isValid(cached))) {

            const parsed = JSON.parse(cached);
            setSections(parsed);
            setLoading(false);
            return ;
        }
        else {

            homePageSections().then(data => {

                console.log("UNCACHED LS");

                if (data) {
                    console.log("INITIAL", data);

                    const categorizedData = data.reduce((acc, item) => {
                        acc[item.category] = acc[item.category] || [];
                        acc[item.category].push(item);
                        return acc;

                    }, {});

                    if (categorizedData) {


                        const item = {
                            value: categorizedData,
                            date: new Date().toISOString().split("T")[0],
                        }




                        localStorage.setItem("homePageData", JSON.stringify(item));

                        setSections(categorizedData);

                        setLoading(false);

                        console.log(sections, "SECTIONS");
                        console.log(loading, "Loading....");

                    }
                }

            }).catch(err => console.log(err, "ERROR"));

        }




    }, [])

    return (
        <DataContext.Provider value={
            {
                sections,
                loading
                // userChoices :"",
            }
        }>
            {children}
        </DataContext.Provider>
    )



}