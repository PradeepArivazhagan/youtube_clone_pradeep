import React from "react";
import Video from "../Video/Video";

const videosList = [
  {
    id: 1,
    thumbnail: "https://i.ytimg.com/vi/zJSY8tbf_ys/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAiTtHDuTDXajbwFXx5QvVfW6D55A",
    channelLogo: "https://yt3.ggpht.com/ytc/AIdro_lGRc-05M2OoE1ejQdxeFhyP7OkJg9h4Y-7CK_5je3QqFI=s68-c-k-c0x00ffffff-no-rj",
    title: "Frontend Web Development Bootcamp Course (JavaScript, HTML, CSS)",
    channelName: "freeCodeCamp.org",
    views: "2.9M",
    uploadTime: "2 years ago",
  },
  {
    id: 2,
    thumbnail: "https://i.ytimg.com/vi/b_glcE0SOoE/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLB8TVwS7tP9g8Xpd8LIgCjkTD-lfA",
    channelLogo: "https://yt3.googleusercontent.com/dZrWJVS5N3R5R-qkneimoPXYLBC-apFge8e8q94jrMur7bLPc7PaOO1fiwPJrVfsando6fP2=s160-c-k-c0x00ffffff-no-rj",
    title: "Git And GitHub Full Course | Complete Git And GitHub Tutorial For Beginners",
    channelName: "GreatStack",
    views: "33K",
    uploadTime: "11 months ago",
  },
  {
    id: 3,
    thumbnail: "https://i.ytimg.com/vi/p8Za5MtyVdg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDsS84jZWa-x8-IPfCPhWBU1OWbmg",
    channelLogo: "https://yt3.googleusercontent.com/ytc/AIdro_kHwJ7t29TcNfW5Owu6qxxqDDzKWUSSO7mQTmiHFFZf8w=s176-c-k-c0x00ffffff-no-rj-mo",
    title: "How to code in 30min - FOR ABSOLUTE BEGINNERS",
    channelName: "LearnCode.academy",
    views: "25K",
    uploadTime: "2 years ago",
  },
  {
    id: 4,
    thumbnail: "https://i.ytimg.com/vi/Yr-ubS0H7z4/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAEJVFPCB2CTz01HViNsVuDTuu05Q",
    channelLogo: "https://yt3.googleusercontent.com/ytc/AIdro_mk2Ex-8sW03SBlBX7D1EC5skH0kv9rS3rU9IXq2I-q2Zg=s176-c-k-c0x00ffffff-no-rj-mo",
    title: "HTMX Tutorial for Beginners #1 - What is HTMX?",
    channelName: "Net Ninja",
    views: "48K",
    uploadTime: "1 month ago",
  },
  {
    id: 5,
    thumbnail: "https://i.ytimg.com/vi/XMu46BRPLqA/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzvoV5o8JOGmdLASR3e7HvY4c_3A",
    channelLogo: "https://yt3.googleusercontent.com/ytc/AIdro_mLysKc36lc_FVk2j777olWvLOjgDz6NCNGdiQBnAKRENM=s176-c-k-c0x00ffffff-no-rj-mo",
    title: "Ultimate Guide To Web Scraping - Node.js & Python (Puppeteer & Beautiful Soup)",
    channelName: "Traversy Media",
    views: "21K",
    uploadTime: "2 weeks ago",
  },
  {
    id: 6,
    thumbnail: "https://i9.ytimg.com/vi/hSi_x29bBmE/hq720_custom_1.jpg?sqp=CIzyzrYG-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCXXPbgx7PzJ6dmvCLGUiSZoCTHyg",
    channelLogo: "https://yt3.ggpht.com/ytc/AIdro_nO3F7DfVXaf6wsHPS_hF327ggeWUCwZSELb5DCWBL1aw=s68-c-k-c0x00ffffff-no-rj",
    title: "How to Build and Deploy a Portfolio with Next.js that Will Land You Jobs",
    channelName: "Web Dev Simplified",
    views: "15K",
    uploadTime: "3 days ago",
  },
  {
    id: 7,
    thumbnail: "https://i.ytimg.com/vi/EbNaHVjTL0k/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAS2pAAyn9PFiChOO5EcYkOkf1R8Q",
    channelLogo: "https://yt3.googleusercontent.com/ytc/AIdro_m05oPc8I5nhz_ej6JdKoxA6vglaI76AMqtDELBj1s2o0o=s160-c-k-c0x00ffffff-no-rj",
    title: "MalCare: WordPress Security for High Performance Websites",
    channelName: "CodeWithHarry",
    views: "17K",
    uploadTime: "2 months ago",
  },
  {
    id: 8,
    thumbnail: "https://i.ytimg.com/vi/GxmfcnU3feo/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLAi-wiyzqCnOTQEZ3oQLbpVob2Kiw",
    channelLogo: "https://yt3.ggpht.com/lCeCb47hCbXWFa0I4gi8uWDHzWSs7sjK4FDmk7lFEUMRNp6QRzIQOkwaKhwv7eNKZacRI2uR=s68-c-k-c0x00ffffff-no-rj",
    title: "The Complete Web Development Roadmap [2024]",
    channelName: "Programming with Mosh",
    views: "114K",
    uploadTime: "1 month ago",
  },
  {
    id: 9,
    thumbnail:
      "https://i.ytimg.com/vi/FYErehuSuuw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLATxvkdzVeYNpjsX8GcQCvpUa8eMw",
    channelLogo:
      "https://yt3.googleusercontent.com/Vd-4igGVIeL872Xje2tGDZKnfj5wT9AUN1mLhVAL9cP-TNuDy8BtD0X8YdzzGX4K7TSRpPq6=s160-c-k-c0x00ffffff-no-rj",
    title:
      "Mastering HTML Basics and Beyond | Your Ultimate Guide to Begin Web Development 💻 in Tamil | EMC",
    channelName: "Error Makes Clever",
    views: "1.4M",
    uploadTime: "1 year ago",
  }
];

const AllVideo = () => {
  return (
    <div className="bg-white dark:bg-[#0f0f0f] font-[roboto] grid grid-cols-1 gap-y-4 gap-x-0 md:grid-cols-2 lg:grid-cols-3 md:gap-x-4 md:gap-y-10 px-0 pt-12 pb-16 md:pt-16 md:pb-5 md:px-6">
      {videosList.map((eachVideo) => (
        <Video key={eachVideo.id} videoDetails={eachVideo} />
      ))}
    </div>
  );
};

export default AllVideo;
