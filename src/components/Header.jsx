import React from "react";
import { useState } from "react";
import { enablePageScroll, disablePageScroll } from "scroll-lock";
import Logo from "../assets/logo.svg";
import { RxHamburgerMenu as HamburgerMenu } from "react-icons/rx";
import { IoSearch as SearchIcon } from "react-icons/io5";
import { IoCloseOutline as CloseIcon } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import Button from "./Button";
import { menuItems } from "../constants/data.jsx";



const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [dropdown, setDropdown] = useState(null);
  const [activeIndex, setActiveIndex] = useState('');

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

  return (
    <div className=" relative w-full bg-dark-5 ">
      <div className="flex   items-center  md:justify-normal ">



        <div className=" py-[1rem] lg:mx-[5rem] 2xl:mx-[10rem]  flex  items-center w-full">
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
                  key={id}
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

          <div className="  hidden mx-[1rem]  rounded-xl overflow-hidden max-w-2xl  bg-dark-4  md:flex grow flex-wrap ">
            <input
              type="search"
              className=" w-full py-1 text-white bg-dark-4 px-[1rem]"
            ></input>
          </div>

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
            className="w-full  py-1 text-white bg-dark-5 px-[1rem]"
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
