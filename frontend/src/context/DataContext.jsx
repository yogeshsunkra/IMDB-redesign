import React from "react";
import { createContext, useState, useEffect } from "react";
import { homePageSections } from "src/api/apiCalling";

export const DataContext = createContext();


export const DataProvider = ({ children }) => {


    const [watch, setWatch] = useState([]);
    const [explore, setExplore] = useState([]);
    const [celeb, setCeleb] = useState([]);
    const [sections, setSections] = useState([]);
    const [loading,setLoading] = useState(true);

    
    // const [userChoices,setUserChoices] = useState();


    useEffect(() => {

        homePageSections().then(data => {

            // console.log("INITIAL", data);

            if (data) {
                console.log("INITIAL", data);

                const categorizedData = data.reduce((acc,item)=>{
                    acc[item.category] === acc[item.category] || [];
                    acc[item.category].push(item);
                    return acc;

                },{});

                setSections(categorizedData);
                setLoading(false);
                console.log (sections,"SECTIONS");
                console.log (loading,"Loading....");



                





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