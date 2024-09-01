import React from "react";

//Icons
import threedots from "../../assets/threedots.svg";
import dot from "../../assets/dot.svg";

const Video = (props) => {
  const {videoDetails} = props
  const {thumbnail,channelLogo,title,channelName,views,uploadTime} = videoDetails
  return (
    <div>
      <img
        className="w-full rounded-none md:rounded-xl md:hover:rounded-none"
        src={thumbnail}
        alt="thumnail"
      />
      <div className="w-full pt-3 pb-4 px-2 md:px-0 flex items-start">
        <div className="mr-3">
          <img className="w-8 rounded-full" src={channelLogo} alt="thumnail" />
        </div>
        <div className="w-full">
          <div className="w-full flex items-start justify-between text-black dark:text-white">
            <p className="text-sm md:text-base">{title.slice(0,80)+"..."}</p>
            <img className="ml-auto" src={threedots} alt="three dots" />
          </div>
          <div className="mt-2 w-full">
            <div className="w-full flex items-center gap-1 text-[#666666] dark:text-[#aaaaaa]">
              <h1 className="text-sm">{channelName}</h1>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="size-4"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="w-full flex items-center gap-1">
              <h1 className="text-sm text-[#666666] dark:text-[#aaaaaa]">{views} views</h1>
              <img className="w-1" src={dot} alt="dot" />
              <h1 className="text-sm text-[#666666] dark:text-[#aaaaaa]">{uploadTime}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
