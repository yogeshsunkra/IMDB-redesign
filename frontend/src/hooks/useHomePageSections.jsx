

import { useQuery } from "@tanstack/react-query";
import { homePageSections } from "../api/apiCalling";

export const useHomePageSections = (key) => {
  return useQuery({
    queryKey: [key],
    queryFn: async () => {
      const data = await homePageSections(key);

      console.log(data , "TANSTACK DATA");
      console.log( "TANSTACK API HIT");
      // console.log(isloading , "LOADING")

      // return data.reduce((acc, item) => {
      //   acc[item.category] ??= [];
      //   acc[item.category].push(item);
      //   return acc;
      // }, {});

      return data;
    },

    staleTime: 30 * 60 * 1000,
  });
};