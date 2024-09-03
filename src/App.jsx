import React from "react";
import { ThemeProvider } from "./context/Context";
import {BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
