import React from "react";
import { ThemeProvider } from "./context/Context";

import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import Suggest from "./components/Suggestion/Suggest";
import AllVideo from "./components/AllVideo/AllVideo";
import Footer from "./components/Footer/Footer";
import MdMenu from "./components/Menu/MdMenu";

const App = () => {
  return (
    <ThemeProvider>
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
    </ThemeProvider>
  );
};

export default App;
