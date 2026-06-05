

import { useQuery } from "@tanstack/react-query";
import { homePageSections } from "../api/apiCalling";

export const useHomePageSections = () => {
  return useQuery({
    queryKey: ["homeSections"],
    queryFn: async () => {
      const data = await homePageSections();

      console.log(data , "TANSTACK DATA");
      // console.log(isloading , "LOADING")

      return data.reduce((acc, item) => {
        acc[item.category] ??= [];
        acc[item.category].push(item);
        return acc;
      }, {});
    },

    staleTime: 30 * 60 * 1000,
  });
};