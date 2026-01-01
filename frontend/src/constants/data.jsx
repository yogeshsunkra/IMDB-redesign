import React from 'react';
// import {MovieMenu} from '../assets/menu/MovieMenu.svg'
// import { ReactComponent as AwardsIcon} from '../assets/menu/awards-menu.svg';
// import { ReactComponent as CelebIcon} from '../assets/menu/celebs-menu.svg';
// import { ReactComponent as CommunityIcon} from '../assets/menu/community-menu.svg';
// import { ReactComponent as MovieIcon } from "../assets/menu/movie-menu.svg";
// import { ReactComponent as TvIcon} from '../assets/menu/tv-menu.svg';
// import { ReactComponent as WatchIcon} from '../assets/menu/watch-menu.svg';

export const menuItems = [
    {
        id:1,
        text:'Movies',
        icon: '/menu/movie-menu.svg',
        subText:[
            
            "Top 250 Movies",
            "Most Popular Movies",
            "Top Box Office",
            "Release Calendar",
            "Browse Movies by Genre" ,
            "Movie News",
            "Showtimes and Tickets",
            "India Movie Spotlight"
            
],

        
        
    },
    {
        id:2,
        text:'TV Shows',
        icon: "/menu/tv-menu.svg",
        subText:[
            "Top 250 TV Shows",
            "Most Popular TV Shows",
            "Whats on TV & Streaming",
            "Browse TV Shows by Genre",
            "Browse Movies by Genre" ,
            "TV News",
            
        ],
        

    },
    {
        id:3,
        text:'Celebs',
        icon: "/menu/celebs-menu.svg",
        subText:[
            
            "Most Popular Celebs",
            "Born Today",
            "Celebrity News", 
        ],

        

    },
    {
        id:4,
        text:'Watch',
        icon:"/menu/watch-menu.svg",
        subText:[
            "What to Watch",
            "Latest Trailers",
            "IMDb Originals",
            "IMDb Picks",
            "IMDb Spotlight" ,
            "IMDb Podcasts",
            
        ],

        

    },
    {
        id:5,
        text:'Awards & events',
        icon:"/menu/awards-menu.svg",
        subText:[
            "Oscars",
            "San Diego comic-con",
            "Emmys",
            "Awards Central",
            "Festival Central" ,
            "All events"
            
        ],
        

    },
    {
        id:6,
        text:'Community',
        icon:"/menu/community-menu.svg",
        subText:[
            "Help Center",
            "Contributor Zone",
            "Polls",

            
        ],
        

    },
]


export const filteredSections = async(data)=>{

    

}





