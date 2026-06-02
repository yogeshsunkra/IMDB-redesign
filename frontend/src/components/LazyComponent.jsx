
import React from "react";
import { useState, useRef, useEffect } from "react";

const LazyComponent = ({children}) => {

    const ref = useRef();
    const [visible , setVisible] = useState(false);

    useEffect(()=>{

        const observer = new IntersectionObserver(
            ([entry])=>{

                if(entry.isIntersecting){
                    setVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold : 0.1,
                rootMargin : "200px"
            }
        )

        if(ref.current)observer.observe(ref.current);

        return () => observer.disconnect();

    },[])


    return(

        <div ref={ref}>
            {visible? children :"Loading"}
        </div>
    )
}

export default LazyComponent;