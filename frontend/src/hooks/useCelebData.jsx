import { Query , useQuery} from "@tanstack/react-query"
import { celebData } from "src/api/apiCalling"


export const useCelebData = (id) =>{

    return useQuery({
        queryKey : ["Celeb",id],
        queryFn : async () => {
         const data = await celebData(id);
         console.log("CELEB TANSTACK",data.data);
         return data?.data;
        },
        
        staleTime : 30 * 60 * 1000
});

}