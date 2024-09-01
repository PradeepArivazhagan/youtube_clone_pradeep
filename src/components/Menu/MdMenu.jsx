import React from "react";
import { useTheme } from "../../context/Context";

//Light Mode Icons
import home from "../../assets/home.svg";
import shorts from "../../assets/shorts.svg";
import subscription from "../../assets/subscription.svg";
import channel from "../../assets/yourchannel.svg";
import history from "../../assets/history.svg";
import playlists from "../../assets/playlist.svg";
import yourvideos from "../../assets/yourvideos.svg";
import watchlater from "../../assets/watchlater.svg";
import likedvideos from "../../assets/like.svg";
import greekstack from "../../assets/greekstack.jpg";
import freecodecamp from "../../assets/freecodecamp.jpg";
import learncode from "../../assets/learncode.jpg";
import netninja from "../../assets/netninja.jpg";
import traversy from "../../assets/traversy.jpg";
import webdev from "../../assets/webdev.jpg";
import trending from "../../assets/trending.svg";
import shopping from "../../assets/shopping.svg";
import music from "../../assets/music.svg";
import flim from "../../assets/flim.svg";
import live from "../../assets/live.svg";
import gaming from "../../assets/gaming.svg";
import news from "../../assets/news.svg";
import sports from "../../assets/sports.svg";
import course from "../../assets/course.svg";
import fashion from "../../assets/fashion.svg";
import podcast from "../../assets/podcast.svg";
import yt from "../../assets/yt.svg";
import studio from "../../assets/studio.svg";
import musiclogo from "../../assets/musiclogo.svg";
import kids from "../../assets/kids.svg";
import setting from "../../assets/setting.svg";
import report from "../../assets/report.svg";
import help from "../../assets/help.svg";
import feedback from "../../assets/feedback.svg";

//Dark Mode Icons
import homedark from "../../assets/homedark.svg";
import shortsdark from "../../assets/shortsdark.svg";
import subscriptiondark from "../../assets/subscriptiondark.svg";
import channeldark from "../../assets/yourchanneldark.svg";
import historydark from "../../assets/historydark.svg";
import playlistsdark from "../../assets/playlistdark.svg";
import yourvideosdark from "../../assets/yourvideosdark.svg";
import watchlaterdark from "../../assets/watchlaterdark.svg";
import likedvideosdark from "../../assets/likedark.svg";
import trendingdark from "../../assets/trendingdark.svg";
import shoppingdark from "../../assets/shoppingdark.svg";
import musicdark from "../../assets/musicdark.svg";
import flimdark from "../../assets/flimdark.svg";
import livedark from "../../assets/livedark.svg";
import gamingdark from "../../assets/gamingdark.svg";
import newsdark from "../../assets/newsdark.svg";
import sportsdark from "../../assets/sportsdark.svg";
import coursedark from "../../assets/coursedark.svg";
import fashiondark from "../../assets/fashiondark.svg";
import podcastdark from "../../assets/podcastdark.svg";
import settingdark from "../../assets/settingdark.svg";
import reportdark from "../../assets/reportdark.svg";
import helpdark from "../../assets/helpdark.svg";
import feedbackdark from "../../assets/feedbackdark.svg";

import menu from "../../assets/menu.svg";
import youtubeLogo from "../../assets/youtubeLogo.svg";
import youtubeLogoDark from "../../assets/youtubeDark.svg";
import menudark from "../../assets/menudark.svg";



const MdMenu = () => {
  const { theme, isShowmenu, toggleMenu } = useTheme();

  const onClickMenu = () => {
    toggleMenu();
  };

  return (
    <>
      {isShowmenu && (
        <div
          className="hidden md:block fixed bg-white lg:hidden z-50 font-[roboto] w-1/3 h-screen border-r-2 border-slate-200 dark:border-[#292929] [&::-webkit-scrollbar]:[width:8px] 
      [&::-webkit-scrollbar-thumb]:bg-white dark:[&::-webkit-scrollbar-thumb]:bg-[#0f0f0f] [&::-webkit-scrollbar-thumb]:hover:bg-[#909090] dark:[&::-webkit-scrollbar-thumb]:hover:bg-[#909090]
      overflow-y-auto dark:bg-[#0f0f0f]"
        >
          <ul className="py-2 px-3">
            <li className="py-1 px-1 flex items-center gap-4">
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
                <img
                  className="w-20 md:w-24"
                  src={youtubeLogo}
                  alt="youtube logo"
                />
              )}
            </li>
            <li className="w-52 bg-[#eeeeee] hover:bg-[#e9e9e9] dark:hover:bg-[#292929] py-2 px-4 flex items-center rounded-xl gap-5 dark:bg-[#212121] dark:text-white">
              {theme ? (
                <img src={homedark} alt="home" />
              ) : (
                <img src={home} alt="home" />
              )}
              Home
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={shortsdark} alt="shorts" />
              ) : (
                <img src={shorts} alt="shorts" />
              )}
              Shorts
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={subscriptiondark} alt="subcrition" />
              ) : (
                <img src={subscription} alt="subcrition" />
              )}
              Subscription
            </li>
            <hr className="my-3" />
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-1 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              You
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-4"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={channeldark} alt="channel" />
              ) : (
                <img src={channel} alt="channel" />
              )}
              Your channel
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={historydark} alt="history" />
              ) : (
                <img src={history} alt="history" />
              )}
              History
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={playlistsdark} alt="playlists" />
              ) : (
                <img src={playlists} alt="playlists" />
              )}
              Playlists
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={yourvideosdark} alt="yourvideos" />
              ) : (
                <img src={yourvideos} alt="yourvideos" />
              )}
              Your videos
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={watchlaterdark} alt="watchlater" />
              ) : (
                <img src={watchlater} alt="watchlater" />
              )}
              Watch Later
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={likedvideosdark} alt="likedvideos" />
              ) : (
                <img src={likedvideos} alt="likedvideos" />
              )}
              Liked Videos
            </li>
          </ul>

          <hr className="my-2" />

          <ul className="py-2 px-3">
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white">
              Subscriptions
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              <img
                className="w-7 rounded-full"
                src={greekstack}
                alt="greekstack"
              />
              GreatStack
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              <img
                className="w-7 rounded-full"
                src={freecodecamp}
                alt="freeCodeCamp.org"
              />
              FreeCodeCamp...
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              <img
                className="w-7 rounded-full"
                src={learncode}
                alt="learn code academy"
              />
              Learn Code Aca...
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              <img
                className="w-7 rounded-full"
                src={netninja}
                alt="the net ninja"
              />
              The Net Ninja
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              <img
                className="w-7 rounded-full"
                src={traversy}
                alt="traversy Media"
              />
              Traversy Media
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              <img
                className="w-7 rounded-full"
                src={webdev}
                alt="Web Dev Simplified"
              />
              Web Dev Simpli...
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-7 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.0"
                stroke="currentColor"
                class="size-5"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
              Show More
            </li>
          </ul>

          <hr className="my-2" />

          <ul className="py-2 px-3">
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white">
              Explore
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={trendingdark} alt="trending" />
              ) : (
                <img src={trending} alt="trending" />
              )}
              Trending
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={shoppingdark} alt="shopping" />
              ) : (
                <img src={shopping} alt="shopping" />
              )}
              Shopping
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={musicdark} alt="Music" />
              ) : (
                <img src={music} alt="Music" />
              )}
              Music
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={flimdark} alt="flim" />
              ) : (
                <img src={flim} alt="flim" />
              )}
              Flims
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={livedark} alt="live" />
              ) : (
                <img src={live} alt="live" />
              )}
              Live
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={gamingdark} alt="gaming" />
              ) : (
                <img src={gaming} alt="gaming" />
              )}
              Gaming
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={newsdark} alt="news" />
              ) : (
                <img src={news} alt="news" />
              )}
              News
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={sportsdark} alt="sports" />
              ) : (
                <img src={sports} alt="sports" />
              )}
              Sport
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={coursedark} alt="Courses" />
              ) : (
                <img src={course} alt="Courses" />
              )}
              Courses
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={fashiondark} alt="Fashion & Beauty" />
              ) : (
                <img src={fashion} alt="Fashion & Beauty" />
              )}
              Fashion & Beauty
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={podcastdark} alt="podcasts" />
              ) : (
                <img src={podcast} alt="podcasts" />
              )}
              Podcasts
            </li>
          </ul>

          <hr className="my-2" />

          <ul className="py-2 px-3">
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white">
              More rom You Tube
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              <img className="w-7" src={yt} alt="youtube logo" />
              YouTubePremium
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              <img className="w-7" src={studio} alt="youtube Studio" />
              YouTube Studio
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              <img className="w-7" src={musiclogo} alt="youtube Music" />
              YouTube Music
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              <img className="w-7" src={kids} alt="YouTube Kids" />
              YouTube Kids
            </li>
          </ul>

          <hr className="my-2" />

          <ul className="py-2 px-3">
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={settingdark} alt="settings" />
              ) : (
                <img src={setting} alt="settings" />
              )}
              Settings
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={reportdark} alt="Report history" />
              ) : (
                <img src={report} alt="Report history" />
              )}
              Report history
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={helpdark} alt="help" />
              ) : (
                <img src={help} alt="help" />
              )}
              Help
            </li>
            <li className="w-52 py-2 px-4 flex items-center rounded-xl gap-5 dark:text-white hover:bg-[#eeeeee] dark:hover:bg-[#212121]">
              {theme ? (
                <img src={feedbackdark} alt="Send feedback" />
              ) : (
                <img src={feedback} alt="Send feedback" />
              )}
              Send feedback
            </li>
          </ul>

          <hr className="my-2" />

          <ul className="py-2 pl-7 pr-4 flex flex-row gap-y-0 gap-x-3 flex-wrap">
            <li className="text-[13px] font-medium text-[#666666]">About</li>
            <li className="text-[13px] font-medium text-[#666666]">Press</li>
            <li className="text-[13px] font-medium text-[#666666]">
              Copyright
            </li>
            <li className="text-[13px] font-medium text-[#666666]">
              Contact us
            </li>
            <li className="text-[13px] font-medium text-[#666666]">Creator</li>
            <li className="text-[13px] font-medium text-[#666666]">
              Advertise
            </li>
            <li className="text-[13px] font-medium text-[#666666]">
              Developers
            </li>
          </ul>

          <ul className="py-2 pl-7 pr-4 flex flex-row gap-y-0 gap-x-3 flex-wrap">
            <li className="text-[13px] font-medium text-[#666666]">Terms</li>
            <li className="text-[13px] font-medium text-[#666666]">Privacy</li>
            <li className="text-[13px] font-medium text-[#666666]">
              Policy & Safety
            </li>
            <li className="text-[13px] font-medium text-[#666666]">
              How YouTube works
            </li>
            <li className="text-[13px] font-medium text-[#666666]">
              Test new features
            </li>
          </ul>

          <h1 className="px-7 pt-2 pb-4 text-[#999999] text-xs">
            © 2024 Google LLC
          </h1>
        </div>
      )}
    </>
  );
};

export default MdMenu;
