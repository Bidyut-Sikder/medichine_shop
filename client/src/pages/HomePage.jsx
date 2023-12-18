import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import {NavLink} from "react-router-dom";
import FrontPage from "./FrontPage";
import CustomerPage from "./CustomerPage";


const HomePage = () => {
  return <FrontPage page={<CustomerPage />} />;
};

export default HomePage;
