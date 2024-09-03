import React from "react";

import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Suggest from "../Suggestion/Suggest";
import AllVideo from "../AllVideo/AllVideo";
import Footer from "../Footer/Footer";
import MdMenu from "../Menu/MdMenu";

const Home = () => {
  return (
    <>
      <Header />
      <MdMenu />
      <div className="fixed flex flex-row ">
        <SideBar />
        <div className="w-full lg:w-full pt-[65px] h-screen overflow-y-scroll">
          <Suggest />
          <AllVideo />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
