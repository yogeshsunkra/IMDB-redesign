import { Query , useQuery} from "@tanstack/react-query"
import { titleData } from "src/api/apiCalling"


export const useTitleData = (id) =>{

    return useQuery({
        queryKey : ["Title",id],
        queryFn : async () => {
         const data = await titleData(id);
         console.log("Title TANSTACK",data.data);
         return data.data;
        },
        
        staleTime : 30 * 60 * 1000
});

}