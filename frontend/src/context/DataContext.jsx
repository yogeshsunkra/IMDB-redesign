import React from "react";
import { createContext, useState, useEffect } from "react";
import { homePageSections } from "src/api/apiCalling";

export const DataContext = createContext();


const isValid = (cache) =>{

        const parsed = JSON.parse(cache);

        const timeStamp = parsed.date;

        const today = new Date().toISOString().split("T")[0];

        const expired = today === timeStamp;

        return expired ;

}


export const DataProvider = ({ children }) => {


    const [watch, setWatch] = useState([]);
    const [explore, setExplore] = useState([]);
    const [celeb, setCeleb] = useState([]);
    const [sections, setSections] = useState([]);
    const [loading, setLoading] = useState(true);


    // const [userChoices,setUserChoices] = useState();


    useEffect(() => {


        const cached = localStorage.getItem('homePageData');


        if ((cached) && (isValid(cached))) {

            // localStorage.clear();
            // console.log('CLEARED');
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











                    // const watchData = data.filter(d => d.category === "watch");
                    // const exploreData = data.filter(d => d.category === "explore");
                    // const celebData = data.filter(d => d.category === "celeb");


                    // setWatch(watchData);
                    // setExplore(exploreData);
                    // setCeleb(celebData);

                    // console.log(watch,"WATCH");
                    // console.log(explore,"EXPLORE");
                    // console.log(celebData,"CELEB");

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