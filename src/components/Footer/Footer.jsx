import React from "react";
import { useTheme } from "../../context/Context";

//Light Mode Icons
import home from "../../assets/home.svg";
import shorts from "../../assets/shorts.svg";
import camera from "../../assets/camera.svg";
import subscription from "../../assets/subscription.svg";

//Dark Mode Icons
import homedark from "../../assets/homedark.svg";
import shortsdark from "../../assets/shortsdark.svg";
import cameradark from "../../assets/cameradark.svg";
import subscriptiondark from "../../assets/subscriptiondark.svg";

const Footer = () => {
  const { theme } = useTheme();

  return (
    <div className="font-[roboto] grid grid-cols-5 py-2 md:hidden absolute inset-x-0 bottom-0 z-20 bg-white dark:bg-black border-t-2 border-slate-200 dark:border-[#292929]">
      <div className="flex flex-col items-center">
        {theme ? (
          <img className="w-6" src={homedark} alt="home" />
        ) : (
          <img className="w-6" src={home} alt="home" />
        )}
        <h1 className="text-xs text-black dark:text-white">Home</h1>
      </div>
      <div className="flex flex-col items-center">
        {theme ? (
          <img className="w-6" src={shortsdark} alt="shorts" />
        ) : (
          <img className="w-6" src={shorts} alt="shorts" />
        )}
        <h1 className="text-xs text-black dark:text-white">Shorts</h1>
      </div>
      <div className="flex flex-col items-center mb-auto">
        {theme ? (
          <img className="w-7" src={cameradark} alt="camera" />
        ) : (
          <img className="w-7" src={camera} alt="camera" />
        )}
      </div>
      <div className="flex flex-col items-center">
        {theme ? (
          <img className="w-6" src={subscriptiondark} alt="Subscriptions" />
        ) : (
          <img className="w-6" src={subscription} alt="Subscriptionshorts" />
        )}
        <h1 className="text-xs text-black dark:text-white">Subscriptions</h1>
      </div>
      <div className="mx-auto">
        <div className="bg-green-900 text-white text-xs py-1 px-2 rounded-full">
          P
        </div>
        <h1 className="text-xs text-black dark:text-white text-center">You</h1>
      </div>
    </div>
  );
};

export default Footer;
