import React from "react";
import HomePage from "./pages/HomePage";
import Sidebar from "./components/Sidebar";
import {BrowserRouter, Routes, NavLink, Route} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import {getToken} from "./tokenHelper/TokenHelper";
import LoginPage from "./pages/LoginPage";
import VerifyPage from "./pages/VerifyPage";
import View from "./pages/View";
import CreatePage from "./pages/CreatePage";

const App = () => {
  if (getToken() != null) {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/view/" element={<View />} />
          <Route path="/create/" element={<CreatePage />} />
        </Routes>
      </BrowserRouter>
    );
  } else {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/verify/" element={<VerifyPage />} />
        </Routes>
      </BrowserRouter>
    );
  }
};

export default App;
