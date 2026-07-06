import React from 'react';
// import {MovieMenu} from '../assets/menu/MovieMenu.svg'
// import { ReactComponent as AwardsIcon} from '../assets/menu/awards-menu.svg';
// import { ReactComponent as CelebIcon} from '../assets/menu/celebs-menu.svg';
// import { ReactComponent as CommunityIcon} from '../assets/menu/community-menu.svg';
// import { ReactComponent as MovieIcon } from "../assets/menu/movie-menu.svg";
// import { ReactComponent as TvIcon} from '../assets/menu/tv-menu.svg';
// import { ReactComponent as WatchIcon} from '../assets/menu/watch-menu.svg';


 import { homePageSections } from 'src/api/apiCalling';

export const menuItems = [
    {
        id: 1,
        text: 'Movies',
        icon: '/menu/movie-menu.svg',
        subText: [

            {
                title: "Top 250 Movies",
                path: "explore/top-250-movies"
            },
            {
                title: "Most Popular Movies",
                path: "explore/most-popular-movies"
            },
            {
                title: "Top Box Office",
                path: "explore/top-box-office"
            },
            {
                title: "Release Calendar",
                path: "explore/release-calendar"
            },

            {
                title: "Movie News",
                path: "explore/movie-news"
            },
            {
                title: "Showtimes and Tickets",
                path: "explore/showtimes-tickets"
            },
            {
                title: "India Movie Spotlight",
                path: "explore/india-spotlight"
            },




        ],



    },
    {
        id: 2,
        text: 'TV Shows',
        icon: "/menu/tv-menu.svg",
        subText: [

            {
                title: "Top 250 TV Shows",
                path: "explore/top-250-tv-shows"
            },
            {
                title: "Whats on TV & Streaming",
                path: "explore/whats-streaming"
            },
            {
                title: "TV News",
                path: "explore/tv-news"
            },

        ],


    },
    {
        id: 3,
        text: 'Celebs',
        icon: "/menu/celebs-menu.svg",
        subText: [

            {
                title: "Most Popular Celebs",
                path: "explore/most-popular-celebs"
            },
            {
                title: "Born Today",
                path: "explore/born-today",
            },
            {
                title: "Celebrity News",
                path: "explore/celebrity-news"
            },

        ],



    },
    {
        id: 4,
        text: 'Watch',
        icon: "/menu/watch-menu.svg",
        subText: [


            {
                title: "What to Watch",
                path: "explore/what-to-watch"
            },
            {
                title: "Latest Trailers",
                path: "explore/latest-trailers",
            },
            {
                title: "IMDb Originals",
                path: "explore/imdb-originals"
            },
            {
                title: "IMDb Picks",
                path: "explore/imdb-picks"
            },
            {
                title: "IMDb Spotlight",
                path: "explore/imdb-spotlight"
            },


        ],



    },
    {
        id: 5,
        text: 'Awards & events',
        icon: "/menu/awards-menu.svg",
        subText: [

            {
                title: "Oscars",
                path: "explore/oscars"
            },
            {
                title: "San Diego comic-con",
                path: "explore/comic-con",
            },
            {
                title: "Emmys",
                path: "explore/emmys"
            },
            {
                title: "Awards Central",
                path: "explore/awards-central"
            },
            {
                title: "All events",
                path: "explore/all-events"
            },

        ],


    },
    {
        id: 6,
        text: 'Community',
        icon: "/menu/community-menu.svg",
        subText: [

            {
                title: "Help Center",
                path: "explore/help-center"
            },
            {
                title: "Contributor Zone",
                path: "explore/contributor-zone"
            },
            {
                title: "Polls",
                path: "explore/polls"
            },


        ],


    },
]


export const queryData =  [

    {
        title : "Week Top 10",
        queryKey : "week-top-ten",
         api : homePageSections,
    },
    {
        title : "Fan Favourites",
        queryKey : "fan-favourites",
         api : homePageSections,
    },
    {
        title : "Upcoming Movies",
        queryKey : "upcoming-movies",
         api : homePageSections,
    },
    {
        title : "Born Today",
        queryKey : "born-today",
         api : homePageSections,
    },
    {
        title : "Streaming",
        queryKey : "streaming",
         api : homePageSections,
    },



]





