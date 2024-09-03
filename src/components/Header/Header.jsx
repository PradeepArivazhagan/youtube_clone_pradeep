import React from "react";
import { useTheme } from "../../context/Context";

//Light Mode Icons
import menu from "../../assets/LightMode/menu.svg";
import search from "../../assets/LightMode/search.svg";
import mic from "../../assets/LightMode/mic.svg";
import camera from "../../assets/LightMode/camera.svg";
import bell from "../../assets/LightMode/bell.svg";
import youtubeLogo from "../../assets/LightMode/youtubeLogo.svg";

//Dark Mode Icons
import menudark from "../../assets/DarkMode/menudark.svg";
import searchdark from "../../assets/DarkMode/searchdark.svg";
import micdark from "../../assets/DarkMode/micdark.svg";
import cameradark from "../../assets/DarkMode/cameradark.svg";
import belldark from "../../assets/DarkMode/belldark.svg";
import youtubeLogoDark from "../../assets/DarkMode/youtubeDark.svg";

const Header = () => {
  const { theme, toggleTheme, toggleMenu } = useTheme();

  const onClickDark = () => {
    toggleTheme();
    document.body.classList.toggle("dark");
  };

  const onClickMenu = () => {
    toggleMenu();
  };

  return (
    <header className="fixed z-10 w-full py-2 lg:py-1 md:pb-3 md:px-3 lg:px-5 dark:text-white bg-white dark:bg-[#0f0f0f] font-[roboto] flex items-center justify-between">
      <div className="py-1 flex items-center justify-between md:gap-3">
        <div className="hover:bg-[#e3e3e3] dark:hover:bg-[#212121] rounded-full p-2">
          <button onClick={onClickMenu} className="hidden md:block">
            {theme ? (
              <img src={menudark} alt="menu" />
            ) : (
              <img src={menu} alt="menu" />
            )}
          </button>
        </div>
        {theme ? (
          <img
            className="w-20 md:w-24"
            src={youtubeLogoDark}
            alt="youtube logo"
          />
        ) : (
          <img className="w-20 md:w-24" src={youtubeLogo} alt="youtube logo" />
        )}
      </div>

      <div className="py-1 flex items-center gap-4">
        <div className="flex items-center">
          <div className="md:flex items-center py-2 px-4 hidden  lg:w-[580px] rounded-l-full border border-r-0 border-slate-400 dark:border-[#292929]">
            <input
              className="outline-none w-full text-[#0f0f0f] bg-transparent dark:text-white"
              type="search"
              placeholder="Search"
            />
          </div>
          <button className="hidden md:block py-2 px-5 rounded-r-full border border-slate-400 dark:border-[#292929] bg-[#eeeeee] hover:bg-[#e3e3e3] dark:bg-[#212121] dark:hover:bg-[#0f0f0f]">
            {theme ? (
              <img src={searchdark} alt="search" />
            ) : (
              <img src={search} alt="search" />
            )}
          </button>
        </div>
        <div className="hidden md:block p-2 rounded-full bg-[#eeeeee] hover:bg-[#e3e3e3] dark:bg-[#212121] dark:hover:bg-[#0f0f0f] cursor-pointer">
          {theme ? (
            <img src={micdark} alt="mic" />
          ) : (
            <img src={mic} alt="mic" />
          )}
        </div>
      </div>
      
      <div className="py-1 px-3 md:px-5 flex items-center justify-between gap-1 md:gap-2">
        <button
          onClick={onClickDark}
          className="hover:bg-[#e3e3e3] dark:hover:bg-[#212121] rounded-full p-2"
        >
          {theme ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
              />
            </svg>
          )}
        </button>
        <button className="hidden md:block hover:bg-[#e3e3e3] dark:hover:bg-[#212121] rounded-full p-2">
          {theme ? (
            <img src={cameradark} alt="camera" />
          ) : (
            <img src={camera} alt="camera" />
          )}
        </button>
        <button className="hover:bg-[#e3e3e3] dark:hover:bg-[#212121] rounded-full p-2">
          {theme ? (
            <img className="max-sm:w-6" src={belldark} alt="bell" />
          ) : (
            <img className="max-sm:w-6" src={bell} alt="bell" />
          )}
        </button>
        <button onClick={onClickDark} className="block md:hidden">
          {theme ? (
            <img className="max-sm:w-6" src={searchdark} alt="search" />
          ) : (
            <img className="max-sm:w-6" src={search} alt="search" />
          )}
        </button>
        <button className="hidden md:block bg-green-900 text-white text-base py-1 px-3 rounded-full">
          P
        </button>
      </div>
    </header>
  );
};

export default Header;
