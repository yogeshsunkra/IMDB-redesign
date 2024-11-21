import React from "react";
import { useState, useEffect } from "react";
import { enablePageScroll, disablePageScroll } from "scroll-lock";
import Logo from "../assets/logo.svg";
import { RxHamburgerMenu as HamburgerMenu } from "react-icons/rx";
import { IoSearch as SearchIcon } from "react-icons/io5";
import { IoCloseOutline as CloseIcon } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { IoMdFilm } from "react-icons/io";
import { BsBookmarkPlus , BsBookmarkPlusFill} from "react-icons/bs";
import Button from "./Button";
import { menuItems } from "../constants/data.jsx";
import { AutoComplete } from "src/api/apiCalling.jsx";
import { NavLink } from "react-router-dom";
import OutsideClickHandler from "react-outside-click-handler";
import axios from "axios";


const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [activeIndex, setActiveIndex] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [input, setInput] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  useEffect(() => {

    if(input.trim() === ""){
      setSearchQuery(false);
    }
    else{
      setSearchQuery(true);
    }

    const timer = setTimeout(() => {

      
      if(input.trim() !== ""){
        AutoComplete(input).then((data) => { setSearchResults(data.d) }).catch(err => console.log(err));
      }



    }, 500)



    return () => clearTimeout(timer);


  }, [input])

  const toggleNavbar = () => {
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };
  const toggleSearchBar = () => {
    if (openSearchBar) {
      enablePageScroll();
      setOpenSearchBar(false);
    } else {
      setOpenSearchBar(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    } else if (openSearchBar) {
      enablePageScroll();
      setOpenSearchBar(false);
    } else {
      return;
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowDown') {
      if (focusedIndex < searchResults.length - 1) {
        setFocusedIndex(prev => prev + 1);
      }
    } else if (e.key === 'ArrowUp') {
      if (focusedIndex > 0) {
        setFocusedIndex(prev => prev - 1);
      }
    } 
    else if (e.key === 'Enter' && focusedIndex >= 0) {
      e.preventDefault();
      const selectedResult = searchResults[focusedIndex];
      setSearchQuery(false);
      setInput('');
      window.location.href = `/search/query/${selectedResult.id}`;
  };
}

  console.log(focusedIndex)

  if (searchResults !== undefined) {
    console.log(searchResults, "result");
    

  }

  console.log("SearchQuery",searchQuery);


console.log("INPUT" , input);

  return (
    <div className=" relative w-full bg-dark-5 ">
      <div className="flex   items-center  md:justify-normal ">



        <div className=" py-[1rem] lg:mx-[5rem]   flex  items-center w-full">
          <Button className="block 2xl:hidden" onClick={toggleNavbar}>
            <HamburgerMenu />
          </Button>

          <a href="#" className="">
            <img src={Logo} alt="Logo" />
          </a>

          <div className=" hidden mx-6 items-center  2xl:flex">
            {menuItems.map((item, id) => (
              <>
                <div
                  key={item.id}
                  className=" mx-[1rem]"
                  onMouseEnter={() => setDropdown(id)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  <div className="relative line-clamp-1">
                    <a href="#" className="text-dark-1 hover:text-n-1">
                      {item.text}
                    </a>

                  </div>


                  <div
                    className={`absolute  transition ease-out-[2s] ${dropdown === id ? "grid" : "hidden"
                      } 
                                origin-bottom top-3/4  left-0 w-full h-[30rem] bg-dark-5 grid-cols-4 px-40 py-16 z-30 `}
                  >
                    <div className="grid col-span-3 grid-cols-3">
                      {item.subText.map((subItem, subIndex) => (
                        <div key={subIndex} className="mx-4 cursor-pointer hover:text-n-1">
                          <a>{subItem}</a>
                        </div>
                      ))}
                    </div>

                    <div>
                      <img src={item.icon} alt="icon" />
                    </div>
                  </div>


                </div>


              </>
            ))}
          </div>

          <OutsideClickHandler  onOutsideClick={()=> searchQuery(false)} >
          <div className="  hidden mx-[1rem]  rounded-xl  max-w-2xl min-w-96  md:flex grow flex-wrap relative">

            <div className="overflow-x-hidden rounded-xl w-full ">
              <input
                type="text"
                autoComplete="off"
                className=" w-full py-1 text-white bg-dark-4 px-[1rem] focus:outline-none"
                onChange={(e) => {setInput(e.target.value),
                                    e.preventDefault()}

                 }
                 onKeyDown={(e)=>handleKeyDown(e)}
                
              ></input>
            

            
            
            
            
                <div className={` ${searchQuery ? "block":"hidden"} absolute top-11 w-full bg-dark-4 bg-opacity-30 backdrop-blur-xl text-white  h-96  overflow-y-scroll 
                  `}>
  
                  {
                    searchResults !== undefined  &&
                    (
  
                      searchResults.map((item, index) => (
                        

                          <NavLink key={index}   to={`search/query/${item.id}`} className={`flex flex-row py-2 border-b-2  border-b-gray-500 my-4 px-2
                          hover:bg-n-1 ${focusedIndex === index ? 'bg-n-1':''}`}
                          onClick={()=>setSearchQuery(false)}  
                          
                          >
                            <div className="mr-4  bg-dark-4 rounded-md overflow-hidden flex items-center justify-center" >
                              {
                                item.i ? (
                                  <img src={item.i ? item.i.imageUrl : ''}
                                  height={50} width={50}></img>
                                ) : (
                                  <div className="text-lt-2 text-[2rem] w-[56px] h-[70px] flex items-center justify-center">
                                    {item.q ? <IoMdFilm/> : <IoPersonSharp/>}
                                    <span className="text-n-1 h4-bold">{index}</span>
                                  </div>
                                )
                              }

                            </div>
                            <div>
                              <a className="h4">{item.l}</a>
                              <p className="p1 text-dark-2">{item.s}</p>
                            </div>
  
                          </NavLink>
  
                        
  
                      )
                      )
  
  
                    )
  
  
                  }
  
                  <NavLink to={`/searchResults/${input}`} state={{ searchResults }}
                  onClick={()=>setSearchQuery(false)}>
                  
                    <p>See all </p>
                  </NavLink>

  
                </div>

                </div>


          </div>
          </OutsideClickHandler>




          <div className="hidden md:flex line-clamp-1">
            <Button>
              WatchList
            </Button>
            <Button>
              Sign In
            </Button>

          </div>




        </div>




        <div className="flex items-center   md:hidden">
          <Button px="px-[1rem]" onClick={toggleSearchBar}>
            <SearchIcon />
          </Button>

          <Button textClass='w-max'>
            Sign In
          </Button>
        </div>


      </div>



      {/* //////////////////// */}

      <div className={`absolute ${openNavigation ? "block" : "hidden"
        } 2xl:hidden top-0 left-0 right-1/3 bg-dark-3 h-screen z-50 drop-shadow-2xl`}
      >


        <div className="absolute top-6 right-0 ">
          <Button px="px-[1rem] w-full" textClass="h2" onClick={handleClick}>
            <CloseIcon />
          </Button>
        </div>




        {/* <div>
          <Accordian item = {menuItems}/>
        </div> */}

        <div className="absolute top-20 w-full">
          {menuItems.map((item, id) => (
            <>
              <div key={id} className={`  h3  mx-[2rem] py-[1rem] ${id === activeIndex ? 'text-n-1' : 'text-dark-1'}`}
                onClick={() => id === activeIndex ? setActiveIndex('') : setActiveIndex(id)}>

                <div className="flex justify-between items-center">
                  <div className="flex gap-10 items-center">
                    <img src={item.icon} width='40px' />
                    <a>{item.text}</a>
                  </div>

                  <div className="">
                    <IoIosArrowDown />
                  </div>
                </div>


                <div className={`flex flex-col p1 py-[1rem] px-[5rem] text-dark-1 ${id === activeIndex ? 'block border-solid border-b-2 border-[#78747430]' : 'hidden'}`}>
                  {item.subText.map((subItem, subIndex) => (
                    <div key={subIndex} className="py-[0.5rem] cursor-pointer hover:text-n-1">
                      <a>{subItem}</a>
                    </div>

                  ))}
                </div>

              </div>


            </>


          ))}
        </div>

      </div>



      <div className={`absolute ${openSearchBar ? "block" : "hidden"} 
                      md:hidden top-2 z-10 flex  backdrop-blur-sm  items-center w-full`}>
        <div className="relative  backdrop-blur-sm ring-1 overflow-hidden rounded-[10px] ring-dark-1 left-10 w-5/6">
          <input
            type="search"
            className="w-full  py-1 text-white bg-dark-5 px-[1rem] focus:outline-none"
            onChange={(e) => setInput(e.target.value)}
          ></input>
        </div>

        <div className="absolute top-2 right-0 ">
          <Button
            px="px-[1rem] "
            textClass="h4-bold text-[1.5rem]"
            onClick={handleClick}
          >
            <CloseIcon />
          </Button>
        </div>
      </div>



    </div>
  );
};

export default Header;
