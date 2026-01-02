
import { createContext, useState } from "react";
import { homePageSections } from "src/api/apiCalling";

export const DataContext = createContext();


export const DataProvider = ({ children }) => {


    const [watch, setWatch] = useState();
    const [explore, setExplore] = useState();
    const [celeb, setCeleb] = useState();
    // const [userChoices,setUserChoices] = useState();


    useEffect(() => {

        homePageSections().then(data => {

            
            if (data) {
                console.log("INITIAL", data);
                const watchData = data.filter(d => d.category === "watch");
                const exploreData = data.filter(d => d.category === "explore");
                const celebData = data.filter(d => d.category === "celeb");

            }

            setWatch(watchData);
            setExplore(exploreData);
            setCeleb(celebData);




        }).catch(err => console.log(err, "ERROR"));

    }, [])

    return (
        <DataContext.Provider value={
            {
                watch,
                explore,
                celeb,
                // userChoices :"",
            }
        }>
            {children}
        </DataContext.Provider>
    )


}