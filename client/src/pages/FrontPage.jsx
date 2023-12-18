import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const FrontPage = ({page=0}) => {
   // console.log(bidyut)
  return (
    <div>
      <div className="cotainer-fluid">
        <div className="row">
          <Header />
          <Sidebar />

          <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
            {page}
          </main>
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
